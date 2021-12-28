/*
 * @Author: your name
 * @Date: 2021-12-26 04:13:49
 * @LastEditTime: 2021-12-28 00:00:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web-hw-mpserver\routes\news.js
 */
var newsCtl =  require('../controllers/news.ctl');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('server is on. /news');
});

router.get('/getNews', newsCtl.getNews);
router.post('/addNews', newsCtl.addNews);
router.post('/addCom', newsCtl.addComment);



module.exports = router;
