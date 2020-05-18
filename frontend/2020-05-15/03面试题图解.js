{
    let a = {
        n: 10
    };
    let b = a;
    b.m = b = {
        m:20
    }
    console.log(a,b)
    
}

{
    let x = [12,23];
    function fn(y){
        y[0] = 100;
        y = [100]
        y[1] = 200;
        console.log(y)
    }
    fn(x);
    console.log(x)
}

{
    var a = 10;
    ~ function(x){
        console.log(x);
        x = x || 20 && 30 || 40;
        console.log(x)
    }
    console.log(x)
}


{
    let x = [1,2],
        y = [3,4];
    ~function(x){
        x.push('A')
        x = x.slice(0);
        x.push('B');
        x = y;  // y不是私有的,查找上级作用域中的y
        x.push('C');
        console.log(x,y);
    }(x)
    console.log(x,y);
}

// 面试题第五道
{
    let a = 0,b = 0;
    function A(a){
        A = function(b){
            alert(a+b++)
        }
        alert(a)
    }
    A(1);
    A(2);
}