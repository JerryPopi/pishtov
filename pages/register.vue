<template>
	<div class="page-container">
		<Header/>
		<div class="auth-wrapper">
			<Auth />
		</div>
	</div>
</template>

<style scoped>
	.page-container {
		min-height: 100vh;
		width: 100%;
		align-items: center;
		background-color: #001e26;
	}
	.auth-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		max-height: 100;
	}
</style>