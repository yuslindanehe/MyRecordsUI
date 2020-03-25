<template>
	<div>
		<h1 class = "text-center">Login</h1>
		<form style = "width: 100%; max-width: 330px; padding: 15px; margin: auto;">
			<div class="form-group">
				<input  placeholder ="username" class="form-control"type = "text" id = "username">
			</div>
		
			<div class="form-group">
				<input placeholder = "password" class="form-control" type = "password" id = "password">	
			</div>
		<button class = "btn-block btn-primary btn"> login </button>
		<br>
			<div class="text-center">
				<a href = "" > Forgot Password or UserName </a>
			</div>
		<div class = "text-center"> Do not have an account? </div>
		<button class ="btn btn-block btn-link"> SIGN UP  NOW </button>
		</form>
	</div>
</template>
<script>
export default {
	layout: 'preLogin'
}
</script>