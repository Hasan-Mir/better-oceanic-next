# Change Log

All notable changes to the "better-oceanic-next" extension will be documented in this file.

## [1.2.1] - 2026-10-25

### Added

- **JetBrains Plugin:** Ported the theme to JetBrains IDEs as a plugin under [`jetbrains/`](jetbrains/) — full UI theme plus matching editor color scheme (see [jetbrains/CHANGELOG.md](jetbrains/CHANGELOG.md)).

### Changed

- **Staged Changes Gutter:** Added explicit, more vivid colors for staged lines in the editor gutter so they stay clearly visible (`editorGutter.modifiedSecondaryBackground`, `editorGutter.addedSecondaryBackground`, `editorGutter.deletedSecondaryBackground`).

---

## [1.2.0] - 2026-08-27

### Changed

- **Find & Search Highlights:** Redesigned active and highlighted search match colors with improved contrast and border styling (`editor.findMatch*`, `editorOverviewRuler.findMatchForeground`).
- **Diff Editor:** Added distinct line background highlights (`diffEditor.insertedLineBackground`, `diffEditor.removedLineBackground`) and refined text diff colors.
- **Tabs Styling:** Switched the active tab indicator from bottom border to top border (`tab.activeBorderTop`).
- **Word Highlights:** Added border styling for highlighted words under the cursor (`editor.wordHighlightBorder`).

---

## [1.0.0] - 2024-07-04

- Initial release
