<template>
  <van-search
    shape="round"
    v-model="value"
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  >
  </van-search>
  <!-- 轮播图 -->
  <home-swiper></home-swiper>
  <!-- 功能按钮区 -->
  <home-grid></home-grid>
  <!-- 商品信息展示区 -->
  <home-product></home-product>
  <home-new></home-new>
  <home-top></home-top>

</template>

<script setup>
import HomeSwiper from './HomeSwiper.vue'
import HomeGrid from './HomeGrid.vue'
import HomeProduct from './HomeProduct.vue'
import HomeNew from './HomeNew.vue'
import HomeTop from './HomeTop.vue'

import { ref } from 'vue'
import { showToast } from 'vant'

const value = ref('')
const onSearch = val=> showToast(val)
const onCancel = () => showToast('取消')

</script>

<style lang="less" scoped></style>