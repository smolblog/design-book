import browserslist from 'browserslist';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { browserslistToTargets } from 'lightningcss';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
  css: {
    // transformer: 'lightningcss',
    // lightningcss: {
    //   targets: browserslistToTargets(browserslist('>= 0.25%'))
    // }
  },
  build: {
    cssMinify: 'lightningcss'
  }
});
