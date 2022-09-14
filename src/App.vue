<template>
	<div class="page">
		<transition name="fade">
			<Preloader v-if="isPreloader"></Preloader>
		</transition>
		<Todo class="page__todo"></Todo>
	</div>
</template>
<script>
	import Todo from './components/Todo/Todo.vue';
	import Preloader from './components/Preloader/Preloader.vue';
	export default {
		data() {
			return {
				isPreloader: true
			}
		},
		components: {
			Todo,
			Preloader
		},
		methods: {
			preloader() {
				setTimeout(() => {
					this.isPreloader = false
				}, 3000)
			}
		},
		mounted() {
			this.preloader()
		}
	}
</script>
<style lang="scss">
	@import 'styles/main.scss';
</style>