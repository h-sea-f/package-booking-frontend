<template>
  <div>
    <a-menu
      v-model="current"
      mode="horizontal"
    >
      <a-menu-item key="all">
        <a-icon type="appstore" />ALL
      </a-menu-item>
      <a-menu-item key="ordered">
        <a-icon type="appstore" />已预约
      </a-menu-item>
      <a-menu-item key="finished">
        <a-icon type="appstore" />已取件
      </a-menu-item>
      <a-menu-item key="unorder">
        <a-icon type="appstore" />未取件
      </a-menu-item>
      <a-menu-item key="add">
        <a-icon type="appstore" />添加
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
  export default {
    name: 'head',
    data() {
      return {
        current: ['mail'],
      }
    }
  }
</script>
