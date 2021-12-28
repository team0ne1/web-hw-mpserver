/*
 * @Author: your name
 * @Date: 2021-12-26 04:02:35
 * @LastEditTime: 2021-12-28 01:34:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web-hw-mpserver\controllers\news.ctl.js
 */


var noticeModel = require('../modules/notice.m')

const getNotice = (req, res) => {
    var resJSON = {
        code:"300",
        msg:"init",
        debug:'',
        data:null
    }
    const q = req.query

    let getNewsProm = new Promise((resolve,reject)=>{
        if(q.id !== undefined){
            noticeModel.queryNews(q.id)
            .then((qResult) => {
                resJSON.code = '301'
                resJSON.msg = 'succ get notice'
                resJSON.data =  qResult.data
                resolve()
            })
            .catch((err)=>{
                resJSON.debug =  err
                reject()
            })
            
        }else{
            noticeModel.queryNews()
            .then((qResult) => {
                resJSON.code = '301'
                resJSON.msg = 'succ get notice'
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


const addNotice = (req, res) => {
    const data = req.body;
    console.log(data)
    let newNews = {
        title:data.title,
        author:data.author,
        content:data.content
    }

    noticeModel.createANews(newNews)
    .then((qResult) => {

        if(qResult){
            return res.status(200)
            .json({
                "code":'401',
                "msg":"succeed add a notice",
                "debug":"qResult "+ JSON.stringify(qResult)
            })
        }
    })
    .catch((err)=>{
        res.send(err)
    })
}



module.exports = {
    getNotice,
    addNotice,
};

