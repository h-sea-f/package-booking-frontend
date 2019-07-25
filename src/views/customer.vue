<template>
  <div>
    <div>
      <a-input placeholder="输入订单号"/>
    </div>
    <div>
      <a-time-picker :open.sync="open2">
        <a-button slot="addon" size="large" type="primary" @click="handleClose">Ok</a-button>
      </a-time-picker>
    </div>
    <div>
      <a-button type="primary">预约</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customer',
  data () {
    return {
      id: Number,
      orderTime: 0,
      open2: false,
    }
  },
  methods: {
    handleClose () {
      this.open2 = false
    }
  }
}
</script>
