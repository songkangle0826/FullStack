/*
* (Queue)队列是遵循FIFO(First in- First out 先进先出,也称为先来先服务)原则的一组有序的项
* 队列在尾部添加新元素,并从顶部移除元素,最新添加的元素必须在队列的末尾.
* */

function Queue(){
    // 这里是属性和方法
    this.items = [];
    // enqueue : 向队列尾部添加一个或者多个新的项
    this.enqueue = function(element){
        return this.items.push(element);   // 末尾插入
    };
    // dequeue : 移除队列中的第一(排在最前面的)项,并返回被移除的项
    this.dequeue = function(element){
        return this.items.shift();   // 末尾插入
    };
    // front(正面,前面) : 返回队列中第一个元素-最新被添加的,也将是最新移除的元素,队列不做任何改变
    this.front = function(){
        return this.items[0];
    };
    // isEmpty : 如果队列不包含任何元素,返回true,否则返回false
    this.isEmpty = function(){
        return this.items.length == 0 ? true : false;
    };
    // size : 返回队列包含的元素个数.
    this.size = function(){
        return this.items.length;
    };
    // clear : 清除对列
    this.clear = function(){
        return this.items = [];
    };
    // 打印队列
    this.print = function(){
        return this.items.toString();
    };
}

let queue = new Queue();
queue.enqueue('JOHN');
queue.enqueue('Jack');
queue.enqueue('Camila');
console.log(queue.print());
console.log(queue.isEmpty());
queue.dequeue()
queue.dequeue()
console.log(queue.print());

console.log('==========================');
/*
* 使用es6构建对列
* */
class ES6Queue{
    constructor(){
        this.items = [];
    }
    // enqueue : 向队列尾部添加一个或者多个新的项
    enqueue(element){
        return this.items.push(element);   // 末尾插入
    };
    // dequeue : 移除队列中的第一(排在最前面的)项,并返回被移除的项
    dequeue(element){
        return this.items.shift();   // 末尾插入
    };
    // front(正面,前面) : 返回队列中第一个元素-最新被添加的,也将是最新移除的元素,队列不做任何改变
    front(){
        return this.items[0];
    };
    // isEmpty : 如果队列不包含任何元素,返回true,否则返回false
    isEmpty(){
        return this.items.length == 0 ? true : false;
    };
    // size : 返回队列包含的元素个数.
    size(){
        return this.items.length;
    };
    // clear : 清除对列
    clear(){
        return this.items = [];
    };
    // 打印队列
    print(){
        return this.items.toString();
    };
}
let es6queue = new ES6Queue();
es6queue.enqueue('JOHN');
es6queue.enqueue('Jack');
es6queue.enqueue('Camila');
console.log(es6queue.print());
console.log(es6queue.isEmpty());
es6queue.dequeue()
es6queue.dequeue()
console.log(es6queue.print());




