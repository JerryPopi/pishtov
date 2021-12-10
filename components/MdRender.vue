<template>
	<div class="md-render" v-html="compiledMd"></div>
</template>

<script>
	export default {
		props: {
			rawMd: String
		},
		computed: {
			compiledMd() {
				return marked(this.rawMd, { sanitize: true })
			}
		},
	}
</script>

<script setup>
	import { marked } from 'marked'
</script>