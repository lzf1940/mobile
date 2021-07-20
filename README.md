# government-mp-base

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Bundle Analyzer

```
npm run analyzer
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Directory Structure


```
government-mp-base
├─ .browserslistrc
├─ .env                   // 环境变量设置
├─ .eslintrc.js           // lint规则配置
├─ .gitignore
├─ .prettierrc.js         // prettier配置
├─ babel.config.js        // babel设置
├─ jest.config.js         // jest配置
├─ output.js
├─ package.json           // 项目基本信息
├─ postcss.config.js      // postcss pxtorem设置
├─ public
│  ├─ favicon.ico
│  └─ index.html          // 入口页面
├─ README.md              // 新目说明
├─ src
│  ├─ App.vue             //  入口文件
│  ├─ assets              //  资源文件
│  │  ├─ css                  // 全局样式
│  │  │  ├─ common.less
│  │  │  └─ reset.less
│  │  ├─ image                // 图片资源
│  │  │  ├─ 401.gif
│  │  │  ├─ 404.png
│  │  │  ├─ 500.png
│  │  │  └─ noContent.png
│  ├─ components              //  公共组件
│  │  ├─ HelloWorld.vue         //  一般组件
│  │  └─ high                   //  高频组件
│  │     ├─ echartBar.vue
│  │     ├─ noContent.vue
│  │     └─ regComp.js
│  ├─ directives             // 全局指令
│  │  └─ has.js
│  ├─ layout                 // layOut
│  │  └─ index.vue
│  ├─ main.js                // 程序入口脚本
│  ├─ request                // 请求相关
│  │  ├─ api                    // 业务请求api配置
│  │  │  └─ index.js
│  │  ├─ common.js              // 请求方式参数封装
│  │  └─ service.js             // 请求拦截器
│  ├─ router                 // 路由
│  │  ├─ analysis               // 业务路由模块
│  │  │  └─ analysis.router.js     // 具体路由配置（严格按照xxx.router.js命名规则编写）
│  │  ├─ index.js               // 路由配置（动态引入）
│  │  └─ tabbarHome             // 业务路由模块
│  │     └─ tabbarHome.router.js  
│  ├─ store                 // vuex
│  │  ├─ index.js
│  │  └─ modules            // 业务对应vuex模块
│  │     ├─ common.js          // 业务vuex（根据业务需求写在 modules文件夹下）
│  │     └─ user.js
│  ├─ utils                 // 通用功能文件夹
│  │  ├─ localstorage.js       // 本地存储
│  │  ├─ utils.js              // 工具函数
│  │  └─ vant.js               // vant全局按需加载
│  └─ views                 // 视图
│     ├─ about.vue
│     ├─ analysis.vue
│     ├─ errorPage          // 错误页面
│     │  ├─ 401.vue
│     │  ├─ 404.vue
│     │  └─ 500.vue
│     ├─ home.vue
│     ├─ mine.vue
│     ├─ tabbarHome.vue
│     └─ todo.vue
├─ restful.http             // restful配置文件 
├─ tests                    // jest单测
│  └─ unit
│     └─ example.spec.js       // 单测用例
└─ vue.config.js            // 自定义weppack配置

```