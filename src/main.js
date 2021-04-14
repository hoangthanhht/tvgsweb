import Vue from 'vue'
import App from './App.vue'
import './plugins'
import VueRouter from 'vue-router'


import Homepage from './pages/trangchu/homePage'
import CongViecGiao from './pages/congviec/congviecgiao'
import ThemCongViec from './pages/congviec/themcv'
import BcTongHop from './pages/baocao/baochoatdongctrg/bc_tonghop'
import TheoDoiCtrg from './pages/baocao/baochoatdongctrg/theodoithicong'
import NtCongViec from './pages/baocao/baochoatdongctrg/nghiemthucongviec'
import NtVatLieu from './pages/baocao/baochoatdongctrg/nghiemthuvatlieu'
import GsNhanLuc from './pages/baocao/baochoatdongctrg/gsatnhanluc'
import GsThietBi from './pages/baocao/baochoatdongctrg/gsatthietbi'
import GsThiNghiem from './pages/baocao/baochoatdongctrg/gsatthinghiem'
import Popupctrg from './components/pop-up/pop-up-baocao/pop-up-theodoictrg'
import NhatTrinh from './pages/baocao/nhat_trinh/nhat_trinh'
import BaoCaoThang from './pages/baocao/bao_cao_thang/bao_cao_thang'
import BaoCaoQuanLy from './pages/baocao/bao_cao_qly/bao_cao_quan_ly'
import DanhSachHoSo from './pages/hoso/danh_sach_ho_so/danh_sach_ho_so'
import HoSoNgthu from './pages/hoso/them_ho_so/ho_so_ngthu'
import HoSoTke from './pages/hoso/them_ho_so/ho_so_tke'
import HoSoKhac from './pages/hoso/them_ho_so/ho_so_khac'
import ThemHDong from './pages/hopdong/them_hop_dong/them_hop_dong'
import Login from './pages/users/login-logout'


const routes = [
  { path: '/', component: Homepage },
  { path: '/cong-viec-giao', component: CongViecGiao },
  { path: '/them-cong-viec', component: ThemCongViec },
  { path: '/bao-cao-hoat-dong-cong-truong', component: BcTongHop },
  { path: '/nhat-trinh', component: NhatTrinh },
  { path: '/bao-cao-thang', component: BaoCaoThang },
  { path: '/bao-cao-quan-ly', component: BaoCaoQuanLy },
  { path: '/theo-doi-thi-cong', component: TheoDoiCtrg },
  { path: '/nghiem-thu-cong-viec', component: NtCongViec },
  { path: '/nghiem-thu-vat-lieu', component: NtVatLieu },
  { path: '/giam-sat-nhan-luc', component: GsNhanLuc },
  { path: '/giam-sat-thiet-bi', component: GsThietBi },
  { path: '/giam-sat-thi-nghiem', component: GsThiNghiem },
  { path: '/danh-sach-ho-so', component: DanhSachHoSo },
  { path: '/them-ho-so', component: HoSoNgthu },
  { path: '/ho-so-thiet-ke', component: HoSoTke },
  { path: '/ho-so-khac', component: HoSoKhac },
  { path: '/them-hop-dong', component: ThemHDong },
  { path: '/logout', component: Login },
]

const router = new VueRouter({
  mode:'history',
  routes
})

Vue.use(VueRouter)
new Vue({
  
  el: '#app',
  router,// phần này phải là đúng tên 'router', sai tê là không load đc comp vào route-view
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue