
var bodyParser = require('body-parser');
var express = require('express');
var _ = require('lodash');

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

// 部门
var department = [
  { name: '管理', number: 10, remark: '不要香菜' },
  { name: '行政', number: 0 },
  { name: '产品部', number: 0, },
  { name: '设计部', number: 0, },
  { name: 'java部', number: 2 },
  { name: '运维部', number: 0, },
  { name: 'web前端部', number: 0, },
  { name: 'Android部', number: 0, },
  { name: 'Ios部', number: 0, },
  { name: '测试部', number: 0, },
  { name: '文案部', number: 0, },
  { name: '育牛研究部', number: 0, },
  { name: '植物研究部', number: 0, },
];

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 获取部门
app.post('/department', function (req, res) {
  res.json(department);
});

// 清空
app.post('/clear', (req, res) => {
  _.forEach(department, (item) => {
    item.number = 0;
    item.remark = '';
  });
  res.json(department);
});

// 点餐
app.post('/meal', urlencodedParser, function (req, res) {
  var bodyData = req.body;
  let { index, value, isRemark } = bodyData;

  if (isRemark) {
    department[index].remark = value;
  } else {
    department[index].number = ( value - 0 || 0 );
  }

  res.json(department);
})
 
var server = app.listen(20101, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})