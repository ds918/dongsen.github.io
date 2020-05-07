# myapp

## NOTE

```
1. 使用~可以导入node_modules中的静态文件,或则当想要使用webpack alias的时候就可以在最前面添加
```

## keep-alive

### keep-alive 可以实现将页面的选项选择缓存起来，并通过 activated 来更新数据

1. 使用 keep-alive 实现缓存
   - 当使用 keep-alive 的时候需要把所有的 data 变量初始化放在 created 中
   - 数据的更新请求要放在 activated 中，mounted 中最好不执行方法 ( mounted 中不要执行任何请求，因为会被 avtivated 执行两次 )
   - 当需要关闭一个页面的 keep-alive 时，需要把这个页面的数据请求放到 mounted 中，实现页面的全部刷新
   - 关闭 keep-alive 的方法就是添加 exclude 的值为不缓存的页面的 name

## router

1. params 和 query 传参的区别
   - 使用 params 传参必须使用 name 参数 而 query 传参可以使用 path 和 name 参数
   - 使用 params 参数的两种方式
     - 使用动态路由匹配 例如 `{path: "/test/:username/:password"}` 的话显示的 url 地址为`/test/dongsen/123456`
     - 不使用动态路由匹配的话 `{path: "/test"}`,而在跳转的时候使用 `:to="name:"test",params:{username:dongsen,password:123456"}"`的话 url 为`/test`,但是刷新页面 params 参数便会清除
2. 当路由的参数改变而页面不刷新问题
   - 这种情况发生于,在当前页面的 query 参数触发改变的时候,因为页面是同一个所以不会触发任何生命周期方法
   - 路由参数改变不会执行任何一个周期函数
   - 出现 query 参数改变而且页面没有发生跳转的解决办法有两个
     - 使用 watch 监听 \$route 来实现数据的更新
     - 使用 beforeRouteUpdate 来监听路由参数的变化

## 命名路由

1.  使用命名路由的规则

- 在使用 keep-alive 的时候每一个 keep-alive 只能包含一个 router-view
- 在使用命名路由的时候要将 components 的参数设置在 router-view 的子路由,并通过设置 router-view 的 name 参数来显示和隐藏对应的组件
- 所有的路由的 root 路由就是 app.vue,所以当要在顶级路由设置 components 的时候需要把 命名路由设置在 app.vue 中
- 每一个 router-view 只和当前的子路由有关和父级的没有关系
- 命名路由使用在当你想要同级显示多个组件的时候,例如 slideBar 的某一级需要显示的是三个组件组合的页面,就可以使用命名路由

## import 打包组合

- 可以将每个单独路由和其子路由打包成一个文件，使用的语法 `import(/* webpackChunkName: "group-name" */ "@/views/ds")`

## 路由组件传参

- 可以在 route 中设置 props 的值
  - 布尔值: true 为开启,则参数会被设置为组件的属性
  - 静态值: 可以被设置为了属性 ( 其中 props 设置的值的优先级比 params 和 query 传值高 )
  - 方法: 通过方法可以访问 route 的传参,并设置自定义的组件属性名 `props: (route) => ({name:route.query.name})`
  - 其中布尔值的设置目前只适用于 params 传参,也就是把 params 转化为 props

## postcss

- 可以解析 `~`路径
- 主要是用来处理 css 以及 @import

## postcss-px2rem

- 使用 px2rem 的 `remUnit` 参数值取决于设计稿尺寸 `remUnit: 75, // 1rem=75px，这里是设计稿的尺寸是750px, 这里的值的比例取决于设计稿的尺寸`
- 其中如果不是移动端就要去掉 `felxible.js` 以及 `postcss-px2rem`

## router.beforeEach() main.js

- 全局的路由守卫,可以对所有的路由页面进行判断逻辑行为

## meta

- 通过路由的 meta 字段可以更加灵活的控制路由行为 `meta: {title: '页面标题',...}`

## map()

- map 方法返回的是满足条件的数组

## next()

- next(false) 可以阻止页面的跳转

## beforeRouteEnter

- 只能通过 `next(vm => vm)` 来访问 this

## transition 动画

-
