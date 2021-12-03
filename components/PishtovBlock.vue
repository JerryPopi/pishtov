<template>
	<div class="block-container">
		<div class="image-wrapper" v-if="img" v-bind:style="{backgroundColor: bgColor}">
			<img v-bind:src="img" id="blockImage">
		</div>
		<div class="title-wrapper">
			<p id="blockTitle">{{ title }}</p>
		</div>
		<div class="footer">
			<div class="footer-creator">
				<svg id="creatorSvg" data-src="https://s2.svgbox.net/materialui.svg?ic=person"></svg>
				<p id="creatorName">{{ creator }}</p>
			</div>
			<div class="footer-stars">
				<svg id="starsSvg" data-src="https://s2.svgbox.net/hero-solid.svg?ic=star" width="32" height="32" color="#000"></svg>
				<p id="starsCount">{{ stars }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: Number,
		title: String,
		img: String,
		creator: String, 
		stars: Number,
		color: String
	},
	data(){
		return {
			bgColor: String
		}
	},
	mounted() {
		this.bgColor = this.color
        let svgLoader = document.createElement('script')
        svgLoader.setAttribute('src', 'https://unpkg.com/external-svg-loader@latest/svg-loader.min.js')
        document.head.appendChild(svgLoader)
    },
}
</script>

<style>
	.block-container {
		background-color: #182c3a;
		/* background-color: #001e26; */
		border-radius: 25px;
		height: 100%;
		width: 100%;
		max-width: 350px;
		max-height: 300px;
		font-family: 'Comfortaa';
		-webkit-box-shadow: 7px 7px 20px -7px #000000; 
		box-shadow: 0px 7px 20px -7px #0a0a0a;
		position: relative;
	}
	.image-wrapper {
		max-height: 125px;
		display: flex;
		justify-content: center;
		width: 100%;
		/* available colors #f9e282 - yellow #00c574 - green #ff4f45 - red #00c0ff - blue #a74aa1 - purple*/
		/* background-color: #a74aa1; */
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
	}
	#blockImage {
		width: 100%;
		object-fit: scale-down;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
	}
	.title-wrapper {
		width: 100%;
		display: flex;
		text-align: center;
		justify-content: center;
	}
	#blockTitle {
		color: white;
		font-size: 18px;
		padding: 0px 10px;
		margin: 0 0;
		margin-top: 15px;
	}
	.footer {
		height: 50px;
		/* background-color: #182C3A; */
		background-color: #101f2d;
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		border-bottom-left-radius: 25px;
		border-bottom-right-radius: 25px;
		justify-content: space-between;
	}
	.footer-creator {
		justify-content: flex-start;
		margin-left: 15px;
		display: flex;
		align-items: center;
		gap: 10px;
		max-width: 256px;
	}
	#creatorSvg {
		color: #00c574;
		width: 32px;
		height: 32px;
	}
	#creatorName {
		color: white;
		max-width: 230px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.footer-stars {
		justify-content: flex-end;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 15px;
		gap: 5px;
	}
	#starsSvg {
		color: #00c574;
		width: 32px;
		height: 32px;
	}
	#starsCount {
		color: white;
		justify-content: flex-end;
		width: 40px;
	}
</style>