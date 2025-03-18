import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'normalize-src-in-js',
      transform(code, id) {
        // Kiểm tra nếu tệp hiện tại là một tệp JavaScript (.js)
        if (id.endsWith('.jsx')) {
          // Thay thế các thuộc tính src trong mã JS bắt đầu bằng "/" thành "./"
          return code.replace(/src="\/([^"]+)"/g, 'src="./$1"');
        }
        return code;
      }
    }
  ],
  base: './', // Đảm bảo base path là './' để các đường dẫn đều sử dụng './'
})
