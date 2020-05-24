<template>
    <div>
        <el-table :data="articles" border style="width: 100%">
            <el-table-column prop="id" label="文章ID" width="140">
            </el-table-column>
            <el-table-column prop="title" label="文章标题" width="270">
            </el-table-column>
            <el-table-column prop="createtime" label="创建时间" width="150">
            </el-table-column>
            <el-table-column prop="thumbup" label="点赞数" width="85">
            </el-table-column>
            <el-table-column prop="visits" label="浏览数" width="85">
            </el-table-column>
            <el-table-column prop="state" label="状态" width="85">
            </el-table-column>
            <el-table-column label="操作" width="120">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "UserArticle",
        methods: {
            handleClick(row) {
                console.log(row);
            },
        },
        data() {
            return {
                tableData: []
            }
        },
        props: {
            articles: {
                type: Array,
                default: null
            }
        },
    }
</script>

<style scoped>

</style>