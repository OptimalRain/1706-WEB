<!--  -->
<template>
    <div>
        <header class='header'>登陆</header>
        <div>
            <input placeholder="用户名" type='text' v-model="userName"/><br />
            <div class="poww"><input placeholder="密码" v-model="userPwd" :type="this.pow"/><i class="powName" @click="ClickBlick">我</i><br /></div>
            <button @click='btn'>登陆</button><br />
            <router-link to='/register'>注册</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name:'Login',
  data () {
    return {
        pow:'password',
        userName:'',
        userPwd:''
    };
  },

//方法
  methods: {
      ClickBlick(){
        if(this.pow=='password'){
            this.pow='text'
        }else{
            this.pow='password'
        }
      },
      btn(){
          location.href='/home/timeline'
      },
    //    async login(){
    //         let {userName, userPwd} = this;
    //         let result = await login({userName, userPwd});
    //         console.log('result...', result);
    //         if (result && result.data.code === 1){
    //             // 登陆完成，执行后续跳转逻辑
    //         }
    //         alert(result.data.msg);
    //     },
    //     checkUserName(){
    //         if (!/\w{3, 20}/.test(this.userName)){
    //             alert('请输入正确的用户名')
    //         }
    //     }
  }
}

</script>
<style lang='scss' scoped>
.header{
    width: 100%;
    height: 40px;
    font-size:20px;
    text-align: center;
    line-height: 40px;
}
input{
    width: 80%;
    height: 40px;
    margin-top: 20px;
    outline: none;
}
button{
    width: 80%;
    height: 40px;
    background: #ccc;
    border: none;
    outline: none;
    margin-top: 20px;
}
.poww{
    position: relative;
}
.powName{
    position: absolute;
    top: 30px;
    right: 50px;
}
</style>