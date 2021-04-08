<template>
	<div id="app">
		<CompHeader />
		<CompNavi 
		class="navi-app"
		/>
		<CompFooter/>
		<BreadCrumb
		class="brc"
		 />
		<!-- <Homepage /> -->
		<!-- <CongViecGiao />	 -->
		<!-- <ThemCongViec /> -->
		<!-- <BcTongHop /> -->
		<!-- <TheoDoiCtrg /> -->
		<NtCongViec/>
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
import BcTongHop from './pages/baocao/baochoatdongctrg/bc_tonghop'
import TheoDoiCtrg from './pages/baocao/baochoatdongctrg/theodoithicong'
import NtCongViec from './pages/baocao/baochoatdongctrg/nghiemthucongviec'
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
		ThemCongViec,
		BcTongHop,
		TheoDoiCtrg,
		NtCongViec
	}
}
</script>

<style>
#app,html{
	background-image: url("C:\\Users\\Admin\\Desktop\\bg3.jpg");
	background-repeat: repeat;
	position: relative;
}

</style>
