// 第一道
{
    (function anonymous(){
        // 检查数据的保证为number
        const checkNum = function checkNum(value){
            value = Number(value)
            if(isNaN(value)){
                value = 0;
            }
            return value;
        }
        
        // 实例调取所属类原型上的方法(具名函数)
        Number.prototype.plus = function plus(value){
            // => this: 我们要操作的那个数字实例(对象) 相当于new Number
            // 返回Number类的实例,实现链式调用.
            return this.valueOf() + checkNum(value);
        };
        Number.prototype.minus= function minus(value){
            return this.valueOf() - checkNum(value);
        };
    })();
    
    // 编写plus和minus实现如下需求
    let n = 10;
    let m = n.plus(10).minus(5);
    console.log(m); //=> 15 (10+10-5)
    
    /*
    * 封装
    * 1.减少代码的冗余
    * 2.保证自己的代码私有的,保证可扩展性
    * */
    
    
    /*
    * 创建一个数据类型值:
    *   1.字面量方式
    *   2.构造函数方式
    *  无论哪一种方式,创建出来的结果都是所属类的实例
    * */
    // 基本数据类型两种创建方式是不一样的;字面量创建的是基本类型值,构造函数方式创建的是引用类型值
    let x = 10; // 字面量方式
    let y = new Number(10); // 构造函数方式
    y.valueOf() === x;      // valueOf() => 对象结果的原始值是基本类型数字10;
    
    let x1 = [10];
    let y1 = new Array('10');
}


// 第二道
{
    function fun(){
        this.a = 0;
        this.b = function(){
            alert(this.a);
        }
    }
    fun.prototype = {
        /*
         * 重置类的原型指向
         *  问题一: 构造函数可能会丢失,手动设置构造函数(constructor),保证机制的完整性;
        */
        constructor: fun,
        b : function(){
            this.a = 20;
            alert(this.a);
        },
        c : function(){
            this.a = 30;
            alert(this.a)
        }
    }
    /*
    * new执行做了哪些操作
    *   1.形成一个全新的执行上下文EC
    *   2.初始化作用域链
    *   3.创建AO  arguments实参   形参变量   变量提升  函数定义
    *   4.创建一个新的对象,而这个对象就是当前类的实例,并且把这个对象的原型链(__proto__)指向当前类的原型(prototype)->fun.prototype-> let obj = Object.create(fun.prototype)
    *   5.声明这个this指向,并让this指向这个新创建的实例;
    *   6.代码执行
    *   7.返回新创建的对象, 默认返回新创建的对象; 如果客户返回一个基本类型值,返回的依旧是新创建的对象, 如果返回的是引用类型值,那就返回的是引用类型值,而new出来的对象不再是当前类的实例.
    *   8.可以重置类的原型指向,(此时my_fun instanceof fun)
    *       - instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
    *
    *
    * */
    var my_fun = new func();
    my_fun.b();     // 0
    my_fun.c();     // 30
    (fun.prototype).b();      // 相当于给fun.prototype添加了一个a属性 "点"前面是谁,this指向谁
}


// 第三道
{
    function C1(name){
        // name: undefined 没有给实例设置私有属性name
        if(name){
            this.name = name;
        }
    }
    function C2(name){
        this.name = name;
    }
    function C3(name){
        this.name = name || 'join';
    }
    C1.prototype.name = 'Tom';
    C2.prototype.name = 'Tom';
    C3.prototype.name = 'Tom';
    alert(new C1().name + (new C2().name) + (new C3().name) );  //'Tomindefinedjoin'
}

// 第四道
{
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
    function Foo(){
        getName = function(){
            console.log(1);
        };
        return this;
    };
    Foo.getName = function(){
        console.log(2)
    };
    Foo.prototype.getName = function(){
        console.log(3)
    };
    var getName = function(){
        console.log(4)
    };
    function getName(){
        console.log(5);
    };
    Foo.getName();          // 2
    getName();              // 4
    Foo().getName();        // 1
    getName();              // 1
    new Foo.getName();      // new (Foo.getName())  => 2
    new Foo().getName();    // (new Foo()).getName()    => 3  实例.getName()
    new new Foo().getName();// new (new Foo()).getName()  => new 实例.getName() => new 原型上的getName  => 3
        // typeof typeof []
        // new (new Foo()).getName() => new (实例).getName() => new ((实例).getName()) => new 原型上的getName
}

