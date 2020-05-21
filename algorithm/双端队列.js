/*
* Deque(双端队列): Double-End Queue (双端队列)
* 双端对列可以从头部压入数据,可以从头部移除数据.
*   也可以从尾部压入数据,从尾部移除数据.
*
* 插入和删除都是O(1)的
* 查询是O(n)的,因为这个元素是没有任何顺序可以的
* */

/*
* Deque: API
* 从前面插入或者移除
*   addFirst(e)  removeFirst()  getFirst()   有异常抛出(假如压入的时候,队列容纳不了了)
*   offerFirst(e) pollFirst()  peekFirst()   返回null
* 从后面插入或者移除
*   addLast(e)  removeLast()  getLast()     有异常抛出
*   offerLast(e) pollLast()  peekLast()     返回null
 */
 

// es6实现双端队列
class Deque{

}