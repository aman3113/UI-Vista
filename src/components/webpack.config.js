const path = require("path");

module.exports = {
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "uiVista.js",
		library: "UI-VISTA",
		libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/, // Add this rule to handle CSS files
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
