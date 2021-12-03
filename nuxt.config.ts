import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	css: [
		'~/assets/Comfortaa.css'
	],
	// serverMiddleware: [
	// 	{ path: '/api', handler: '~/api/hello.js' }
	// ],
	// serverMiddleware: {
	// 	'/api/hello': '~/api/hello.js'
	// },
	head: {
		// title: "Nuxt.js",
		link: [
			// { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2" },
			// { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Comfortaa"}
		]
	},
	dir: {
		static: 'static',
	},
})
