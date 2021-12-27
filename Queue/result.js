const Queue = require('./queue')

let q = new Queue(3, 2)

q.enqueue(1)
q.enqueue(2)

let x=0
while(x = q.dequeue()){
    console.log(x)
}

///output

// 3
// 1