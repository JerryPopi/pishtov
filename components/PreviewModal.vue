<template>
	<div class="modal-mask">
		<div class="modal-wrapper" @click.prevent="this.$emit('closemodal')">
			<div class="modal-container" @click.stop>
				<div class="modal-header">
					<div class="modal-title-container">
						<p id="modalTitle">{{ title }}</p>
					</div>
					<div class="modal-close-container" @click.prevent="this.$emit('closemodal')">
						<svg id="modalClose" data-src="https://s2.svgbox.net/hero-outline.svg?ic=x"></svg>
					</div>
				</div>
				<div class="modal-content-wrapper">
					<div class="modal-content-container">
						<MdRender :rawMd="rawMd" />
					</div>
				</div>
				<div class="modal-footer">
					<div class="modal-timestamp-container">
						<svg id="footerTimestampSvg" data-src="https://s2.svgbox.net/hero-outline.svg?ic=clock"></svg>
						<p id="footerTimestamp">{{ date }}</p>
					</div>
					<div class="modal-navigation">
						<!-- // TODO - Add external link & Back and Forward buttons -->
						<div class="previous-modal-button" @click="this.$emit('previousmodal')">
							<div class="modal-openexternal">&lt;---</div>
						</div>
						<nuxt-link class="nuxt-link" :to="'/pishtov/' + id">
							<div class="modal-openexternal">
								<p id="openexternalButton">Open external</p>
							</div>
						</nuxt-link>
						<div class="next-modal-button">
							<div class="modal-openexternal" @click="this.$emit('nextmodal')">---></div>
						</div>
					</div>
					<div class="modal-creator-container">
						<svg id="footerCreatorSvg" data-src="https://s2.svgbox.net/materialui.svg?ic=person"></svg>
						<p id="footerCreator">{{ creator }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import axios from 'axios'	
</script>

<script>
	export default {
		props: {
			id: Number
		},
		data() {
			return {
				title: "",
				img: "",
				creator: "",
				date: "",
				stars: 0,
				bgColor: '',
				rawMd: "",
			}
		},
		async created() {
			let svgLoader = document.createElement('script')
			svgLoader.setAttribute('src', 'https://unpkg.com/external-svg-loader@latest/svg-loader.min.js')
			document.head.appendChild(svgLoader)

			const data = await axios.get('/api/pishtov?id=' + this.id)
			console.log("data: " + JSON.stringify(data.data))

			this.title   = data.data["title"]
			this.img     = data.data["img"]
			this.creator = data.data["creator"]
			this.date    = data.data["date"]
			this.stars   = data.data["stars"]
			this.bgColor = data.data["color"]
			this.rawMd   = data.data["md"]
		},
	}
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
		min-height: 700px;
		min-width: 700px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
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
		cursor: pointer;
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
	}
	.modal-content-wrapper {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		overflow-x: hidden;
		overflow-y: scroll;
		overscroll-behavior: contain;
	}
	.modal-content-container {
		font-family: 'Comfortaa';
		margin: 0px 20px;
		color: white;
	}
	.modal-footer {
		margin-top: auto;
		margin-left: 15px;
		margin-bottom: 15px;
		margin-right: 15px;
		font-family: 'Comfortaa';
		display: flex;
		justify-content: space-between;
	}
	.modal-timestamp-container {
		display: flex;
		align-items: center;
	}
	#footerTimestampSvg {
		color: #00c574;
		margin-right: 10px;
		width: 40px;
		height: 40px;
	}
	#footerTimestamp {
		color: white;
		margin: 0 0;
		font-size: 20px;
	}
	.modal-navigation {
		width: 50%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.previous-modal-button {
		width: 30%;
		height: 90%;
		text-decoration: none;
		cursor: pointer;
	}
	.nuxt-link {
		width: 50%;
		height: 90%;
		text-decoration: none;
	}
	.next-modal-button {
		width: 30%;
		height: 90%;
		text-decoration: none;
		cursor: pointer;
	}
	.modal-openexternal {
		width: 100%;
		height: 90%;
		background-color: #00c574;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30px;
	}
	#openexternalButton {
		color: white;
		font-size: 20px;
		margin: 0 0;
		font-weight: bold;
	}
	.modal-creator-container {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	#footerCreatorSvg {
		color: #00c574;
		width: 40px;
		height: 40px;
		margin-right: 10px;
	}
	#footerCreator {
		color: white;
		margin: 0 0;
		font-size: 20px;
	}
</style>