# Change Log

All notable changes to the "better-oceanic-next-jetbrains" plugin will be documented in this file.
Versions generally track the VS Code extension the theme is ported from, with independent patch bumps for JetBrains-specific fixes.

## [1.3.1] - 2026-11-26

- Version bump to stay in sync with the VS Code extension (`1.3.1`).

---

## [1.3.0] - 2026-11-26

- Updated `jetbrains/README.md` with banner artwork and Marketplace installation instructions.
- Version bump to stay in sync with the VS Code extension (`1.3.0`).

---

## [1.2.3] - 2026-11-23

- Added missing TypeScript and JavaScript semantic highlighting keys (`TS.TYPE_ALIAS`,
  `TS.INTERFACE`, `TS.PRIMITIVE.TYPES`, `TS.TYPE_GUARD`, `TS.ENUM`, `TS.ENUM_MEMBER`,
  `TS.NAMESPACE`, `TS.EXPORTED.*`, `JS.EXPORTED.*`, `JS.GLOBAL_CLASS`, `TS.GLOBAL_CLASS`,
  `JS.NULL_UNDEFINED`, `TS.NULL_UNDEFINED`, `JS.PRIMITIVE`, `JS.THIS_SUPER`, `TS.THIS_SUPER`,
  `JS.JSX_CLIENT_COMPONENT`, `TS.JSX_CLIENT_COMPONENT`, `JS.DECORATOR`, `TS.DECORATOR`,
  `JS.STATIC_MEMBER_VARIABLE`, `TS.STATIC_MEMBER_VARIABLE`, `JS.OBJECT_KEY`, `TS.OBJECT_KEY`,
  and explicit punctuation/operator/JSDoc keys) to match VS Code's Better Oceanic Next palette.
- Moved all VCS `FILESTATUS_*` keys from `<attributes>` to `<colors>` so Git file status colors
  render in the Project tree and editor tabs.
- Fixed invalid editor color keys (`INDENT_GUIDE`, `SELECTED_INDENT_GUIDE`, `VISUAL_INDENT_GUIDE`,
  `WHITESPACES`) and inverted `EFFECT_TYPE` values (underline `1` for hyperlinks, bordered box `0`
  for search/caret/brace highlights).
- Fixed `DEFAULT_CONSTRUCTOR_CALL` (`#fac863`), `DEFAULT_PREDEFINED_SYMBOL` (`#fac863`),
  `JS.REGEXP`/`TS.REGEXP` (`#99c794`), and `MARKDOWN_LIST_ITEM` (`#65737e`) to match VS Code.
- Added inlay hint, breadcrumb, and explicit Java/Kotlin/Python/Go/Rust/CSS/SCSS/YAML overrides
  to prevent `Darcula` parent-scheme leaks.
- Added subtle Oceanic Next `FileColor.*` tints and New UI polish keys in
  `BetterOceanicNext.theme.json`.

---

## [1.2.2] - 2026-11-20

- Version bump to stay in sync with the VS Code extension.

---

## [1.2.1] - 2026-11-06

- Initial JetBrains release, ported from the VS Code theme at version 1.2.1: full UI theme
  (`BetterOceanicNext.theme.json`) plus editor color scheme (`BetterOceanicNext.xml`), also
  selectable standalone under Settings | Editor | Color Scheme.
