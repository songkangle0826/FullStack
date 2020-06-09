// Cookie
/*
 cookie是存储于访问者计算机中的变量，可以让我们在同一个浏览器访问同一个访问同一域名的时候共享数据。
 http是无状态协议。

 // 
 	1.可以保存用户信息
	2.浏览器历史纪录
	3.猜你喜欢的功能
	4.10天免登录
	5.多个页面之间的数据传递
	6.cookie实现购物车

 // cookie设置中文  koa中无法直接设置中文
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
	// 正常配置cookies
	ctx.cookies.set('userInfo','zhangsna',{
		maxAge: 60*1000*60,
		expires: '2019-21-01day',
		path: '/news',  //配置可以访问的页面
		//domain: '', //正常情况下不要设置 默认就是当前域下的所有页面都可以访问
		//secure:
		// httpOnly: true, //true表示这个cookie只有服务器可以访问，false表示客户端（js）服务器都可以访问
		overwrite: false 
	})
	// 汉字转化base64
	console.log(new Buffer('张三').toString('base64'))
	console.log(new Buffer(new Buffer('张三').toString('base64')).toString())



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
	console.log(ctx.cookies.get('userInfo'));
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
router.get('/shop',async (ctx)=>{
	console.log(ctx.cookies.get('userInfo'));
	ctx.body =  '这是一个购物车';
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);