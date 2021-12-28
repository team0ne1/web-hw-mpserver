/*
 * @Author: your name
 * @Date: 2021-12-26 04:13:49
 * @LastEditTime: 2021-12-28 00:05:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web-hw-mpserver\routes\news.js
 */
var noticeCtl =  require('../controllers/notice.ctl');
var express = require('express');
var router = express.Router();

router.get('/getNotice', noticeCtl.getNotice);
router.post('/addNotice', noticeCtl.addNotice);


module.exports = router;
