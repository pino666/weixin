<template>
  <div id="succeed">
    <div class="good">
      <wv-icon type="warn" :large="true"></wv-icon>
    </div>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
  export default {
    name: "succeed",
    data() {
      return {
        msg: "签退失败",
      };
    }
  };

</script>
<style>
  .good {
    display: block;
    margin: 0 auto;
    width: 25%;
    height: 300px;
    line-height: 300px;
  }

  h1,
  h2 {
    font-weight: normal;
    text-align: center;
    list-style-type: none;
  }

</style>
