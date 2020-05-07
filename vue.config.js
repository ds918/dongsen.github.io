module.exports = {
  publicPath: "/",
  assetsDir: "static",
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  crossorigin: "anonymous",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "MY APP",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    extra: {
      entry: "src/extra/extra.js",
      template: "public/extra.html",
      filename: "extra.html",
      title: "MY APP",
      chunks: ["chunk-vendors", "chunk-common", "extra"],
    },
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "/api": {
        target: "http://www.example.org", //http://www.example.org/api 任何未知请求 (没有匹配到静态文件的请求) 代理地址
        ws: true,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {},
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/css/variables.scss";`,
      },
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 75,
          }),
        ],
      },
    },
  },
};
