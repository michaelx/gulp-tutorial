var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    }
  },
  delete: {
    src: [developmentAssets]
  },
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml'
    }
  },
  sass: {
    src:  srcAssets + '/scss/**/*.{sass,scss}',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../../_assets/scss'
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries:    './' + srcAssets + '/javascripts/application.js',
      dest:       developmentAssets + '/js',
      outputName: 'application.js'
    }, {
      entries:    './' + srcAssets + '/javascripts/head.js',
      dest:       developmentAssets + '/js',
      outputName: 'head.js'
    }]
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  copyfonts: {
    development: {
      src:  srcAssets + '/fonts/*',
      dest: developmentAssets + '/fonts'
    }
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      'stopwords.txt',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_locales/*.yml',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    sass:    srcAssets + '/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/javascripts/**/*.js',
    images:  srcAssets + '/images/**/*',
    sprites: srcAssets + '/images/**/*.png',
    svg:     'vectors/*.svg'
  },
  scsslint: {
    src: [
      srcAssets + '/scss/**/*.{sass,scss}',
      '!' + srcAssets + '/scss/base/_sprites.scss',
      '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
    ]
  },
  jshint: {
    src: srcAssets + '/javascripts/*.js'
  }
};