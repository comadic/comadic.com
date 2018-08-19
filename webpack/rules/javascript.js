const PATHS = require('../paths');

module.exports = ({ production = false, browser = false } = {}) => {
  const enableHotModuleReplacement = !production && browser;
  const createPresets = enabled => {
    const presets = ['env', 'react', 'es2015', 'stage-2'];

    return enabled ? ['react-hmre', ...presets] : presets;
  };
  const presets = createPresets(enableHotModuleReplacement);

  let plugins = [];

  if (production) {
    plugins = [
      'transform-react-remove-prop-types',
      'transform-react-constant-elements',
      'transform-react-inline-elements',
    ];
  }

  return {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    options: {
      presets,
      plugins,
    },
    exclude: PATHS.modules,
  };
};
