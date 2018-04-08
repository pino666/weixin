<template>
  <div id="reg">
    <h1> {{msg}}</h1>
    <br>
    <form action="">
      <wv-group title="注:请输入你的真实信息">
        <wv-input label="openId" placeholder="假设openID号码（测试用）" type="number" v-model="submitData.openId" required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
        <wv-input label="姓名" :autofocus="true" placeholder="请输入姓名" v-model="submitData.name"  required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
        <wv-input label="学号" placeholder="请输入学号(数字)" type="number" v-model="submitData.studNumber" required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
        <wv-input label="班级" placeholder="请输入所在班级" v-model="submitData.clazz" required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
        <wv-input label="实验室" placeholder="请输入所在实验室(数字)" type="number" v-model="submitData.lab" required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
      </wv-group>
      <div class="buttons-mini">
        <wv-button type="primary" @click="submit">提交</wv-button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    name: "reg",
    data() {
      return {
        msg: "Welcome to Wuggek",
        submitData: {
          openId: '',
          name: "",
          studNumber: "",
          clazz: "",
          lab: ""
        },
      };
    },
    methods: {
      submit: function () {
        this.axios
          .post(
            'http://172.16.100.249:8080/PinoWeChat/user/add', this.submitData, {           //用户注册信息
              headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin' : '*'  
              }
            }
          )
          .then(
            function (res) {
              // console.log(res.status);
              if (res.status == 200) {
                this.$router.push({name:'sign',params:{openId:this.submitData.openId}}); //路由传参，另一页面不可刷新
                console.log(this.submitData.openId);
              } else {
                this.$router.push('regfailed')
              }
            }.bind(this)
          );
      },
    }
  };

</script>
<style>
  h1,
  h2 {
    font-weight: normal;
    text-align: center;
    list-style-type: none;
    margin-top: 60px;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  }

  .buttons-mini {
    display: block;
    width: 60%;
    margin: 0 auto;
    margin-top: 100px;
  }

</style>
