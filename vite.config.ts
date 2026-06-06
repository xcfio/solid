import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2"
import { solidStart } from "@solidjs/start/config"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const preset = process.env.SERVER_PRESET ?? process.env.NITRO_PRESET ?? "node-server"
export default defineConfig({
    plugins: [solidStart(), tailwindcss(), nitro({ preset })],
    resolve: { alias: { "@": resolve(__dirname, "./src") } }
})
