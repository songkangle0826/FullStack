## 数据类型详细解读
### 字符串
### 数字
#### Number
#### parseInt
#### parseFloat
#### isNaN
### 布尔
### null
### undefined

## 数据类型比较


## 数组的常用方法
console.dir(Array);
console.dir(Array.prototype);

## 对象的常用方法
console.dir(Object);
console.dir(Object.prototype);







## GO/VO/AO/EC及作用域和执行上下文


## 堆栈内存
```javascript
let a = {n:10};
let b = a;
b.m = b = {n:20}
/*
* b.m = b = {n:20}
*  相当于 b.m = {n:20}
*  b = {n:20}
* */
console.log(a)
console.log(b)
```


## ECStack
```javascript
ECStack == 执行环境栈 (是个内存)

把代码压入(相当于入栈),只要代码执行,就会有执行上下文
    全局上下文
    函数上下文

EC(GLOBAL)  形成全局执行上下文

GO = {  // 在浏览器端,GO指向了window
    setTimeout: function(){}
}

```


## VO(变量对象)
用来存储当前上下文中的变量


函数也是变量,和let,var创建的变量本质是是一样的,区别是存储的是是个函数类型的值
创建函数:
- function fn(){}
- let fn = function(){}  函数表达式
    -  xxx.onclick = function(){}
    - xxx.addEventListener('click',function(){})
    - (function(){}))() 自执行函数
    - ~function(){}()
    - +/-/!function(){}()
        这种写法支持返回值
        let a = (function(){
            return {}
        })()
        // +/-/!function(){}() 不支持返回值  
        
        
每一个函数执行都会形成一个全新的执行上下文



## AO(函数执行创建的活动变量对象)
函数执行:
- 1.初始化实参集合(arguments)
- 2.创建形参变量
- 3.变量提升
- 4.this指向
- 5.初始化作用域链
- 6.代码执行


## 自执行函数执行
- 两步(创建+执行)


## A || B 
A为真,返回A,否则返回B
## A && B
A为真,返回B,否则返回A
fn && fn()

&& 优先于级高于 ||

- let x = 10, y = 20;
    等价于 let x = 10;
          let y = 20;
- let x = y = 20
    等价于 let x  = 20;
          y = 20;
          
          
## 作用域和作用域链
- Scope: 作用域,创建函数的时候就赋予的
- Scope Chain: 作用域链

创建函数的时候: 
- (只有函数执行会创建AO(活动变量变量))
- 1.创建一个堆(存储代码字符串和对应的键值对)
- 2.初始化了当前函数的作用域([Scope])
    - [Scope] = 所在上下文EC中的变量对象VO/AO

函数执行的时候
- 1.创建一个新的执行上下文EC(压缩到栈ECStack里执行)
- 2.初始化THIS的指向
- 3.初始化作用域链[[Scope Chain]]
- 4.创建AO变量对象用来存储变量
    - arguments 实参集合
    - 形参声明
    - 变量提升
    - 代码执行
    
    
## 优化
- 尽可能减少http请求
- 关于使用style和link标签引入的问题






## 你有木有用到es6
let,const
结构赋值
扩展运算符


