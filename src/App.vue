<template>
	<div class="page">
		<Todo class="page__todo"></Todo>
	</div>
</template>

<script>
	import Todo from './components/Todo/Todo.vue';
	export default {
		components: {
			Todo
		}
	}
</script>

<style lang="scss">
* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style-type: none;
	}

	body {
		font-family: 'Montserrat';
		font-weight: 400;
		font-size: 16px;
		color: #000;	
	}

	.page {
		min-height: 100vh;
		min-width: 100vw;
		display: flex;
		background: radial-gradient(35.13% 50% at 50% 50%, #252E42 0%, #161C2E 100%);

		&__todo {
			margin: auto;
		}
	}
</style>