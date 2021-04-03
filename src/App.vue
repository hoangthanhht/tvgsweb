<template>
	<div id="app">
		<!-- <CompHeader></CompHeader> -->
		<!-- <CompHeader /> -->
		<!-- <comp-header />
		<img src="./assets/logo.png">
		<h1>{{ msg }}</h1> -->
		<CompHeader />
		<CompNavi />
		<CompFooter/>
	</div>
</template>

<script>
import CompHeader from './components/header'
import CompNavi from './components/navigation'
import CompFooter from './components/footer'
export default {
	name: 'app',
	data () {
		return {
			
		}
	},
	components: {
		CompHeader,
		CompNavi,
		CompFooter
	}
}
</script>

<style>
	
	
</style>
