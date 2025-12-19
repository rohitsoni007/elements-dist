# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [9.0.13] - 2025-12-19

### Changed
- Updated package version to match @stoplight/elements version 9.0.13

### Added
- TypeScript support with declaration files

## [0.0.1] - 2025-12-15

### Added
- Initial release of elements-dist
- Self-contained distribution of Stoplight Elements web components
- Local bundling of `web-components.min.js` and `styles.min.css` for offline use
- `getAssetPath()` utility function for resolving asset paths in Node.js environments
- Build script to copy assets from `@stoplight/elements` during build process
- Dependency-free npm module structure