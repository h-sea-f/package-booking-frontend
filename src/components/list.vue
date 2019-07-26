<template>
  <div>
    <table>
      <tr>
        <th>运单号</th>
        <th>收件人</th>
        <th>电话</th>
        <th>状态</th>
        <th>预约时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in itemShow">
        <td>{{item.id}}</td>
        <td>{{item.consignee}}</td>
        <td>{{item.phoneNumber}}</td>
        <td>{{item.status}}</td>
        <td>{{item.orderTime}}</td>
        <td v-show="item.unfinish"><button @click="finished(item.id)">完成</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
const columns = [{
  title: '运单号',
    dataIndex: 'id',
    width: 150,
  }, {
    title: '收件人',
    dataIndex: 'consignee',
    width: 150,
  }, {
    title: '电话',
    dataIndex: 'phoneNumber',
  width:150
  },{
    title: '状态',
    dataIndex: 'status',
    width:150
  },{
    title: '预约时间',
    dataIndex: 'orderTime',
  width:150
  }, {title: '操作', dataIndex: 'finish'}];
export default {
  name: 'list',
  components: {

  },
  computed: {
    itemShow: function () {
      let newList = this.$store.getters.getShowItems;
      for(let i=0;i<newList.length;i++){
        if(newList[i].status!=='已完成'){
          newList[i].unfinish=true;
        }
      }
      return newList;
      // return newList.map(i =>{if(i.status !== '已完成') {
      //   i.finish = '完成';
      // }})
    }
  },
  data () {
    return {
      columns,
      data: []
    }
  },
  methods: {
    test(id){
      alert(id);
    },
    finished(id){
      this.$store.dispatch('finished',id);
    }
  }
}
</script>
