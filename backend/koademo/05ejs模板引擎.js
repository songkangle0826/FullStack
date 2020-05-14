var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var router = new Router();
var views = require('koa-views');

/*
 ejs模板引擎的使用：
 	1。npm install koa-views --save
 	2.npm install ejs --save

 	var views = require('koa-views')
 	3.app.use(views(__dirname,{extension：'ejs'}))
 	4.await ctx.render('index');
*/

// 配置模板引擎 - 第三方中间件
// app.use(views('views',{ map:{html:'ejs'} })) //这样配置也可以 必须是html结尾的
app.use(views('views',{ 
	extension: 'ejs'
}))





//配置路由
router.get('/', async (ctx) =>{
	let title = "你好ejs"
	await ctx.render('index',{
		title: title
	})

})
router.get('/news',async (ctx) => {

	let arr = ['111','222','333']
	let content = "<h2>这是一个h2的东西</h2>"
	let num = 123
	await ctx.render('news',{
		list: arr,
		content: content,
		num: num
	}) ;
})
router.get('/login',async (ctx) => {
	ctx.body = '登录';
})


// 写一个中间件配置公共的信息
app.use(async (ctx,next)=>{
	ctx.state.userInfo = '张三';
	await next()
})


//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);


// 注意：我们需要在每一个路由的render里面都要用到公共的数据
/*
 ctx.stats = {
	session: this.session,
	title: '11'
 }
*/