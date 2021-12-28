# 为某人写的Web开发大作业的后端程序

## 介绍

使用 Express 框架结合腾讯云云开发编写的某Web大作业（登陆、注册、发帖、评论功能）后端服务。

云开发：指使用了腾讯云的云数据库（盲猜是重新封装的MongoDB），云托管（Docker容器构建与托管），使用了腾讯云的 Cloudbase (Node.js版本) SDK

**Note:**  总之，就是一堆不考虑性能、安全、设计的能跑起来的烂代码



## 如何运行

1. clone 仓库到本地
   
1. 在项目根目录下运行
   
    ```bash
    npm install
    ```
    
2. 需要在 `.env` 环境变量配置文件中修改如下参数

    ```yaml
    CB_ENV='这里是你的环境ID'
    CB_secretId='这里是secretId'
    CB_secretKey='这里填你的secretKey'
    ```

    这三个环境变量如何获取？请参考[云开发 CloudBase 文档](https://docs.cloudbase.net/api-reference/server/node-sdk/initialization) 

3. 进入腾讯云控制台，搜索 **云开发 CloudBase**，点击进入
4. 新建环境，点击刚刚新建的环境，选择基础服务 -> 数据库 -> 新建集合
5. 新建三个集合分别叫 `user` 、`news` 、`notice`
6. 点击**云托管**，**新建服务**，然后**新建版本**，选择从本地文件夹上传代码，监听端口改为**3000** （根据.env里面的环境变量来），选择**部署完成后自动开启100%流量**，点击开始部署。
7. 等等部署成功，完成
8. 在 **云开发 CloudBase** 页面，点击访问服务，可以看到公网访问域名



接口文档之后再补
