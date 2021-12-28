/*
 * @Author: your name
 * @Date: 2021-12-24 00:38:35
 * @LastEditTime: 2021-12-26 06:04:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web-hw-mpserver\controllers\user.ctl.js
 */

var userModel = require('../modules/user.m')

const userLogin = (req, res) => {
    const data = req.body;
    console.log(data)
    let resJSON = {
        code:"100",
        msg:"init",
        debug:''
    }
    let qUName;
    if(data.uName == undefined || data.uPasswd == undefined){
        resJSON.code = '111';
        resJSON.msg = "error: 你码呢？ 发的什么东西?";
        return res.json(resJSON)
    }else{
        qUName = data.uName
    }

    userModel.queryUserByUName(qUName)
    .then((qResult) => {
        console.log(qResult);
        //return res.send(qResult);
        if(qResult.data.length == 0){
            resJSON.code = '112';
            resJSON.msg = "error: 没你这个用户!";
        }
        else if(qResult.data[0].uName == data.uName && qResult.data[0].uPasswd == data.uPasswd){
    
            resJSON.code = '101'
            resJSON.msg = "succeed login"
            resJSON.avatarUrl = qResult.data[0].avatarUrl
            resJSON.debug = "qResult.data "+ JSON.stringify(qResult.data)
        }
        else{
            resJSON = {
                code:'110',
                msg:"error: wrong uName or uPasswd",
                debug:"qResult.data "+ JSON.stringify(qResult.data)
            }
        }
        return res.json(resJSON)

    })
    .catch((err)=>{
        resJSON.msg = "error: " + err
        return res.json(resJSON)
    })

    
    
}


const userRegister = (req, res) => {
    const data = req.body;
    console.log(data)
    let newUser = {
        uName:data.newUser.uName,
        uPasswd:data.newUser.uPasswd,
        avatarUrl:data.newUser.avatarUrl
    }

    userModel.queryUserByUName(newUser.uName)
    .then((qResult) => {
        console.log(qResult);
        if(qResult.data.length == 0){
            userModel.createNewUser(newUser)
            .then((qResult) => {
                console.log(qResult);
                if(qResult){
                    return res.status(200)
                    .json({
                        "code":'201',
                        "msg":"succeed registered",
                        "debug":"qResult "+ JSON.stringify(qResult)
                    })
                }
            })
            .catch((err)=>{
                res.send(err)
            })
        }
        else{
            return res.status(200)
            .json({
                "code":'210',
                "msg":"bad uName",
            })
        }


    })
    .catch((err)=>{
        res.send(err)
    })


}

module.exports = {
    userLogin,
    userRegister
};

