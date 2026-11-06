# Better Oceanic Next — JetBrains plugin

The **Better Oceanic Next** theme (Dainty – Oceanic Next port) packaged as a plugin for
IntelliJ-based IDEs: IntelliJ IDEA, WebStorm, PhpStorm, DataGrip, PyCharm, GoLand, CLion,
Android Studio, Rider, RubyMine… (2023.3 and later).

It bundles both a full **UI theme** and a matching **editor color scheme**.

## Build

From the repo root (mirrors the VS Code `npm run package` workflow; picks a JDK 17+
automatically — Gradle 9 cannot run on older JVMs like a Java 11 `JAVA_HOME`):

```bash
npm run package:jetbrains
```

Or directly (requires JDK 17+ on `JAVA_HOME` — Gradle itself is fetched by the wrapper):

```bash
cd jetbrains
./gradlew buildPlugin
```

The distributable lands in `jetbrains/build/distributions/better-oceanic-next-jetbrains-<version>.zip`.

The first build downloads the IntelliJ Platform (~700 MB) into the Gradle cache, since it is
needed for running/verifying the plugin. The plugin itself is resources-only — there is no
Java/Kotlin code.

## Install (from disk)

In your IDE: **Settings | Plugins | ⚙ | Install Plugin from Disk…**, pick the built zip,
restart, then choose **Settings | Appearance & Behavior | Appearance | Theme | Better Oceanic Next**.

## Preview while developing

```bash
./gradlew runIde
```

Spawns a sandboxed IntelliJ IDEA Community with the plugin loaded. (WebStorm/PhpStorm/DataGrip
can also be targeted with `runIde` if you add the corresponding product dependency in
`build.gradle.kts`.)

## Editor colors only

You don't have to switch the whole UI: **Settings | Editor | Color Scheme** lists
**Better Oceanic Next** as a standalone scheme (bundled via `com.intellij.bundledColorScheme`).

## Publishing to JetBrains Marketplace

Set up signing (Marketplace requires signed plugins), then:

```bash
./gradlew publishPlugin
```

In `build.gradle.kts`:

```kotlin
intellijPlatform {
    publishing {
        token = providers.environmentVariable("PUBLISH_TOKEN")
    }
    signing {
        certificateChain = providers.environmentVariable("CERTIFICATE_CHAIN")
        privateKey = providers.environmentVariable("PRIVATE_KEY")
        password = providers.environmentVariable("PRIVATE_KEY_PASSWORD")
    }
}
```

Create a plugin token at https://plugins.jetbrains.com/author/me/tokens and generate a signing
certificate following the [Marketplace signing instructions](https://plugins.jetbrains.com/docs/intellij/plugin-signing.html)
(`keytool`-based key pair, registered in your JetBrains Account profile).

## Notes on the port

- The editor color scheme XML does not support alpha, so every translucent VS Code color
  (`#rrggbbaa`) is pre-blended against the surface it is drawn on (`#262a30` for editor
  surfaces). The UI theme JSON keeps the original alpha values as-is.
- Git gutter colors use the vivid set from the VS Code theme (`#32e86c` / `#2478ff` /
  `#e83232`). JetBrains draws *staged* lines as hollow outlines in the same color, which the
  vivid values keep readable.
- Markdown headings use the `markup.heading` color (`#c594c5`) without bold, matching the
  final override in the VS Code theme's `tokenColors`.
- Java annotations (`DEFAULT_METADATA`, `ANNOTATION_NAME_ATTRIBUTES`) are `#fac863`, matching
  the theme's `storage.type.annotation.java` rule.
