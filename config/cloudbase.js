/*
 * @Author: your name
 * @Date: 2021-05-20 17:54:20
 * @LastEditTime: 2021-12-24 03:09:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mp-server-v1\src\config\cloudbase.js
 */




const tcb = require("@cloudbase/node-sdk");
// 初始化资源

const dotenv = require('dotenv');
dotenv.config()

// 云函数下不需要secretId和secretKey。
// env如果不指定将使用默认环境
const cloud1 = tcb.init({
    env: process.env.CB_ENV,
    
});


module.exports = cloud1;