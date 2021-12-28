/*
 * @Author: your name
 * @Date: 2021-12-26 03:22:09
 * @LastEditTime: 2021-12-28 01:29:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web-hw-mpserver\modules\news.m.js
 */

var db = require('./helper/condb');

const _ = db.command

const noticeColl = db.collection('notice')

const queryNews = (last_id = '-1') => {
    if(last_id == '-1'){
        return new Promise((resolve, reject) => {
            noticeColl
            .orderBy('cr_date','desc')
            .limit(20)
            .get()
            .then((result) =>{
                resolve(result);
                console.log("find :"+result);
            })
            .catch((err) => {
                reject(err);
            })       
        });
    }else{
        return new Promise((resolve, reject) => {
            noticeColl
            .orderBy('cr_date','desc')
            .where({_id:last_id})
            .limit(20)
            .get()
            .then((result) =>{
                resolve(result);
                console.log("find lt _id :"+result);
            })
            .catch((err) => {
                reject(err);
            })       
        });

    }
    
}

const addComment = (_id,comDate) => {

    if(_id){
        return new Promise((resolve, reject) => {
            comDate.cm_date = db.serverDate()

            noticeColl
            .doc(_id)
            .update({
                comment: _.unshift(comDate)
            })
            .then((result) =>{
                resolve(result);
                console.log("update:"+result);
            })
            .catch((err) => {
                reject(err);
            })       
        });
    }
    
}

const createANews = (newNews) => {
    return new Promise((resolve, reject) => {
        newNews.cr_date = db.serverDate()
        noticeColl
        .add(newNews)
        .then((result) =>{

            resolve(result);
            console.log("add new NEWS:" + result);
        })
        .catch((err) => {
            reject(err);
        })      
    });
}


module.exports = {
    queryNews,
    createANews,
    addComment
}