//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static'; 
import preprocess from "svelte-preprocess";

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	//kit: {
	//	adapter: adapter()
	//}
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
};

export default config;
