<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
         <router-link to='/goods'>goods</router-link>
      </div>
      <div class="tab-item">
        <router-link to= '/ratings'>ratings</router-link>
      </div>
      <div class="tab-item">
        <router-link to= '/seller'>seller</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6" >
    import header from './components/header/header.vue';

    const ERR_OK = 0;

    export default{
      data() {
        return {
          seller: {}
        };
      },
      created() {
        this.$http.get('/api/seller').then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
            this.seller = response.data;
            console.log(this.seller);
          }
        });
      },
      components: {
        'v-header': header
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">

    .tab
      display: flex
      width:100%
      height:40px
      line-height:40px
      border-bottom:1px solid rgba(7,17,27,0.1)


    .tab-item
        flex:1
        text-align:center
    a//未激活的样式
      display:block
      text-decoration:none
      
    .router-link-active//激活后的router标签的样式
      text-decoration:none
      color:rgb(255,0,0)
</style>
