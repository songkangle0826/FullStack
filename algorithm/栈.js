/*
* (Stack)栈数据结构   ( 先入后出(LIFO)的容器结构 )
* 栈是一直遵从先进后出原则的有序集合.
*   新添加的或者待删除的元素都保存在栈的同一端,称作为栈顶,
*   另一端就叫栈底.
*   在栈里,新元素都靠近栈顶,旧元素都接近栈底.
* */

// es5写栈
function Stack(){
    this.items = [];   // 以数组的数据结构来保存元素,数组的头为栈底,尾部为栈顶.
    // 向数组中添加一个新元素到栈顶
    this.push = function(element){
        return this.items.push(element);  // 数组push向数组最后压入一个元素,返回压入元素的个数
    };
    // 移除栈顶的元素,同时返回被移除的元素
    this.pop = function(element){
        return this.items.pop(element);   // 数组pop删除数组中的最后一项,返回被删除的元素
    };
    // 返回栈顶的元素,不对栈做任何修改(仅仅返回栈顶的元素)
    this.peek = function(){
        return this.items[this.items.length-1]
    };
    // 如果栈里没有任何元素就返回true,否则返回false
    this.isEmpty = function(){
        return this.items.length == 0 ? true : false;
    };
    // 移除栈里的所有元素
    this.clear = function(){
        return this.items = [];
    };
    // 返回栈里的元素个数
    this.size = function() {
        return this.items.length;
    }
    // 打印栈里的元素
    this.print = function(){
        return this.items.toString();
    }
}

let stack = new Stack();

// es6写栈
class myStack{
    constructor(){
        this.items = [];
    }
    push(element){
        return this.items.push(element);  // 数组push向数组最后压入一个元素,返回压入元素的个数
    };
    // 移除栈顶的元素,同时返回被移除的元素
    pop(element){
        return this.items.pop(element);   // 数组pop删除数组中的最后一项,返回被删除的元素
    };
    // 返回栈顶的元素,不对栈做任何修改(仅仅返回栈顶的元素)
    peek(){
        return this.items[this.items.length-1]
    };
    // 如果栈里没有任何元素就返回true,否则返回false
    isEmpty(){
        return this.items.length == 0 ? true : false;
    };
    // 移除栈里的所有元素
    clear(){
        return this.items = [];
    };
    // 返回栈里的元素个数
    size(){
        return this.items.length;
    };
    // 打印栈里的元素
    print(){
        return this.items.toString();
    }
}

let mystack = new myStack();



/*
* 应用  十进制转二进制
* */
function divideBy2(number){
    let newStack = new myStack(),
        rem,
        binaryString = '';
    
    while(number>0){
        rem = Math.floor(number%2);
        newStack.push(rem);
        number = Math.floor(number/2)
    }
    
    while(!newStack.isEmpty()){
        binaryString += newStack.pop().toString()
    }
    
    return binaryString;
}
console.log(divideBy2(3));

/*
* 应用 十进制转二进制/八进制/十六进制
* */
function baseConvert(number,base){
    let newStack = new Stack(),
        rem,
        binaryString = '',
        digits = '0123456789ABCDEF';    // 十六进制要对应
    
    while(number>0){
        rem = Math.floor(number % base);
        newStack.push(rem);
        number = Math.floor(number / base)
    }
    
    while(!newStack.isEmpty()){
        binaryString += digits[newStack.pop()];
    }
    return binaryString;
}

console.log(baseConvert(100345, 2));
console.log(baseConvert(100345, 8));
console.log(baseConvert(100345, 16));
