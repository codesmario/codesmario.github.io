const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 9001,
        headers: { "Access-Control-Allow-Origin": "*" },
    },
    devtool: "inline-source-map",
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sassOptions: {
                            outputStyle: 'compressed',
                        },
                    },
                }
            ],
          },
        ],
    }
};