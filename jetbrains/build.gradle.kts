plugins {
    id("java")
    id("org.jetbrains.intellij.platform") version "2.20.0"
}

group = "com.seymi"
version = "1.2.3"

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
            <h3>1.2.3</h3>
            <ul>
                <li>Full TypeScript, JavaScript, JSX/TSX, React, Java, Kotlin, Python, Go, Rust, CSS/SCSS, HTML, JSON, YAML, and Markdown semantic syntax parity with VS Code.</li>
                <li>Fixed Git file status colors (moved FILESTATUS_* to &lt;colors&gt;) and corrected INDENT_GUIDE, VISUAL_INDENT_GUIDE, WHITESPACES, and EFFECT_TYPE mappings.</li>
                <li>Added subtle Oceanic Next FileColor scopes, editor/UI overlay scrollbar parity, non-default Button surfaces, and Notification.ToolWindow.informativeBackground fix.</li>
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
