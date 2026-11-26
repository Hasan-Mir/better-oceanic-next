plugins {
    id("java")
    id("org.jetbrains.intellij.platform") version "2.20.0"
}

group = "com.seymi"
version = "1.3.1"

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
        changeNotes = """
            <h3>1.3.1</h3>
            <ul>
                <li>Synced version with the VS Code extension at 1.3.1.</li>
            </ul>
            <h3>1.3.0</h3>
            <ul>
                <li>Updated plugin README with banner artwork and Marketplace installation instructions.</li>
                <li>Synced version with the VS Code extension at 1.3.0.</li>
            </ul>
        """.trimIndent()
    }
    publishing {
        token = providers.environmentVariable("PUBLISH_TOKEN")
    }
}

dependencies {
    intellijPlatform {
        // Only used for runIde / verifyPlugin — the plugin itself is resources-only (no code).
        intellijIdeaCommunity("2024.2.4")
    }
}
