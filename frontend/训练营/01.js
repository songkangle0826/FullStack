// let result = 100 + true + 21.2 + null + undefined + 'Tencent' + [] + null + 9 + false;
//                101+21.2 = 122.2 + 0 + NaN +  'Tencent'
//                         = 'NaNTencent' + "" + null + 9 + false
//                         = '122.2NaNTencentnull9false';
//
//
//                         122.2 + 0 + NaN  = NaN

/*
js中的数据类型
    1.基本数据类型: null number string undefined boolean symbol bigint
    2.引用数据类型: object function


    出现字符串,对象就按照字符串拼接

    对象+0: 把对象在转换为字符串.

*/



console.log(result);



console.log([]==false);     // ture
console.log(![]==false);    // ture



let arr = [10.18,0,10,25,23];
arr = arr.map(parseInt);
console.log(arr);




let a = {n:1};
let b = a;      // b = AAAFFF111;
a.x = a = {n:1};    // a.x = AAAFFF111
console.log(a,b);

a = {
    n: 1,
    x: {n:1}
};