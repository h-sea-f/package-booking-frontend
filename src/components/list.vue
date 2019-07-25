<template>
  <div>
    <a-table bordered :dataSource="itemShow" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)"/>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
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
        if(newList[i].status!=='已取件'){
          newList[i].finish='完成';
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
    }
  }
}
</script>
