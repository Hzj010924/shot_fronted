<template>
    <div id="moban" style="background: #F9F8F8;">
        <div style="display:flex;">
            <div style="width:30%;">
                <van-sidebar v-model="activeKey" :style="{ width: '90%' }">
                    <van-sidebar-item :title="item.name" v-for="(item, index) in list" :key="index"
                        @click="handleMenulist(index)" />
                </van-sidebar>
            </div>
            <div  id="gddb" :style="{ width: '70%', overflowY: 'auto', height: ymHeight }" ref="scrollbar">
                <div style="" v-for="(item, index) in list" :key="index" :id="'scroll' + index">
                    <div style="font-weight:600;">{{ item.name }}</div>
                    <div v-for="(v, i) in item.children">
                        <div style="display:flex;margin: 10px;">
                            <van-image width="88" height="88" :src="v.img" @click="detail(v)" />
                            <div
                                style="display:flex;flex-direction:column;justify-content:space-between;padding:10px 0 5px 5px;">
                                <div>
                                    <div style="font-size:12px;color:#323233;">{{ v.title }}</div>
                                    <div
                                        style="font-size:12px;color:#646566;padding-right:6px;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;width:120px;-webkit-box-orient: vertical;">
                                        {{ v.ingredient }}</div>
                                </div>
                                <div style="display:flex;align-items:center;justify-content: space-between;">
                                    <div style="margin-right:6px;">￥</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="color:#969799;font-size:14px;text-align:center;margin:10px 0;">没有更多了</div>
                <div style="height:100px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ymHeight: document.body.offsetHeight + 'px',
            activeKey: 0,
            list: [
                {
                    name: '列表一',
                    children: [
                        { id: 1, title: '内容一' },
                        { id: 2, title: '内容二' },
                        { id: 3, title: '内容三' },
                        { id: 4, title: '内容四' },
                    ]
                },
                {
                    name: '列表二',
                    children: [
                        { id: 5, title: '内容一' },
                        { id: 6, title: '内容二' },
                        { id: 7, title: '内容三' },
                        { id: 8, title: '内容四' },
                    ]
                },
                {
                    name: '列表三',
                    children: [
                        { id: 9, title: '内容一' },
                        { id: 10, title: '内容二' },
                        { id: 11, title: '内容三' },
                        { id: 12, title: '内容四' },
                    ]
                },
                {
                    name: '列表四',
                    children: [
                        { id: 10, title: '内容一' },
                        { id: 11, title: '内容二' },
                        { id: 12, title: '内容三' },
                        { id: 13, title: '内容四' },
                    ]
                },
            ]
        }
    },
    mounted () {
        this.ymHeight=document.body.offsetHeight + 'px'
        window.addEventListener("scroll",this.handleScroll,true);
    },
    methods: {
        handleMenulist(index) {
            this.activeKey = index
            let navPage = document.querySelector('#scroll' + index)
            this.$refs.scrollbar.scrollTop = navPage.offsetTop
        },
        handleScroll() {
            let scrollTop = document.querySelector("#gddb").scrollTop
            //这是右边内容滚动时距离顶部的高度
            let len = this.list.length
            for (let a = 0; a < len; a++) {
                if (document.querySelector('#scroll' + a).offsetTop < scrollTop + 20) {//如果（找到每一块距离顶部的高度）< 内容顶部高度
                    this.activeKey = a//那就改变左侧的index
                }
            }
        }

    },
}
</script>

<style lang="less" scoped>
#moban{
    height: 100vh;
}
</style>