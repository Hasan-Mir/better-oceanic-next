plugins {
    id("java")
    id("org.jetbrains.intellij.platform") version "2.20.0"
}

group = "com.seymi"
version = "1.2.1"

repositories {
    mavenCentral()
    intellijPlatform {
        defaultRepositories()
    }
}

intellijPlatform {
    pluginConfiguration {
        ideaVersion {
            sinceBuild = "233"
            untilBuild = provider { null }
        }
    }
}

dependencies {
    intellijPlatform {
        // Only used for runIde / verifyPlugin — the plugin itself is resources-only (no code).
        intellijIdeaCommunity("2024.2.4")
    }
}
