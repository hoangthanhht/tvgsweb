<template>
  <div class="container-form">
    <div class="form-login">
      <!-- Default form login -->
      <form action="#" v-on:submit.prevent="handleSubmitLogin">
        <p class="h4 text-center mb-4">Apave System</p>
        <p style="textAlign: Center">
          Nhập tài khoản và mật khẩu để truy cập hệ thống.
        </p>

        <label for="defaultFormLoginEmailEx" class="grey-text">Tài khoản:</label>
        <input 
		v-model="email" 
		type="text" class="form-control" placeholder="Email" required="" />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text"
          >Mật khẩu:</label
        >
        <input
		      v-model="password"
          type="password"
          id="defaultFormLoginPasswordEx"
          class="form-control"
		  placeholder="Mật khẩu" 
		  required=""
        />
        <div class="ass1-login__send">
           <router-link to="/register">Đăng ký một tài khoản</router-link>
           <button type="submit" class="ass1-btn">Đăng nhập</button>
        </div>
      </form>
      <!-- Default form login -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
 name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },

 methods: {
        ...mapActions(['login']),
        handleSubmitLogin(e) {
            let data = {
                email: this.email,
                password: this.password
            }
            this.login(data).then(res => {
                if(!res.ok) {
                    if(typeof res.error === 'string') {
                        alert(res.error);
                    } else {
                        alert(res.error.join(' '));
                    }   
                } else {
                    this.$router.push('/');
                }
            })
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
.ass1-login__send {
	padding-top: 30px;
}
</style>