// 第五道
{
    // a在等于什么值的会让下面条件成立
    
    /*
    * 方案一: 利用比较的时候会默认转为字符串的机制,我们可以通过重写tostring或者valueOF方法
    * */
    var a = {
        i:0,
        toString: function(){
            return ++this.i
        }
    };
    var a = {
        i:0,
        valueOf: function(){
            return ++this.i
        }
    };
    
    // a == 1 a.toString()
    
    var arr = [1,2,3];
    var a = {
        toSting: function(){
            return arr.shift();
        }
    };
    
    
    
    /*
    * 方案二: Object.defineProperty劫持对象中某个属性的操作
    * 全局变量也是给window设置一个全局属性
    * */
    var i = 0;
    Object.defineProperty(window,'a',{
        get(){
            return ++i
        },
        set(){
        
        }
    })
    
    if(a ==1 && a == 2 && a == 3){
        console.log('ok')
    };
    
    
    
    
    
    /*
    * == 相等
    * === 绝对相等
    *   1. 左右数据值类型不同,三个等号不能转换数据类型,直接返回false,但是两个等于号会默认先转换为一致的数据类型在进行比较
    *
    *   NaN == NaN NaN和谁都不相等(包括自己)
    *   null == undefined; null和undefined两个等号比较是相等的(三个则不相等),但是他们和其他任何值都不相等(null不会在栈内存中分配任何空间)
    *   null == 0  // false
    *   对象 == 字符串 : 把对象转为字符串(对象.toString())
    *   剩余的情况都是转换为数字: 对象转数字 Number((对象.toString()))
    * */
    
    /*
    * toString: 它的作用是返回一个反映这个对象的字符串
    * valueOf:  他的作用是返回他相对应的原始值
    *
    *   默认情况下，执行这个抽象操作时会先执行valueOf方法，如果返回的不是原始值，会继续执行toString方法，如果返回的还不是原始值，那么会报错，如果有指定转换类型时，情况又会有所不同.
    *       （注意：valueOf和toString方法在Date，array等对象中有些是被重写过的，所以不同对象调用此方法可能产生的操作不同，如果没有这些方法，会调用最原始的Object.prototype上的valueOf和toString方法）
    *        Array,Function,Math 和 Error 对象没有 valueOf 方法。
    * */
    
    
}


{
    
    Array.prototype.push = function push(value){
        // this=> arr;
        // 拿原有的length作为新的一项
        var length = this.length ? this.length : 0;
        this[length] = value;
        // length的长度也会跟着累加
        this.length++;
    };
    let obj = {
        2: 3,
        3: 4,
        length: 2,
        push: Array.prototype.push
    }
    obj.push(1);    //=> obj[2] = 1;obj.length = 3;
    obj.push(2);    //=> obj[3] = 2;obj.length = 4;
    console.log(obj)
    /*
        obj = {2:1,3:2,length:4,push:Array.prototype.push}
    * */
    
    
    let obj1 = {
        1: 1,
        push: Array.prototype.push
    };
    obj1.push(20);
    // obj1:{0:20,1:1,length:1,push: Array.prototype.push}
    // obj1:{1:1,undefined:20,length:NaN,push:f}
    
}

// 第七道
{
    add(1);
    add(1)(2);
    add(1)(2)(3);
    add(1)(2,3);
    add(1,2)(3);
    add(1,2,3);
    
    
    function add(...outerArgs){
        add = function(...innerArgs){
            outerArgs.push(...innerArgs);
            return add;
        }
        add.toString = function(){
            return outerArgs.reduce((pre,item)=> pre+item )
        }
        return add;
    }
    
}


// 第八道
{
    function fun(n,o){
        console.log(o);
        return {
            fun:function(m){
                return fun(m,n)
            }
        }
    }
    var c = fun(0).fun(1);      // undefined 0
    c.fun(2);                   // 1
    c.fun(3)                    // 1
}