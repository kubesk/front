module.exports = {
  pages: {
      todolist: {
          entry: 'src/pages/todolist/main.js',
          template: 'public/todolist.html',
          filename: 'todolist.html',
          minify: {
            removeAttributeQuotes: false
          }
      },
      helloworld: {
          entry: 'src/pages/helloworld/main.js',
          filename: 'helloworld.html',
          minify: {
            removeAttributeQuotes: false
          }
      },
      vuenews: {
        entry: 'src/pages/vuenews/main.js',
        template: 'public/vuenews.html',
        filename: 'vuenews.html',
        minify: {
          removeAttributeQuotes: false
        }
      },
      vuenews2: {
        entry: 'src/pages/vuenews2/main.js',
        template: 'public/vuenews2.html',
        filename: 'vuenews2.html',
        minify: {
          removeAttributeQuotes: false
        }
      },
      pagination: {
        entry: 'src/pages/pagination/main.js',
        template: 'public/pagination.html',
        filename: 'pagination.html',
        minify: {
          removeAttributeQuotes: false
        }
      },
      login: {
        entry: 'src/pages/login/main.js',
        template: 'public/login.html',
        filename: 'login.html',
        minify: {
          removeAttributeQuotes: false
        }
      },
      logout: {
        entry: 'src/pages/logout/main.js',
        template: 'public/logout.html',
        filename: 'logout.html',
        minify: {
          removeAttributeQuotes: false
        }
      },
  },
  devServer: {
    proxy: 'http://localhost:8080',
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
