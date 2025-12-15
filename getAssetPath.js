/**
 * Utility function to get the absolute filesystem path to the assets directory
 * This is useful for serving static assets in Node.js environments
 */

const getAssetPath = function () {
  // Detect whether we are running in a browser or Node.js
  if (typeof module !== "undefined" && module.exports) {
    // In Node.js, resolve to the directory containing this module
    return require("path").resolve(__dirname);
  }

  throw new Error('getAssetPath can only be called within a Node.js environment');
};

module.exports = getAssetPath;