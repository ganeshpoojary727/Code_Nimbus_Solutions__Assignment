import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-root-public-dev',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next()
          const url = req.url.split('?')[0]
          if (url.startsWith('/svg/') || url.startsWith('/images/') || url.startsWith('/fonts/') || url === '/favicon.svg') {
            const filePath = path.join(import.meta.dirname, 'public', url)
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              if (filePath.endsWith('.svg')) res.setHeader('Content-Type', 'image/svg+xml')
              else if (filePath.endsWith('.webp')) res.setHeader('Content-Type', 'image/webp')
              else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) res.setHeader('Content-Type', 'image/jpeg')
              else if (filePath.endsWith('.png')) res.setHeader('Content-Type', 'image/png')
              else if (filePath.endsWith('.ttf')) res.setHeader('Content-Type', 'font/ttf')
              fs.createReadStream(filePath).pipe(res)
              return
            }
          }
          next()
        })
      }
    }
  ],
  base: '/Code_Nimbus_Solutions__Assignment/',
})