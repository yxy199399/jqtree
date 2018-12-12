"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
//添加方法
app.get('/', function (req, res) {
    res.send('Hello express!!!');
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === 'OPTIONS') {
        return res.send(200);
    }
    else {
        return next();
    }
});
app.get('/tree', function (req, res) {
    console.log(req.query);
    var data = [
        {
            "name": "Saurischia",
            "id": 1,
            "load_on_demand": true
        },
        {
            "name": "Ornithischians",
            "id": 23,
            "load_on_demand": true
        }
    ];
    var dataC = [
        {
            "name": "Saurischia",
            "id": 11,
        },
        {
            "name": "Ornithischians",
            "id": 12,
        }
    ];
    if (req.query.node == 1) {
        res.send(dataC);
    }
    res.json(data);
});
var server = app.listen(8000, 'localhost', function () {
    console.log("服务器已启动");
});
//# sourceMappingURL=express.js.map