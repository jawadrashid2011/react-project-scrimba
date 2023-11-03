var path = require('path')

module.exports = {
  "output": {
    "filename": "[name].pack.js",
    path: path.resolve(__dirname, "./")
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  "entry": {
    "index": "./index"
  },
  mode: 'development'
};