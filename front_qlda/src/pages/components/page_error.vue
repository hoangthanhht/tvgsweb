<template>
  <div>
    <div class="notfound">
      <div class="notfound-404">
        <img src="../../assets/403.png" alt="cannot access" />
      </div>
      <h2>Bạn không có quyền truy cập dữ liệu này</h2>
      <p>
        Dữ liệu bạn đang cố truy cập không thuộc về bạn/hoặc bạn không được phân
        quyền.
      </p>
      <p>Hãy liên hệ với người quản trị để biết thêm chi tiết.</p>
      <!-- <button class="back-home">Về trang chủ</button> -->
      <router-link class="back-home" 
      to="/" 
      tag="button"
        >Về trang chủ</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.notfound {
  flex-direction: column;
  display: flex;
  align-items: center;
}
.back-home {
  background-color: #00a53c;
  height: 45px;
  width: 200px;
  border-radius: 25px;
}
</style>