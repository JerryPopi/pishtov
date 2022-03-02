<template>
	<div class="form-wrapper">
		<h1 id="registerTitle">Register</h1>
		<form v-if="register" action="/api/register">
			<div class="form-inputs">
				<div class="form-username">
					<!-- <label for="username">Name</label> -->
					<input id="username" type="text" name="username" v-model="username" required aria-label="Username" placeholder="Username">
				</div>
				<div class="form-email">
					<!-- <label for="email">Email</label> -->
					<input id="email" type="text" name="email" v-model="email" required aria-label="Email" placeholder="Email">
				</div>
				<div class="form-password">
					<!-- <label for="password" aria-label="">Password</label> -->
					<input id="password" type="password" name="password" v-model="password" required aria-label="Password" placeholder="Password">
				</div>
				<div class="form-confirm-password">
					<input id="confirmPassword" type="password" name="confirmPassword" v-model="confirPassword" required aria-label="Confirm password" placeholder="Confirm password">
				</div>
			</div>
		</form>
		<form v-else action="/api/login">
			login
		</form>
	</div>
</template>

<script>
	export default {
		props: {
			register: Boolean
		}
	}
</script>

<style scoped>
	* {
		font-family: 'Comfortaa';
		color: white;
	}
	.form-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		max-height: 100;
	}
	#registerTitle {
		color: white;
		font-size: 4em;
	}
	input, label {
		display: block;
	}
	.form-inputs {
		display: inline;
	}
	.form-inputs > div {
		margin: 10px;
	}
	.form-inputs div input {
		min-width: 340px;
		min-height: 25px;
		padding: 10px 10px;
		background-color: #182c3a;
		border: none;
		border-radius: 10px;
		font-size: 1.4em;
	}
	input::placeholder {
		color: #959ea4;
	}
</style>