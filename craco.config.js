const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#f5b300',
              '@progress-default-color': '#f5b300',
              '@input-hover-border-color': 'transparent'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
