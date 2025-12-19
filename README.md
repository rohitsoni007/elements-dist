# Elements Dist

A self-contained distribution of Stoplight Elements web components for offline API documentation.

## Overview

This package provides a standalone version of [Stoplight Elements](https://github.com/stoplightio/elements) that can be used without CDN dependencies. All assets are bundled locally, making it suitable for offline use and faster loading times.

## Features

- Self-contained Stoplight Elements web components
- No external CDN dependencies
- Works offline after initial build
- Fast loading with local assets

## Installation

```bash
npm install
```

## Usage

This module exposes Stoplight Elements dists as a dependency-free npm module. Use @stoplight/elements instead, if you'd like to have npm install dependencies for you.

### JavaScript

Asset path can be imported by:

```javascript
const { getAssetPath } = require('elements-dist');

// Get the path to the assets directory
const assetPath = getAssetPath();
```

### TypeScript

Full TypeScript support is included with type definitions:

```typescript
import { getAssetPath } from 'elements-dist';

// Get the path to the assets directory with full type support
const assetPath: string = getAssetPath();
```

## Building

To rebuild the distribution files:

```bash
npm run build
```

This will copy the latest assets from `@stoplight/elements` and regenerate the HTML file.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for recent changes and updates.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The bundled Stoplight Elements components are licensed under the [Apache 2.0 License](web-components.min.js.LICENSE.txt).