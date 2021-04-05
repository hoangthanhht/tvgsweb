<template>
	<div id="app">
		<CompHeader />
		<CompNavi />
		<CompFooter/>
		<BreadCrumb />
		<Homepage />
	</div>
</template>

<script>
import CompHeader from './components/header'
import CompNavi from './components/navigation'
import CompFooter from './components/footer'
import BreadCrumb from './pages/Breadcrumb'
import Homepage from './pages/homePage'
export default {
	name: 'app',
	data () {
		return {
			
		}
	},
	components: {
		CompHeader,
		CompNavi,
		CompFooter,
		BreadCrumb,
		Homepage
	}
}
</script>

<style>
#app{
	/* background-image: url("C:\\Users\\Admin\\Desktop\\bg3.jpg");
	background-repeat: repeat; */
}
	
</style>
