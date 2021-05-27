<template>
 <div class="container-form">
  <div class="ass1-login">
      
        <div class="ass1-login__content">
            <p>Đăng ký một tài khoản</p>
            <div class="ass1-login__form">
                <form action="#" v-on:submit.prevent="handleSubmitRegister">
                    <input v-model="fullname"
                        type="text" class="form-control" placeholder="Tên hiển thị" required="">
                    <input v-model="email" 
                        type="text" class="form-control" placeholder="Email" required="">
                    <input v-model="password" 
                        type="password" class="form-control" placeholder="Mật khẩu" required="">
                    <input v-model="repassword" 
                        type="password" class="form-control" placeholder="Nhập lại mật khẩu" required="">
                    <div class="ass1-login__send">
                        <router-link to="/logout">Đăng nhập</router-link>
                        <button type="submit" class="ass1-btn">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
 name: 'register',
    data() {
        return {
            email: '',
            fullname: '',
            password: '',
            repassword: ''
        }
    },
    methods: {
        ...mapActions(['register']),
        handleSubmitRegister(e) {
            let data = {
                email: this.email,
                fullname: this.fullname,
                password: this.password,
                repassword: this.repassword
            }
            if(data.email && data.fullname && data.password && data.repassword) {
                this.register(data).then(res => {
                    console.log("res = ", res);
                    if(!res.ok) {
                        alert(res.error); // Notification
                    } else {
                        this.$router.push('/');
                        alert('Đăng ký thành công');
                    }
                })
            } else {
                alert('Nhập đầy đủ thông tin');
            }
        }
    }

};
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
.ass1-btn {
  background-color: rgb(58, 206, 122);
}
.mb-4{
    margin-top: 30px;
}
</style>