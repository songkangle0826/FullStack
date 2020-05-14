// koa koa-static静态资源中间件
/*
 * koa-static 静态资源中间件 静态web
 	1. npm install koa-static --save
 	2.引入 var static = require('koa-static')
 	3.使用 app.use(static(
		path.join(__dirname,'public')
 	))

*/



var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var router = new Router();
var views = require('koa-views');
var common = require('./module/common.js');
var bodyParser = require('koa-bodyparser');
var static = require('koa-static');


app.use(views('views',{ 
	extension: 'ejs'
}))

app.use(bodyParser());

// 首先去static目录找，如果能找到返回对应的目录，找不到next()
// 配置资源静态web的中间件
app.use(static('static'))  //koa静态资源的在中间件可以配置多个



//配置路由
router.get('/', async (ctx) =>{
	let title = "你好ejs"
	console.log("获取首页数据")
	await ctx.render('index',{
		title: title
	})
})

router.post('/doAdd',async (ctx)=>{
	
	ctx.body = ctx.request.body;   //获取表单提交chu的数据

})



//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
