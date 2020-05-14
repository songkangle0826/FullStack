
var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var router = new Router();

// 什么是KOA的中间件
/*
 * 通俗的讲，中间件就是匹配路由之前或者匹配完路由完成做的一系列的操作，我们就可以把它叫做中间件
 * 在express中间件（middleware）是以恶搞函数，他可以访问请求对象（request object（req）），响应对象（respone object（res）），和web应用中处理请求-响应循环流程中的中间件，一般被命名为next的变量。在koa中中间件和express有点类似。
*/ 
// 中间件的功能：
// 执行任何代码
// 修改请求和响应对象
// 终结请求-响应循环
// 调用堆栈中的下一个中间件

// 如果我的get，post回调函数中，没有next参数，那么就匹配上第一个路由，就不会往下匹配了，如果想往下匹配的话，那么就需要写next()


// KOA中间件  ---- 执行顺序  ---洋葱圈执行


//配置路由
router.get('/', async (ctx) =>{
	ctx.body = '首页';
})
router.get('/news/',async (ctx) => {
	console.log('这是新闻2')
	ctx.body = '新闻页面';
	console.log('这是新闻2')
})
router.get('/login',async (ctx) => {
	ctx.body = '登录';
})
app.use(async (ctx,next) => {
	console.log("这是一个中间件01");
	next();
	console.log('1')
})

app.use(async (ctx,next) => {
	console.log("这是一个中间件02");
	next();
	console.log('2')
})

//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);