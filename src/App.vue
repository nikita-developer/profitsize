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
	@import 'styles/main.scss';
</style>