<template>
  <div>
    <a-table bordered :dataSource="itemShow" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)"/>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script>
import EditableCell from './cell';
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
  }, {title: '操作', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } }];
export default {
  name: 'list',
  components: {
    EditableCell
  },
  computed: {
    itemShow: function () {
      return this.$store.getters.getShowItems
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
