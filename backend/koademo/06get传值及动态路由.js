var Koa = require('koa');
var Router = require('koa-router');

// 实例化KOA
var app = new Koa();
// 实例化Router
var router = new Router();

// 配置路由

// 中间件
//express写法
// app.use(function(req,res){
// 	res.send('返回数据')
// })


// app.use( async (ctx)=>{
// 	ctx.body = '你好，koa2.x'
// })


// ctx 上下文 content，包含了require和respnse
//配置路由
router.get('/', async (ctx) =>{
	ctx.body = '首页';   /* 返回数据 原生里面的res.writeHead() res.send() */
})
//动态路由串多个值

router.get('/news/:aid/:cid',async (ctx) => {
	console.log(ctx.params)  //{ aid: '123',cid:'456'}
	ctx.body = '新闻页面';
})
router.get('/newscontent/:aid',async (ctx) => {

	//动态路由
	console.log(ctx.params)  //{ aid: 'ads' }
	

	/*
     * 在koa2中GET传值通过request接收，但是接受的方法有两种，query和querystring
     * query 返回的是格式化的参数对象
     * querystring: 返回的是请求字符串
	*/
	//从ctx中获取get传值

	console.log(ctx.query); //{ id:1 } 获取的是对象，用的最多的方式
	console.log(ctx.querystring); //id=2&name=111
	console.log(ctx.url);   //获取url地址

	// ctx里面的request里面获取get值
	console.log(ctx.request);
	console.log(ctx.request.query);		//{ id: '2', name: '111' }
	console.log(ctx.request.querystring);//id=2&name=111

	ctx.body = '新闻页面';
})


//启动路由
app
	.use(router.routes())  /* 启动路由,必须加上 */
	.use(router.allowedMethods());  /*可以配置，可以不配置*/

/*
 * use(router.allowedMethods())作用: 这是官方文档推荐用法，我们可以，看到router。allowedMethods() 用在了路由匹配router.routes() 之后，所有路由中间件最后调用，此时根据ctx.status设置response响应头 
 */

app.listen(3000);