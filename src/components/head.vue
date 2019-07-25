<template>
  <div>
    <a-menu
      v-model="current"
      mode="horizontal"
    >
      <a-menu-item key="all"  @click="showAll">
        <a-icon type="appstore"/>ALL
      </a-menu-item>
      <a-menu-item key="ordered" @click="showOrdered">
        <a-icon type="appstore" />已预约
      </a-menu-item>
      <a-menu-item key="finished" @click="showUnOrder">
        <a-icon type="appstore" />未预约
      </a-menu-item>
      <a-menu-item key="unorder" @click="showFinished">
        <a-icon type="appstore" />已取件
      </a-menu-item>
      <a-menu-item key="add">
        <a-icon type="appstore" />添加
        <router-link to="/add"></router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
  export default {
    name: 'heads',
    data() {
      return {
        current: ['mail'],
      }
    },
    methods: {
      showAll () {
        this.$store.commit('updateStatus', 0)
      },
      showOrdered () {
        this.$store.commit('updateStatus', 1)
      },
      showUnOrder () {
        this.$store.commit('updateStatus', 2)
      },
      showFinished () {
        this.$store.commit('updateStatus', 3)
      }
    }
  }
</script>
