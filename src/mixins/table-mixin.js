export default {
    data() {
        return {
            tableDataSource: [],
            tablePagination: {
                current: 1,
                pageSize: 15,
                total: 0
            },
            tableDataLoader: null,
        }
    },
    methods: {
        setTableDataSource(data) {
            const {
                [process.env.VUE_APP_PAGINATION_DATA_KEY]: list,
                [process.env.VUE_APP_PAGINATION_PAGE_KEY]: current,
                [process.env.VUE_APP_PAGINATION_PAGE_SIZE_KEY]: pageSize,
                [process.env.VUE_APP_PAGINATION_PAGE_TOTAL_KEY]: total,
            } = data;
            this.tableDataSource = list;
            this.tablePagination = {
                ...this.tablePagination,
                current, pageSize: Number(pageSize), total
            }
        },
        setTableDataLoader(loader, data, callback) {
            this.tableDataLoader = loader;
            loader({
                ...data,
                [process.env.VUE_APP_PAGINATION_PAGE_KEY]: this.tablePagination.current,
                [process.env.VUE_APP_PAGINATION_PAGE_SIZE_KEY]: this.tablePagination.pageSize,
            }).then(result => {
                const {data} = result.data;
                this.setTableDataSource(data);
                callback(result)
            }).catch(e => {
                console.log('error while load table data', e);
            })
        },
        onTableChange(pagination) {
            console.log('table changed', pagination)
            this.tablePagination = {...this.tablePagination, ...pagination}
        }
    },
    watch: {
        'tablePagination.current': function (val, oldVal) {
            if (val !== oldVal) {
                this.tableDataLoader();
            }
        }
    }
}
