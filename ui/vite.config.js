/* eslint-disable import/no-unresolved */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';

import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue2(),
		legacy({
			targets: ['ie >= 11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime']
		}),
		Components({
			resolvers: [VuetifyResolver()]
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			api: fileURLToPath(new URL('./src/api', import.meta.url)),
			components: fileURLToPath(new URL('./src/components', import.meta.url)),
			stores: fileURLToPath(new URL('./src/stores', import.meta.url))
		}
	}
});
