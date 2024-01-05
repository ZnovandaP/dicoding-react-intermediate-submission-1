import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { webfontDownload } from 'vite-plugin-webfont-dl';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload(
      [
        'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap',
        'https://fonts.googleapis.com/css2?family=Satisfy&display=swap',
        'https://fonts.googleapis.com/css2?family=Alegreya:wght@600;700;800&display=swap',
      ],
      {
        injectAsStyleTag: true,
        minifyCss: true,
        async: true,
        cache: true,
        proxy: false,
      },
    ),
    chunkSplitPlugin({
      strategy: 'default',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        '**/*',
      ],
      manifest: {
        name: 'Catatanku',
        theme_color: '#FF1E56',
        background_color: '#171717',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'Catatanku',
        orientation: 'portrait-primary',
        description: 'Catatanku merupakan web aplikasi yang bertujuan untuk menyimpan data catatan yang user buat, disini kita dapat menambahkan, mengubah, menghapus data catatan.',
        icons: [
          {
            src: 'android/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'ios/50.png',
            sizes: '50x50',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/100.png',
            sizes: '100x100',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'ios/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: 'maskable/maskable_icon_x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'maskable/maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,jsx,ts,tsx,html,css,jpg,webp,png,ico,svg,json,woff,woff2,ttf}'],
      },
    }),
  ],
});
