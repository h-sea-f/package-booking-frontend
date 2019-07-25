<template>
  <div>
    <div><a-input v-model="id" placeholder="输入运单号"/></div>
    <div><a-input v-model="phoneNumber" placeholder="输入手机号码"/></div>
    <div><a-input v-model="consignee" placeholder="输入姓名"/></div>
    <div><a-input v-model="weight" placeholder="输入重量"/></div>
    <div><a-button type="primary" @click="add">添加</a-button></div>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data () {
      return {
        id:"",
        phoneNumber:"",
        consignee:"",
        weight:0
      }
    },
    methods: {
        add(){
          this.$store.dispatch('add',{id:this.id,phoneNumber:this.phoneNumber,consignee:this.consignee,status:'未预约',weight:this.weight});
          this.$router.push('/boss');
        }
    }
  }
</script>
