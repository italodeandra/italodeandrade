const { useBabelRc, override, removeModuleScopePlugin } = require('customize-cra')

module.exports = override(
  useBabelRc(), removeModuleScopePlugin()
)