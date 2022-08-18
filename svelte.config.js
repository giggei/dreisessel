//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static'; 
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV !== 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		//adapter: adapter(),
		prerender: {
			default: true,
			entries: []
		},
		adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: false
        }),
        trailingSlash: 'always',
        paths: {
            base: dev ? "" : "/dreisessel",
        }
	}
	/*
	kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: 'index.html'
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/dreisessel",
        },
		prerender: {
			default: true,
			entries: []
		},
    }
	*/
};

export default config;
