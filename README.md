# DVA-UMI-MOBILE
1.0版本
## 特性
1.使用hd方案
## 使用说明
1.在首页头部bar没有返回按钮
2.在登录页没有头部bar（在utils/config里面设置）
3.注意首页或者登录页的图片（rem）
### 目录结构

```bash
├── /mock/           # 数据mock
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /assets/       # 公共文件，编译时copy至dist目录
│ ├── /components/   # UI组件及UI相关方法
│ │ ├── skin.less    # 全局样式
│ │ └── vars.less    # 全局样式变量
│ ├── /pages/        # 页面
│ │ └── /user/       # 路由
│ │   ├── /components/ #私有组件     
│ │   ├── /models/     #私有模型(按需加载) 
│ │   ├── /services/   #私有服务(按需加载)   
│ │   ├── page.js       
│ │   └── page.less   
│ ├── /models/       # 全局数据模型(默认加载)
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── global.css(.less) #全局样式文件     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
```

### 快速开始

克隆项目文件:

```bash
git clone https://github.com/xiaohuoni/dva-umi-mobile.git
```

进入目录安装依赖:

```bash
npm i 或者 yarn install
```

启动服务.

```bash
$ npm start
```

编译.

```bash
$ npm run build
```

或者你可以使用: [oni-cli](https://github.com/xiaohuoni/oni-cli)
v1.0.6提供
```bash
$ npm install oni-cli -g
$ oni new myapp
$ cd myapp
$ npm install
$ npm start         # visit http://localhost:8000
```
