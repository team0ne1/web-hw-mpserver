/*
 * @Author: your name
 * @Date: 2021-12-24 00:10:20
 * @LastEditTime: 2021-12-26 04:57:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web-hw-mpserver\modules\user.m.js
 */
var db = require('./helper/condb');

const _ = db.command

const userColl = db.collection('user')

const queryUserByUName = (uName) => {
    return new Promise((resolve, reject) => {
        userColl
        .where({uName:uName})
        .get()
        .then((result) =>{
            resolve(result);
            console.log("findByUName :"+result);
        })
        .catch((err) => {
            reject(err);
        })       
    });
}

const createNewUser = (newUser) => {
    return new Promise((resolve, reject) => {
        userColl
        .add(newUser)
        .then((result) =>{
            resolve(result);
            console.log("add new:" + result);
        })
        .catch((err) => {
            reject(err);
        })      
    });
}


module.exports = {
    queryUserByUName,
    createNewUser
}