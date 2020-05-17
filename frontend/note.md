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
- 4.代码执行


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

