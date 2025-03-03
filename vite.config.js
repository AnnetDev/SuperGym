import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

export default defineConfig({
  // Указываем, какие файлы должны обрабатываться как ассеты.
  assetsInclude: /\.(woff2|woff|png|jpe?g|webp)$/,
  plugins: [
    VitePluginSvgSpritemap('source/img/sprite/*.svg', {
      styles: false,
      injectSVGOnDev: true,
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false,
                },
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                cleanupIds: false,
              },
            },
          },
          'removeDimensions',
        ],
      },
      png: {
        quality: 80,
        palette: true
      },
      jpeg: {
        quality: 80,
        progressive: true
      },
      jpg: {
        quality: 80,
        progressive: true
      },
      cache: true,
      cacheLocation: './.cache',
    }),
  ],
  css: {
    devSourcemap: true
  },
  publicDir: 'public',
  root: './source',
  build: {
    outDir: '../dist',
  },
  base: './',
  server: {
    port: 3000,
  }
});
