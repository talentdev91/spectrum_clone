/**
 * Override things of the default create-react-app configuration here
 *
 * This is using react-app-rewired by @timarney
 */

const swPrecachePlugin = require('sw-precache-webpack-plugin');
const isServiceWorkerPlugin = plugin => plugin instanceof swPrecachePlugin;
const whitelist = path => new RegExp(`^(?!\/${path}).*`);
// Don't cache server routes with the ServiceWorker
const setCustomSwPrecacheOptions = config => {
  const swPlugin = config.plugins.find(isServiceWorkerPlugin);
  const { navigateFallbackWhitelist } = swPlugin.options;
  // Add all /api and /auth routes to the whitelist to not be cached by the ServiceWorker
  swPlugin.options.navigateFallbackWhitelist = [whitelist('(api|auth|__)')];
};

module.exports = function override(config, env) {
  setCustomSwPrecacheOptions(config);
  return config;
};
