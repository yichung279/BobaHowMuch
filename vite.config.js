import vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  hmr: { overlay: false },
  base: './',
  build:{
    outDir: 'docs'
  }

}
