<template>
	<div class="nav_tvgs">
		<!-- <div class="nav">
	<b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
	 
		<b-dropdown class="mx-1 page-home" right text="Trang chủ">
			<b-dropdown-item>Item 1</b-dropdown-item>
			<b-dropdown-item>Item 2</b-dropdown-item>
			<b-dropdown-item>Item 3</b-dropdown-item>
		</b-dropdown>

		<b-dropdown class="mx-1 nav-tvgs" right text="Công việc">
			<b-dropdown-item>Item 1</b-dropdown-item>
			<b-dropdown-item>Item 2</b-dropdown-item>
			<b-dropdown-item>Item 3</b-dropdown-item>
		</b-dropdown>

		<b-dropdown class="mx-1 nav-tvgs" right text="Báo cáo">
			<b-dropdown-item>Item 1</b-dropdown-item>
			<b-dropdown-item>Item 2</b-dropdown-item>
			<b-dropdown-item>Item 3</b-dropdown-item>
		</b-dropdown>
		
		<b-dropdown class="mx-1 nav-tvgs" right text="Văn bản & tài liệu">
			<b-dropdown-item>Item 1</b-dropdown-item>
			<b-dropdown-item>Item 2</b-dropdown-item>
			<b-dropdown-item>Item 3</b-dropdown-item>
		</b-dropdown>
		
		<b-dropdown class="mx-1 nav-tvgs" right text="Hồ sơ">
			<b-dropdown-item>Item 1</b-dropdown-item>
			<b-dropdown-item>Item 2</b-dropdown-item>
			<b-dropdown-item>Item 3</b-dropdown-item>
		</b-dropdown>
		
		<b-dropdown class="mx-1 nav-tvgs" right text="Hợp đồng">
			<b-dropdown-item>Item 1</b-dropdown-item>
			<b-dropdown-item>Item 2</b-dropdown-item>
			<b-dropdown-item>Item 3</b-dropdown-item>
		</b-dropdown>
		
		<b-dropdown class="mx-1 nav-tvgs" right text="Nhân sự">
			<b-dropdown-item>Item 1</b-dropdown-item>
			<b-dropdown-item>Item 2</b-dropdown-item>
			<b-dropdown-item>Item 3</b-dropdown-item>
		</b-dropdown>
		
		<b-dropdown class="mx-1 nav-tvgs" right text="Hệ thống">
			<b-dropdown-item>Item 1</b-dropdown-item>
			<b-dropdown-item>Item 2</b-dropdown-item>
			<b-dropdown-item>Item 3</b-dropdown-item>
		</b-dropdown>
		
		<b-dropdown class="mx-1 nav-tvgs" right text="Dự án">
			<b-dropdown-item>Item 1</b-dropdown-item>
			<b-dropdown-item>Item 2</b-dropdown-item>
			<b-dropdown-item>Item 3</b-dropdown-item>
		</b-dropdown>
	 
	</b-button-toolbar>
