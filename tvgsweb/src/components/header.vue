<template>
  <div class="comp-header">
    <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
      <div class="logo-box">
        <img height="32" src="../assets/apave.png" alt="" />
      </div>
      <b-dropdown class="ultilyti" right text="Tiện ich">
        <!-- <b-dropdown-item>Thêm việc mới</b-dropdown-item> -->
        <div class="ultilyti__btnheader">
          <b-icon class="ultilyti__icon--color" icon="bag-plus-fill"></b-icon>
          <router-link to="/them-cong-viec" tag="b-dropdown-item"
            >Thêm việc mới</router-link
          >
        </div>

        <div class="ultilyti__btnheader">
          <!-- <b-dropdown-item>Báo cáo công trình</b-dropdown-item> -->
          <b-icon
            class="ultilyti__icon--color"
            icon="bar-chart-line-fill"
          ></b-icon>
          <router-link to="/bao-cao-hoat-dong-cong-truong" tag="b-dropdown-item"
            >Báo cáo công trình</router-link
          >
        </div>

        <div class="ultilyti__btnheader">
          <!-- <b-dropdown-item>Báo cáo công trình</b-dropdown-item> -->
          <b-icon class="ultilyti__icon--color" icon="person-fill"></b-icon>
          <b-dropdown-item>Chấm công</b-dropdown-item>
        </div>

        <div class="ultilyti__btnheader">
          <!-- <b-dropdown-item>Báo cáo công trình</b-dropdown-item> -->
          <b-icon class="ultilyti__icon--color" icon="envelope"></b-icon>
          <b-dropdown-item>Gmail</b-dropdown-item>
        </div>

        <b-dropdown-divider></b-dropdown-divider>
        <div class="ultilyti__btnheader">
          <!-- <b-dropdown-item>Báo cáo công trình</b-dropdown-item> -->
          <b-icon class="ultilyti__icon--color" icon="globe2"></b-icon>
          <b-dropdown-item>Dân trí</b-dropdown-item>
        </div>
      </b-dropdown>
      <div class="input-group">
        <input style="width: 70%" placeholder="Search for..." />
        <span class="input-group-append">
          <button class="btn btn-info" type="button">Search!</button>
        </span>
      </div>
      <div class="noti">
        <b-icon
          class="noti__header"
          icon="bell-fill"
          variant="info"
          font-scale="1.5"
        ></b-icon>
      </div>
      <b-dropdown class="acount" right text="Nguyễn Thế Anh">
        <div class="ultilyti__btnheader">
          <b-icon class="ultilyti__icon--color" icon="person-fill"></b-icon>
          <b-dropdown-item>Tài khoản</b-dropdown-item>
        </div>

        <div class="ultilyti__btnheader">
          <b-icon class="ultilyti__icon--color" icon="gear-fill"></b-icon>
          <b-dropdown-item>Cá nhân</b-dropdown-item>
        </div>

        <!-- <b-dropdown-item>Đăng xuất</b-dropdown-item> -->
        <b-dropdown-divider></b-dropdown-divider>
        <div class="ultilyti__btnheader">
          <b-icon class="ultilyti__icon--color" icon="box-arrow-right"></b-icon>
          <router-link to="/logout" tag="b-dropdown-item"
            >Đăng xuất</router-link
          >
        </div>
      </b-dropdown>
    </b-button-toolbar>
  </div>
</template>

<script>
export default {
  name: "tvgs-header",
  data() {
    return {};
  },
};
</script>

<style >
.ultilyti__icon--color {
  color: #00a53c;
  margin-left: 5px;
}
.ultilyti__btnheader {
  display: flex;
  align-items: center;
}
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #00a53c;
  border-color: #00a53c;
}
.acount > .btn-secondary {
  background-color: #fff;
  color: #000;
  border: none;
  margin-right: 5px;
}
.ultilyti > .btn-secondary {
  background-color: #fff;
  color: #000;
  border: none;
}
.ultilyti {
  position: relative;
  left: 15%;
}
.acount {
  position: absolute;
  right: 0;
}
.logo-box {
  position: absolute;
  top: 4px;
  left: 5%;
}
.logo-box:hover {
  cursor: pointer;
}
.btn-toolbar {
  position: relative;
}
.btn-toolbar > .input-group {
  width: auto;
  left: 30%;
  right: 20%;
  position: absolute;
}
.noti__header.b-icon.bi {
  top: 25%;
  position: absolute;
  right: 20%;
}
.btn.btn-info {
  color: #fff;
  background-color: #00a53c;
  border-color: #00a53c;
}
.text-info {
  color: #00a53c !important;
}
.b-icon.bi:hover {
  cursor: pointer;
}
.comp-header {
  margin-top: 10px;
}
</style>