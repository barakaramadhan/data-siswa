import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import HellowWorld from './src/hellow-world/HellowWorld'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions:{
      input:{
        index : "index.html",
        hello_world : "hellow-world.html",
        contact : "contact.html",
        task : "task.html",
        daftar_nama : "daftar-nama.html"
      }
    }
  }
})
