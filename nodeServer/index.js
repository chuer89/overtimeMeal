
var bodyParser = require('body-parser');
var express = require('express');
// var qs = require('qs');
var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

let jsonStr = function (json) {
  return JSON.stringify(json);
}
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
var jsonParser = bodyParser.json()

app.get('/department', function (req, res) {
  // res.send({
  //   user: '1', y: 2, reqs: req || ''
  // });
  res.send(JSON.stringify({
    y: 1, b: 2, r: req
  }))
  // res.json({
  //   y: req,
  //   z: 2
  // })
});

app.post('/test', urlencodedParser, function (req, res) {
  let bodyData = req.body;
  console.log(bodyData)
  var data = {
    name: '1',
    y: 2,
    r: bodyData
  }
  res.json(data);
  // res.send(jsonStr(data));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})