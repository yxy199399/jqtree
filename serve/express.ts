import * as express from 'express';
const app = express();

//添加方法
app.get('/',(req,res) => {
    res.send('Hello express!!!')
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});
app.get('/tree', (req,res) => {
    console.log(req.query);

    let data = [
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
    let dataC = [
        {
            "name": "Saurischia",
            "id": 11,
        },
        {
            "name": "Ornithischians",
            "id": 12,
        }
    ];
    if(req.query.node == 1){
        res.send(dataC)
    }
    res.json(data)
});
const server = app.listen(8000, 'localhost', () => {
    console.log("服务器已启动")
});
