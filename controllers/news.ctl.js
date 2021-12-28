/*
 * @Author: your name
 * @Date: 2021-12-26 04:02:35
 * @LastEditTime: 2021-12-27 23:13:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web-hw-mpserver\controllers\news.ctl.js
 */


var newsModel = require('../modules/news.m')

const getNews = (req, res) => {
    var resJSON = {
        code:"300",
        msg:"init",
        debug:'',
        data:null
    }
    const q = req.query

    let getNewsProm = new Promise((resolve,reject)=>{
        if(q.id !== undefined){
            newsModel.queryNews(q.id)
            .then((qResult) => {
                resJSON.code = '301'
                resJSON.msg = 'succ get news'
                resJSON.data =  qResult.data
                resolve()
            })
            .catch((err)=>{
                resJSON.debug =  err
                reject()
            })
            
        }else{
            newsModel.queryNews()
            .then((qResult) => {
                resJSON.code = '301'
                resJSON.msg = 'succ get news'
                resJSON.data =  qResult.data
                resolve()
            })
            .catch((err)=>{
                resJSON.debug =  err
                reject()
            })
            
        }
    })

    getNewsProm.then((result)=>{
        return res.status(200).json(resJSON)
    })
    .catch((e)=>{

    }) 
}


const addNews = (req, res) => {
    const data = req.body;
    console.log(data)
    let newNews = {
        title:data.title,
        author:data.author,
        content:data.content
    }

    newsModel.createANews(newNews)
    .then((qResult) => {

        if(qResult){
            return res.status(200)
            .json({
                "code":'401',
                "msg":"succeed add a news",
                "debug":"qResult "+ JSON.stringify(qResult)
            })
        }
    })
    .catch((err)=>{
        res.send(err)
    })
}

const addComment = (req, res) => {
    const data = req.body;
    // console.log(data)
    let comDate = {
        cm_content: data.cm_content,
        user_name: data.user_name
    }

    newsModel.addComment(data._id,comDate)
    .then((qResult) => {

        if(qResult){
            return res.status(200)
            .json({
                "code":'501',
                "msg":"succeed add a comment",
                "debug":"qResult "+ JSON.stringify(qResult)
            })
        }
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports = {
    getNews,
    addNews,
    addComment
};

