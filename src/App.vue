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
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: 16px;
		color: #000;
	}

	.page {
		min-height: 100vh;
		min-width: 100vw;
		padding: 15px;
		display: flex;
		background: radial-gradient(35.13% 50% at 50% 50%, #252E42 0%, #161C2E 100%);

		&__todo {
			margin: auto;
		}
	}

	.btn {
		padding: 5px 10px;
		background-color: #FF8469;
		border-radius: 7px;
		font-weight: 500;
		font-size: 14px;
		text-transform: uppercase;
		border: none;
		cursor: pointer;
		color: #fff;

		&:hover {
			background: #D95133;
		}
	}

	.ps {
		&__thumb-y {
			right: 0 !important;
			width: 4px !important;
			background-color: #FF8469 !important;
		}

		&__rail-y {
			width: 4px !important;
			opacity: 1 !important;
			background-color: transparent !important;
		}
	}

	.field {
		width: 100%;
		border: 0;
		padding: 5px 10px;
		font-size: 18px;

		&:focus {
			outline: none;
		}

		&:not(:last-child) {
			margin-bottom: 15px;
		}
	}

	.textarea {
		width: 100%;
		border: 0;
		padding: 5px 10px;
		resize: vertical;
		min-height: 150px;
		font-size: 18px;
		max-height: 320px;

		&:focus {
			outline: none;
		}

		&:not(:last-child) {
			margin-bottom: 15px;
		}
	}
</style>