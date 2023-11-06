<template>
  <div class="menu">
    <div class="menu-left">
      <van-sidebar v-model="tabValue">
        <van-sidebar-item :title="item.name" v-for="(item, index) in menus" :key="index" @click="handleMenulist(index)" />
      </van-sidebar>
    </div>
    <div class="menu-right" ref="itemList">
      <!-- 显示二级分类 -->
      <div class="cate">
        <h4 class="cate-title">{{ menus[tabValue].name }}</h4>
        <ul class="cate-item">
          <li v-for="(item, index2) in menus[tabValue].children" :key="index2">
            <router-link class="cate-item-wrapper" :to="{ name: 'goodslist', params: { category_id: item.id } }">
              <div class="cate-item-img">
                <img :src="item.picture" alt="">
              </div>
              <span>{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
//https://juejin.cn/post/7078592288611368990
//vue3+vant3使用van-sidebar侧边导航组件实现菜单左右联动效果

import { onMounted, watch, nextTick, ref, computed } from 'vue'
import request from '@/utils/request'

const menus = ref([{ name: '' }])
const itemList = ref()

const tabValue = ref(0)

onMounted(() => {
  loadCategoryList()
})

//左侧菜单点击联动左侧
const handleMenulist = (index) => {
  tabValue.value = index
  console.log("index=", index)
}


// 获取分类数据
const loadCategoryList = async () => {
  // let {results} = await request.get('/1.1/scan/classes/category')
  let {results} = await request.get('/1.1/classes/category?order=id')
  console.log("***", results)
  // 将一维数组数据转换为树形结构
  const treeData = convertToTree(results)
  console.log(treeData)
  //   // 将转换后的数据赋值给menus
  menus.value = treeData
}

// 将一维数组转换成树形结构的方法
const convertToTree = data => {
  const treeData = []
  const map = {}
  // 遍历一维数组数据，建立节点映射表
  for (const item of data) {
    map[item.id] = { ...item, children: [] }
  }
  // 遍历映射表，将节点添加到父节点的children中
  for (const item of data) {
    const node = map[item.id]
    if (item.pid === '0') {
      treeData.push(node)
    } else {
      const parent = map[item.pid]
      parent.children.push(node)
    }
  }
  return treeData
}


</script>

<style lang="less" scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.menu {
  display: flex;
  position: absolute;
  text-align: center;
  top: 46px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;

  .menu-left {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    line-height: 54px;

    .menu-item {
      height: 54px;
      width: 100%;
      border-bottom: 1px solid #e1e1e1;

      .text {
        width: 100%;
        margin: 0;
      }
    }

    .current {
      width: 100%;
      background: #fff;

      .text {
        color: red;
      }
    }
  }

  .menu-right {
    flex: 1;
    overflow-y: scroll;
    background: #fff;

    .cate {
      height: 100%;

      .cate-title {
        margin: 0;
        text-align: left;
        font-size: 14px;
        color: #333;
        font-weight: bold;
        padding: 10px;
      }

      .cate-item {
        padding: 7px 10px 10px;
        display: flex;
        overflow: hidden;
        flex-flow: row wrap;

        li {
          width: 33.3%;

          .cate-item-wrapper {
            .cate-item-img {
              width: 100%;

              img {
                width: 70px;
                height: 70px;
              }
            }

            span {
              display: inline-block;
              font-size: 14px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>