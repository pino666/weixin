<template>
  <div id="sign">
    <div class="header">
      <img src="../assets/1.jpg">
    </div>
    <wv-group>
      <wv-input label="openId" :autofocus="true" v-model="userinfo.openId" required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
      <wv-input label="姓名" :autofocus="true" v-model="userinfo.name" required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
      <wv-input label="学号" :autofocus="true" v-model="userinfo.studNumber" required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
      <wv-input label="班级" :autofocus="true" v-model="userinfo.clazz" required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
      <wv-input label="实验室" :autofocus="true" v-model="userinfo.lab" required :validate-mode="{onFocus: false, onBlur: true, onChange: false}"></wv-input>
    </wv-group>
    <div class="buttons-mini">
      <div v-if=" t < 8 || (t==8 && m<30) ">
        <wv-button type="primary" @click="submit">签到</wv-button>
      </div>
      <div v-else>
        <wv-button type="primary" @click="submit1">签退</wv-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "sign",
    data() {
      return {
        userinfo: {},
        openId: ''
      };
    },
    created: function () {
      this.axios
        .get(
          'http://172.16.100.249:8080/PinoWeChat/user/getOne/' + this.$route.params.openId
        )
        .then(
          function (res) {
            console.log(res);
            
            this.userinfo = res.data.data;
          }.bind(this)
        );
    },
    computed: {
      t: function () {
        var d = new Date(Date.now());
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        var hour = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        var a = hour;
        console.log(a);
        return a;
      },
      m: function () {
        var d = new Date(Date.now());
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        var hour = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        var b = minutes;
        console.log(b);
        return b;
      },
    },
    methods: {
      submit: function () {
        this.axios
          .post('http://172.16.100.249:8080/PinoWeChat/signLog/add', { //用户签到，存库
            "inOrOut": "签到",
            "userId": this.userinfo.openId
          })
          .then(function (res) {
            console.log(res);
            if (res.status == 200) {
              this.$router.push('signsucceed')
            } else {
              this.$router.push('signfailed')
            }
          }.bind(this))
      },
      submit1: function () {
        this.axios
          .post('http://172.16.100.249:8080/PinoWeChat/signLog/add', { //用户签退，存库
            "inOrOut": "签退",
            "userId": this.userinfo.openId
          })
          .then(function (res) {
            console.log(res);
            if (res.status == 200) {
              this.$router.push('signoutsucceed')
            } else {
              this.$router.push('signoutfailed')
            }
          }.bind(this))
      },
    },
  }

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

  .header {
    display: block;
    width: 30%;
    margin: 0 auto;
    padding-top: 20px;
  }

</style>
