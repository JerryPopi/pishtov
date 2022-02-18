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
				if(this.rawMd == null || this.rawMd == undefined) {
					return marked("# No such pishtov found!");
				}
				let clean = xss(this.rawMd);
				return marked(clean);
			}
		},
	}
</script>

<script setup>
	import { marked } from 'marked'
	import xss from 'xss'
</script>