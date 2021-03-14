module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/scss/utils/_variables.scss";`
            }
        }
    },
    pages: {
      index: {
        // entry for the page
        entry: 'src/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'tretton37 Colleagues page',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
    }
  }