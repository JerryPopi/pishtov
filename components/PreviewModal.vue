<template>
	<div class="modal-mask" @click.prevent="this.$emit('closemodal')">
		<div class="modal-wrapper" @click.stop=";">
			<div class="modal-container">
				<div class="modal-header">
					<div class="modal-title-container">
						<p id="modalTitle">{{ title }} asdasdhahsdhashdhas</p>
					</div>
					<div class="modal-close-container">
						<svg id="modalClose" data-src="https://s2.svgbox.net/hero-outline.svg?ic=x"></svg>
					</div>
				</div>
				<div class="modal-content">

				</div>
				<div class="modal-footer">

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			id: Number
		},
		mounted() {
			this.bgColor = this.color
			let svgLoader = document.createElement('script')
			svgLoader.setAttribute('src', 'https://unpkg.com/external-svg-loader@latest/svg-loader.min.js')
			document.head.appendChild(svgLoader)
    	},
	}	
</script>

<script setup>
	const { data } = await useFetch('/api/pishtov?id=1')
	console.log(data._value)
</script>

<style scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #00000080;
		transition: opacity 1s ease;
	}
	.modal-wrapper {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	.modal-container {
		border-radius: 30px;
		background-color: #182C3A;
		width: 60%;
		height: 80%;
		min-width: 700px;
		display: flex;
		justify-content: center;
	}
	.modal-header {
		height: 60px;
		width: 100%;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
		background-color: #a74aa1;
		display: flex;
		justify-content: space-between;
	}
	.modal-title-container {
		width: 100%;
		display: flex;
		margin-left: 20px;
		justify-content: flex-start;
		align-items: center;
	}
	.modal-close-container {
		/* width: 100%; */
		margin-right: 10px;
		margin-top: 10px;
		display: flex;
		justify-self: flex-end;
	}
	#modalTitle {
		font-family: 'Comfortaa';
		font-size: 20px;
		color: white;
	}
	#modalClose {
		color: white;
		width: 40px;
		height: 40px;
		/* display: flex;
		justify-self: flex-end; */
	}
</style>