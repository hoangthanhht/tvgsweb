<template>
	<div id="app">
		<CompHeader />
		<CompNavi />
		<CompFooter/>
		<BreadCrumb />
		<!-- <Homepage /> -->
		<CongViecGiao />
		<!-- <ThemCongViec /> -->
	</div>
</template>

<script>
import CompHeader from './components/header'
import CompNavi from './components/navigation'
import CompFooter from './components/footer'
import BreadCrumb from './pages/components/Breadcrumb'
import Homepage from './pages/trangchu/homePage'
import CongViecGiao from './pages/congviec/congviecgiao'
import ThemCongViec from './pages/congviec/themcv'
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
		Homepage,
		CongViecGiao,
		ThemCongViec
	}
}
</script>

<style>
#app,html{
	background-image: url("C:\\Users\\Admin\\Desktop\\bg3.jpg");
	background-repeat: repeat;
}
	
</style>
