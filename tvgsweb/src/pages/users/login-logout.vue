<template>
  <div class="container-form">
    <div class="form-login">
      <!-- Default form login -->
      <form>
        <p class="h4 text-center mb-4">Apave System</p>
        <p style="textAlign: Center">
          Nhập tài khoản và mật khẩu để truy cập hệ thống.
        </p>

        <label for="defaultFormLoginEmailEx" class="grey-text">Tài khoản</label>
        <input type="text" id="defaultFormLoginEmailEx" class="form-control" />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text"
          >Mật khẩu</label
        >
        <input
          type="password"
          id="defaultFormLoginPasswordEx"
          class="form-control"
        />
        <div class="text-center mt-4">
          <button class="btn btn-indigo" type="submit">Đăng Nhập</button>
        </div>
      </form>
      <!-- Default form login -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-form {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.form-login {
  width: 400px;
  height: 450px;
  background-color: #fff;
  padding: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  background-color: rgb(58, 206, 122);
}
.mb-4{
    margin-top: 30px;
}
</style>