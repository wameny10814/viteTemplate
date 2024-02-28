<template>
  <h1>產品列表</h1>
  <div>
    <RouterLink to="/">首頁</RouterLink> |
    <RouterLink to="/about">關於我們</RouterLink> |
    <RouterLink to="/products">產品列表</RouterLink>
  </div>
  <div>
    <router-link to="/products/a" style="margin-right: 1rem"
      >componenta</router-link
    >
    <router-link to="/products/b">ComponentB</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>
