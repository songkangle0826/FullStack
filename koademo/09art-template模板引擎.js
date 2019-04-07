// koa art-template模板引擎
/*
 常见的模板引擎
 适用于koa的模板引擎：比如jade，ejs，art-template

	art-template
		安装npm install --save art-template
		    npm install --save koa-art-template
		引入 const render = require('koa-art-template');
		配置 render(app, {
		  		root: path.join(__dirname, 'view'),				//视图的位置
		  		extname: '.art',								//后缀名
		  		debug: process.env.NODE_ENV !== 'production'    //是否开启调试模式
			});

*/



var Koa = require('koa'),
	router = require('koa-router')(),
	render = require('koa-art-template'),
	path = require('path')

var app = new Koa();

//配置koa-art-template模板引擎
render(app, {
	root: path.join(__dirname, 'views'),				//视图的位置
	extname: '.html',								//后缀名
	debug: process.env.NODE_ENV !== 'production'    //是否开启调试模式
});


router.get('/',async (ctx)=>{
	let list = {
		name: '张三',
		list: ['11',22,33],
		h2: "<h2>这是h2</h2>",
		num: 20
	} 

	await ctx.render("index",{
		list: list
	})
})
router.get('/news',async (ctx)=>{
	let list = {
		name: '张三',
		list: ['11',22,33],
		h2: "<h2>这是h2</h2>",
		num: 20
	} 
	await ctx.render("news",{
		list:list
	})
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);