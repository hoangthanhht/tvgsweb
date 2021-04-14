<template>
	<div id="app">
		<CompHeader />
		<CompNavi 
		/>
		<CompFooter/>
		<BreadCrumb
		 />
		 <router-view></router-view>
		 <!-- <router-link to="/foo">Go to Foo</router-link> -->
		<!-- <Homepage />  -->
		 <!-- <CongViecGiao />	 -->
		<!-- <ThemCongViec /> -->
		<!-- <BcTongHop /> -->
		<!-- <TheoDoiCtrg /> -->
		<!-- <NtCongViec/>   -->
		<!-- <NtVatLieu /> -->
		<!-- <GsNhanLuc /> -->
		<!-- <GsThietBi /> -->
		<!-- <GsThiNghiem /> -->
		<!-- <Popupctrg /> -->
		<!-- <NhatTrinh /> -->
		<!-- <BaoCaoQuanLy /> -->
		<!-- <DanhSachHoSo  /> -->
		<!-- <HoSoNgthu /> -->
		<!-- <HoSoTke /> -->
		<!-- <HoSoKhac /> -->
		<!-- <Login /> -->
		<!-- <ThemHDong /> -->
	</div>
</template>

<script>
import CompHeader from './components/header'
import CompNavi from './components/navigation'
import CompFooter from './components/footer'
import BreadCrumb from './pages/components/Breadcrumb'
import Homepage from './pages/trangchu/homePage'
// import CongViecGiao from './pages/congviec/congviecgiao'
// import ThemCongViec from './pages/congviec/themcv'
// import BcTongHop from './pages/baocao/baochoatdongctrg/bc_tonghop'
// import TheoDoiCtrg from './pages/baocao/baochoatdongctrg/theodoithicong'
// import NtCongViec from './pages/baocao/baochoatdongctrg/nghiemthucongviec'
// import NtVatLieu from './pages/baocao/baochoatdongctrg/nghiemthuvatlieu'
// import GsNhanLuc from './pages/baocao/baochoatdongctrg/gsatnhanluc'
// import GsThietBi from './pages/baocao/baochoatdongctrg/gsatthietbi'
// import GsThiNghiem from './pages/baocao/baochoatdongctrg/gsatthinghiem'
// import Popupctrg from './components/pop-up/pop-up-baocao/pop-up-theodoictrg'
// import NhatTrinh from './pages/baocao/nhat_trinh/nhat_trinh'
// import BaoCaoQuanLy from './pages/baocao/bao_cao_qly/bao_cao_quan_ly'
// import DanhSachHoSo from './pages/hoso/danh_sach_ho_so/danh_sach_ho_so'
// import HoSoNgthu from './pages/hoso/them_ho_so/ho_so_ngthu'
// import HoSoTke from './pages/hoso/them_ho_so/ho_so_tke'
// import HoSoKhac from './pages/hoso/them_ho_so/ho_so_khac'
// import Login from './pages/users/login-logout'
 //import ThemHDong from './pages/hopdong/them_hop_dong/them_hop_dong'
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
		// CongViecGiao,
		// ThemCongViec,
		// BcTongHop,
		// TheoDoiCtrg,
		// NtCongViec,
		// NtVatLieu,
		// GsNhanLuc,
		// GsThietBi,
		// GsThiNghiem,
		// Popupctrg,
		// NhatTrinh,
		// BaoCaoQuanLy,
		// DanhSachHoSo,
		// HoSoNgthu,
		// HoSoTke,
		// HoSoKhac,
		// Login,
		// ThemHDong
	}
}
</script>

<style >
#app,html{
	/* background-image: url("C:\\Users\\Admin\\Desktop\\bg3.jpg"); */
	background-color: rgb(204, 204, 204);
	background-repeat: repeat;
	position: relative;
}

</style>
