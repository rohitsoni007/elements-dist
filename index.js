// Entry point for the Elements Dist application
// Exposes Stoplight Elements as a dependency-free module

const WebComponents = require('./web-components.min.js');
const getAssetPath = require('./getAssetPath');

/**
 * Stoplight Elements Web Components
 * This is a self-contained distribution that can be used without any external dependencies
 */
module.exports = {
  WebComponents,
  getAssetPath,
};