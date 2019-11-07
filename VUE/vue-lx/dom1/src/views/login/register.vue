<!--  -->
<template>
    <div>
        <div class="con">
            <input  placeholder="用户名" type="text" name="" id="" v-model='userName'><br />
            <div class="poww"><input placeholder="密码" :type="this.pow" v-model="userPwd"/><i class="powName" @click="ClickBlick">我</i><br /></div>
            <button @click='btn'>注册</button>
        </div>
    </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
        pow:'password',
        userName:'',
        userPwd:''
    };
  },
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
    //    async register(){
    //         let {userName, userPwd} = this;
    //         let result = await register({userName, userPwd})
    //         // console.log('result...', result);
    //         if (result && result.data.code === 0){
    //             alert(result.data.msg)
    //         }else{
    //             window.history.back();
    //         }
    //     }
  }
}

</script>
<style lang='scss' scoped>
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