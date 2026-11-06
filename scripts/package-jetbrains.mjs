// Packaging helper for the JetBrains plugin: locates a JDK 17+ (Gradle 9 cannot
// run on older JVMs, and JAVA_HOME may point at one), then runs the Gradle
// wrapper's buildPlugin task. Usage: npm run package:jetbrains [-- extra gradle args]
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { join, delimiter } from 'node:path';
import { homedir } from 'node:os';

const projectDir = join(import.meta.dirname, '..', 'jetbrains');
const gradlew = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';

function javaMajor(javaBin) {
  try {
    // `java -version` prints to stderr.
    const { stderr } = spawnSync(javaBin, ['-version'], { encoding: 'utf8' });
    const m = (stderr || '').match(/version "(\d+)/);
    return m ? Number(m[1]) : 0;
  } catch {
    return 0;
  }
}

function* jdkCandidates() {
  if (process.env.JAVA_HOME) yield join(process.env.JAVA_HOME, 'bin', 'java.exe');
  const pfJava = 'C:\\Program Files\\Java';
  if (existsSync(pfJava)) {
    const jdks = readdirSync(pfJava)
      .filter((n) => /^jdk-\d/.test(n))
      .sort((a, b) => Number(b.match(/\d+/)[0]) - Number(a.match(/\d+/)[0]));
    for (const n of jdks) yield join(pfJava, n, 'bin', 'java.exe');
  }
  yield 'C:\\Program Files\\Android\\Android Studio\\jbr\\bin\\java.exe';
  const jdksDir = join(homedir(), '.jdks');
  if (existsSync(jdksDir)) {
    for (const n of readdirSync(jdksDir).sort().reverse()) yield join(jdksDir, n, 'bin', 'java.exe');
  }
}

const javaBin =
  process.platform === 'win32'
    ? [...jdkCandidates()].find((p) => existsSync(p) && javaMajor(p) >= 17)
    : process.env.JAVA_HOME && javaMajor(join(process.env.JAVA_HOME, 'bin', 'java')) >= 17
      ? join(process.env.JAVA_HOME, 'bin', 'java')
      : null;

if (!javaBin) {
  console.error('No JDK 17+ found. Set JAVA_HOME to a JDK 17+ installation and retry.');
  process.exit(1);
}

const javaHome = javaBin.replace(/[\\/]bin[\\/]java(\.exe)?$/, '');
console.log(`Using JAVA_HOME: ${javaHome}`);
console.log(`Running: ${gradlew} buildPlugin ${process.argv.slice(2).join(' ')}\n`);

const child = spawn(
  process.platform === 'win32' ? 'cmd.exe' : gradlew,
  process.platform === 'win32'
    ? ['/d', '/s', '/c', `${gradlew} buildPlugin ${process.argv.slice(2).join(' ')}`]
    : ['buildPlugin', ...process.argv.slice(2)],
  {
    cwd: projectDir,
    stdio: 'inherit',
    env: { ...process.env, JAVA_HOME: javaHome },
  },
);
child.on('exit', (code) => process.exit(code ?? 1));
