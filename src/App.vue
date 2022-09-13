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

	.page {
		min-height: 100vh;
		min-width: 100vw;
		display: flex;

		&__todo {
			margin: auto;
		}
	}
</style>