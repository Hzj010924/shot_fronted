# 1 axios使用pinia
```js
import useTokenStore from '../stores/token'
// 请求拦截器

service.interceptors.request.use(config => {
    const { token } = useTokenStore() // 添加了一个JWT令牌到请求头中。
    config.headers["X-LC-Id"] = myconfig.appid;
    config.headers["X-LC-Key"]=myconfig.appkey;
    if (token) {
        config.headers["X-LC-Session"] = token
    }
    return config
})

```

# 2 路由拦截器的使用
```js
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title + ' - 微商城'
  }
  next() 
})
```

# 3pina持久化

# 4js判断对象属性是否存在
```js
  if (data && "sessionToken" in data) {}

```

# 5css穿透 
[笔记之样式穿透(:deep)](https://blog.csdn.net/wgh4318/article/details/128711849)

# CSS 变量 var
[参考](https://blog.csdn.net/ABAP_Brave/article/details/129680719) 
* 使用 CSS 变量标记定义，如：--main-color: black;
* 使用 var() 函数获取变量值，如：color: var(--main-color);
* CSS 变量也具有作用域的概念，可以声明为全局 CSS 变量、局部 CSS 变量；
* 创建全局作用域的变量，在:root选择器中声明(:root选择器会匹配文档的根元素);
* 创建局部作用域的变量，在需要使用变量的选择器中进行声明;

# & 
&是sass的语法，表示嵌套的上一级

# read
1.翻页查询
2.Vuerouter
3.pinia
4.登录逻辑
5.elementUI 用户上传图片