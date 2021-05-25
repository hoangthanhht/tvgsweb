<template>
  <div id="app">
    <CompHeader />
    <CompNavi />
    <CompFooter />
    <BreadCrumb />
    <BaocaoGS/>
    <!-- <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition> -->

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
    <!-- <Page403 /> -->

  </div>
</template>

<script>
import CompHeader from "./components/header";
import CompNavi from "./components/navigation";
import CompFooter from "./components/footer";
import BreadCrumb from "./pages/components/Breadcrumb";
import Homepage from "./pages/trangchu/homePage";
import BaocaoGS from "./components/baocaogsnew";
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
import Page403 from "./pages/components/page_error";

export default {
  name: "app",
  data() {
    return {
		 options1: [
        { value: "1", text: "Chọn mức độ ưu tiên" },
        { value: "a", text: "Quan trọng và khẩn cấp" },
        { value: "b", text: "Quan trọng nhưng không khẩn cấp" },
        { value: "c", text: "Khẩn cấp nhưng không quan trọng" },
        { value: "d", text: "Không quan trọng và không khẩn cấp" },
      ],
		day:null,
      searchText: "",
      currentPage: 1,
      rows: 20,
    };
  },
  methods: {
  },
  created(){
    
    //this.$store.dispatch('getListPostHasPaging');
    //console.log(this.$store.getters);
  },
  components: {
    CompHeader,
    CompNavi,
    CompFooter,
    BreadCrumb,
    Homepage,
    Page403,
    BaocaoGS
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
  },
};
</script>

<style >
#app,
html {
  /* background-image: url("C:\\Users\\Admin\\Desktop\\bg3.jpg"); */
  /* background-color: rgb(204, 204, 204); */
  background-repeat: repeat;
  position: relative;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/* .v-leave-active, .v-enter-active{
	transition: all 0.2s ease;
} */
/* .v-enter{
	opacity: 0;
	transform: scale(1.1);
}
.v-enter-to{
	opacity: 1;
	transform: scale(1);
}

.v-leave{
	opacity: 1;
	transform: scale(1);
}
.v-leave-to{
	opacity: 0;
	transform: scale(1.1);
} */
</style>
