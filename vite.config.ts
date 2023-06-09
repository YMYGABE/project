import { defineConfig, UserConfigExport, ConfigEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [vue(),
        //引入SVG图标素材文件
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/')],
            symbolId: 'icon-[dir]-[name]',
        }),
        viteMockServe({
            mockPath: 'mock',
            enable: true,
        }),
        ],
        resolve: {
            alias: {
                '@': path.resolve("./src") //相对路径别名配置 用 @ 代替 src
            }
        }

    }
})
