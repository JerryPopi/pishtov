import { defineNuxtConfig } from 'nuxt3'
// import dotenv from 'dotenv'
// dotenv.config()
require('dotenv').config()

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {
	css: [
		'~/assets/Comfortaa.css'
	],
	dir: {
		static: 'static',
	},
	modules: [
		['@nuxtjs/axios', { proxyHeaders: false, baseURL: "http://localhost:3000/api" }],
		// '@nuxtjs/auth-next'
	],
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/dotenv'
	],
	axios: {
		baseURL: "http://localhost:3000/api",
	},
	vue: {
		config: {
			productionTip: false,
			devtools: true
		}
	},
	publicRuntimeConfig: {
		axios: {
			baseURL: "http://localhost:3000/api",
		},
		baseURL: "http://localhost:3000/api",
	},
	// auth: {
	// 	strategies: {
	// 		local: {
	// 			endpoints: {

	// 			}
	// 		}
	// 	}
	// }
	// auth: {

	// },
	// router: {
		// middleware: ['auth']
	// }
}