</div> -->
		<b-navbar type="dark" class="nav-nav">
			<b-navbar-nav>
				<!-- <b-nav-item class="router-link-exact-active" href="#">Trang Chủ</b-nav-item> -->
				<!-- <b-nav-item href="#"></b-nav-item> -->
				
				<router-link to="/" tag="b-nav-item" > <b-icon  icon="house-door"></b-icon>Trang Chủ</router-link>
				<!-- Navbar dropdowns -->

				<b-nav-item ><b-icon  icon="pencil-square"></b-icon></b-nav-item>
				
				<b-nav-item-dropdown class="nav-nav__icon--ml" text="Công Việc" left> 
					<!-- <b-dropdown-item href="#">Công việc được giao</b-dropdown-item> -->
					<router-link to="/cong-viec-giao" tag="b-dropdown-item" >Công việc được giao</router-link>
					<!-- <b-dropdown-item href="#">Thêm công việc mới</b-dropdown-item> -->
					 <router-link to="/them-cong-viec" tag="b-dropdown-item" >Thêm công việc mới</router-link>
				</b-nav-item-dropdown>

				<b-nav-item ><b-icon  icon="bar-chart"></b-icon></b-nav-item>
				<b-nav-item-dropdown class="nav-nav__icon--ml" text="Báo Cáo" left>
					<!-- <b-dropdown-item href="#">Báo cáo hoạt động công trường</b-dropdown-item> -->
					<router-link to="/bao-cao-hoat-dong-cong-truong" tag="b-dropdown-item" >Báo cáo hoạt động công trường</router-link>
					<b-dropdown-item href="#">Báo cáo quản lý hồ sơ</b-dropdown-item>
					<!-- <router-link to="/bao-cao-hoat-dong-cong-truong" tag="b-dropdown-item" >Báo cáo quản lý hồ sơ</router-link> -->
					
					<!-- <b-dropdown-item href="#">Nhật trình</b-dropdown-item> -->
					<router-link to="/nhat-trinh" tag="b-dropdown-item" >Nhật trình</router-link>
					
					<!-- <b-dropdown-item href="#">Báo cáo tháng</b-dropdown-item> -->
					<router-link to="/bao-cao-thang" tag="b-dropdown-item" >Báo cáo tháng</router-link>
					
					<!-- <b-dropdown-item href="#">Báo cáo khối quản lý</b-dropdown-item> -->
					<router-link to="/bao-cao-quan-ly" tag="b-dropdown-item" >Báo cáo khối quản lý</router-link>

				</b-nav-item-dropdown>


				<b-nav-item ><b-icon  icon="book"></b-icon></b-nav-item>
				<b-nav-item-dropdown class="nav-nav__icon--ml" text="Văn Bản & Tài Liệu" left>
					<b-dropdown-item href="https://qlda.gxd.vn">Trang tài liệu</b-dropdown-item>
					<!-- <b-dropdown-item @click="qlda">Trang tài liệu</b-dropdown-item> -->
				
				<!-- <router-link to='www.google.com' >Trang tài liệu</router-link> -->
				<!-- <RouterLink :to="qlda.gxd.vn">Google</RouterLink> -->
					
				</b-nav-item-dropdown>


				<b-nav-item ><b-icon  icon="files"></b-icon></b-nav-item>
				<b-nav-item-dropdown class="nav-nav__icon--ml" text="Hồ Sơ" left>
					<!-- <b-dropdown-item href="#">Danh sách hồ sơ</b-dropdown-item> -->
					<router-link to="/danh-sach-ho-so" tag="b-dropdown-item" >Danh sách hồ sơ</router-link>

					<!-- <b-dropdown-item href="#">Thêm hồ sơ</b-dropdown-item> -->
					<router-link to="/them-ho-so" tag="b-dropdown-item" >Thêm hồ sơ</router-link>

				</b-nav-item-dropdown>


				<b-nav-item ><b-icon  icon="files"></b-icon></b-nav-item>
				<b-nav-item-dropdown class="nav-nav__icon--ml" text="Hợp Đồng" left>
					<b-dropdown-item href="#">Danh sách hợp đồng</b-dropdown-item>
					<!-- <b-dropdown-item href="#">Thêm hợp đồng mới</b-dropdown-item> -->
					<router-link to="/them-hop-dong" tag="b-dropdown-item" >Thêm hợp đồng mới</router-link>

				</b-nav-item-dropdown>

				<b-nav-item ><b-icon  icon="person-plus"></b-icon></b-nav-item>
				<b-nav-item-dropdown class="nav-nav__icon--ml" text="Nhân Sự" left>
					<b-dropdown-item href="#">Danh sách phòng ban</b-dropdown-item>
					<!-- <b-dropdown-item href="#">Danh sách nhân viên</b-dropdown-item> -->
					<router-link to="/danh-sach-nhan-vien" tag="b-dropdown-item" >Danh sách nhân viên</router-link>

					<!-- <b-dropdown-item href="#">Danh sách chức danh</b-dropdown-item> -->
					<router-link to="/danh-sach-chuc-danh" tag="b-dropdown-item" >Danh sách chức danh</router-link>
					<!-- <b-dropdown-item href="#">Thông tin của tôi</b-dropdown-item> -->
					<router-link to="/thong-tin-nhan-su" tag="b-dropdown-item" >Thông tin của tôi</router-link>

					<!-- <b-dropdown-item href="#">Chấm công của tôi</b-dropdown-item> -->
					<router-link to="/cham-cong-ca-nhan" tag="b-dropdown-item" >Chấm công của tôi</router-link>
					
					<!-- <b-dropdown-item href="#">Chấm công</b-dropdown-item> -->
					<router-link to="/cham-cong-nhan-vien" tag="b-dropdown-item" >Chấm công</router-link>
				</b-nav-item-dropdown>

				<b-nav-item ><b-icon  icon="gear"></b-icon></b-nav-item>
				<b-nav-item-dropdown class="nav-nav__icon--ml" text="Hệ Thống" left>
					<b-dropdown-item href="#">Lịch sử truy cập</b-dropdown-item>
					<b-dropdown-item href="#">Quản lý danh mục</b-dropdown-item>
					<b-dropdown-item href="#">Quản lý danh mục vật liệu</b-dropdown-item>
					<b-dropdown-item href="#">Quản lý đơn vị tính</b-dropdown-item>
					<b-dropdown-item href="#">Quản lý dự án</b-dropdown-item>
				</b-nav-item-dropdown>


				<b-nav-item href="#"> <b-icon  icon="handbag"></b-icon> Dự Án </b-nav-item>
			</b-navbar-nav>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: "navi-tvgs",
	methods:{

	}
};
</script>

<style >
.nav-nav__icon--ml{
	padding-left: 0;
	margin-left: 0;
}
.nav_tvgs .navbar {
	height: 60px;
	width: 100%;
	background-color: #00a53c;
}
/* .nav-nav{
	position: fixed;

z-index: 1;
} */
.nav_tvgs {
	padding-top: 15px;
}

.navbar-dark .navbar-nav .nav-link {
	color: #000;
	padding-left: 0;
}
nav li {
	padding-left: 20px;
	align-items: center;
}
/* .nav {
	background-color: indigo;
	margin-top: 10px;
}
.nav-tvgs {
	position: relative;
	display: inline-block;
}
.nav-tvgs:hover .dropdown-menu {
	display: block;
}
.dropdown-menu {
	display: none;
	position: absolute;
	background-color: #fff;
	z-index: 1;
	list-style: none;
}
.nav-tvgs > .btn-secondary {
	background-color: indigo;
	color: #fff;
	border: none;
	margin-left: 20px;
}
.page-home > .btn-secondary {
	background-color: indigo;
	color: #fff;
	border: none;
	margin-left: 5px;
} */
</style>