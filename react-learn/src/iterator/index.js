// 迭代器
var iterator = {
    total: 3, // 可迭代总数
    i: 1, // 当前迭代次数
    next() {
        var obj = {
            value: this.i > this.total ? undefined : this.i,
            done: this.i > this.total
        }
        this.i++;
        return obj;
    }
}
let next = iterator.next();
while (!next.done) {
    console.log(next.value, 111);
    next = iterator.next()
}

// 斐波那契数列迭代器
var fib = {
    a: 1,
    b: 1,
    curIndex: 1,
    next() {
        if (this.curIndex === 1 || this.curIndex === 2) {
            this.curIndex++;
            return { value: 1, done: false };
        }

        let newVal = this.a + this.b;
        this.a = this.b;
        this.b = newVal
        this.curIndex++;
        return { value: newVal, done: false }
    }
}

// 迭代器创建函数
function createIterator() {
    var total = 3,
        i = 1;
    return ({
        next() {
            var obj = {
                value: i > total ? undefined : i,
                done: i > total
            }
            i++;
            return obj;
        }
    })
}

// 数组迭代器创建函数
function createArrIterator(arr) {
    var i = 0;
    return ({
        next() {
            var obj = {
                value: arr[i],
                done: i >= arr.length
            }
            i++;
            return obj.done ? undefined : obj;
        }
    })
}

// 可迭代协议
var obj = {
    [Symbol.iterator]: createIterator
};
for (const item of obj) {
    console.log(item)
}

//模拟for-of循环
var iterator = obj[Symbol.iterator]();
var result = iterator.next();
while (!result.done) {
    //有数据
    const item = result.value;
    console.log(item); //执行循环体
    result = iterator.next();
}

for (const item of obj) {
    console.log(item)
}