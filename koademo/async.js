// async function getData(){
// 	console.log(2)
// 	return '这是一个方法'
// }

// console.log(getData());

/* 如何获取saync异步方法里面的数据
var p = getData();
p.then((data)=>{
	console.log(data)
})
*/

/*
// await是等待异步方法执行完成们可以获取异步方法里面的数据，但是必须的看用在异步方法里面
var d = await getData();
console.log(d);  // await is only valid in async function

//必须的看用在异步方法里面
async function test(){
	var d = await getData();
	console.log(d)
}
test();
*/

/* await 阻塞的功能，把异步改成一个同步
async function test(){
	console.log(1)
	var d = await getData();
	console.log(d)
	console.log(3)
}
test();   //1,2,3
*/


// async 定义的方法返回的是Promise对象
function getData(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			var username = '张三';
			resolve(username)
		},1000)
	})
}
var p = getData();
/*
p.then(function(d){
	console.log(d)
})*/

async function test(){
	var data = await getData();
	console.log(data)
}
test();