// Session
/*
	session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上

	session的工作流程
		当浏览器访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成类似于key，value的键值对，然后讲key(cookie
		)返回到浏览器（客户端），浏览器下次在访问时，携带key（cookie），找到对应的session（value），客户的信息都保存在session中

	// 安装 npm install koa-session
	// 引入 const session = require('koa-session');
	// 配置	app.keys = ['some secret hurr'];
 
		const CONFIG = {
 	 		maxAge: 86400000,
  			autoCommit: true, 
  			overwrite: true,
  			httpOnly: true,
  			signed: true,
  			rolling: false,
  			renew: false,
		};
		app.use(session(CONFIG, app))
	// 使用 
*/



var Koa = require('koa'),
	router = require('koa-router')(),
	render = require('koa-art-template'),
	path = require('path'),
	session = require('koa-session');

var app = new Koa();

//配置koa-art-template模板引擎
render(app, {
	root: path.join(__dirname, 'views'),				//视图的位置
	extname: '.html',								//后缀名
	debug: process.env.NODE_ENV !== 'production'    //是否开启调试模式
});


// 配置session的中间件、
app.keys = ['some secret hurr'];   /*cookie的签名*/
const CONFIG = {
	key: 'koaLsess',		//默认
	maxAge: 86400000,		//cookie的过期时间
	autoCommit: true, 		//没有效果
	overwrite: true,		//
	httpOnly: true,			//true表示只有服务器端可以获取
	signed: true,			//默认签名
	rolling: false,			//在每次请求时强制设置cookie，这将重置cookie过期时间（默认false） //需要修改
	renew: true,			//快过期了在重新设置一下 // 需要修改
};
app.use(session(CONFIG, app))


router.get('/',async (ctx)=>{
	

	//获取session
	console.log(ctx.session.userInfo);

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

router.get('/login',async (ctx)=>{
	ctx.session.userInfo = '张三';
	ctx.body =  '登录成功';
})


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);