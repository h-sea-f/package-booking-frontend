<template>
  <div>
    <div>
      <router-link to="/boss">老板</router-link>
    </div>
    <div>
      <router-link to="/customer">预约取件</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
