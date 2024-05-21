import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
      VITE_GOOGLE_OAUTH_CLIENT_ID: process.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
    }
  }
})
