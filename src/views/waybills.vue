<template>
  <div>
    <heads></heads>
    <list></list>
  </div>
</template>

<script>
import heads from '@/components/head.vue'
import list from '@/components/list.vue'

export default {
  name: 'waybills',
  components: {
    heads,list
  },
  mounted() {
    this.$store.dispatch('getItems')
  }
}
</script>
