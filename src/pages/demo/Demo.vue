<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-table :data-source="tableDataSource" :row-key="(record, index) => index" :pagination="tablePagination"
      @change="onTableChange"
    >
      <a-table-column key="title" data-index="title" title="标题" />
      <a-table-column key="isbn" data-index="isbn" title="ISBN" width="200px" />
      <a-table-column key="price" data-index="price" title="价格" width="160px" />
      <a-table-column key="express" data-index="express" title="出版社" width="200px" />
    </a-table>

    <a-button type="primary" v-roles="['admin', 'super-admin']" @click="refreshTable">更新表格</a-button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {bookList} from "@/services/book";
  import tableMixin from '@/mixins/table-mixin';
  export default {
    name: 'Demo',
    i18n: require('./i18n'),
    mixins: [tableMixin],
    data() {
      return {
        filter: {}
      }
    },
    computed: {
      ...mapState('setting', ['pageMinHeight']),
      desc() {
        return this.$t('description')
      }
    },
    created() {
      this.setTableDataLoader(bookList, this.filter, this.onDataReceived);
    },
    methods: {
      onDataReceived(data) {
        console.log('on data received', data);
      }
    }
  }
</script>

<style scoped lang="less">
@import "index";
</style>
