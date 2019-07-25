<template>
  <div>
    <div>
      <a-input v-model="id" placeholder="输入订单号"/>
    </div>
    <div>
      <a-date-picker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="Select Time"
        @change="onChange"
        @ok="onOk"
      />
    </div>
    <div>
      <a-button type="primary" @click="ordered">预约</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customer',
  data () {
    return {
      id: "",
      orderTime: 0
    }
  },
  methods: {
    onChange(value, dateString) {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
      this.orderTime = value.valueOf();
    },
    onOk(value) {
      console.log('onOk: ', value);
      this.orderTime = value.valueOf();
    },
    ordered(){
      console.log(this.orderTime);
      this.$store.dispatch('ordered',{id:this.id,orderTime:this.orderTime});
      this.id="";
      this.$message.success('预约成功');
    }
  }
}
</script>
