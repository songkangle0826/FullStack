var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var router = new Router();
var views = require('koa-views');
var common = require('./module/common.js');
var bodyParser = require('koa-bodyparser');



app.use(views('views',{ 
	extension: 'ejs'
}))

app.use(bodyParser());

// post提交数据
/*
 * 原生js获取数据  common
 * 通过koa中的koa-bodyparser中间件的使用
 	// 1.安装npm install koa-bodyparser --save
 	// 2.引入
 	// 3.app.use(bodyParser);
*/

//配置路由
router.get('/', async (ctx) =>{
	let title = "你好ejs"
	console.log("获取首页数据")
	await ctx.render('index',{
		title: title
	})
})

router.post('/doAdd',async (ctx)=>{
	// 获取表单提交的数据
	/*
	console.log('post提交数据')
	var data = await common.getPostData(ctx);
	console.log(data);
	ctx.body = data;*/

	ctx.body = ctx.request.body;   //获取表单提交chu的数据

})



//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);