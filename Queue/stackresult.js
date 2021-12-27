const Stack = require("./Stack")

class Operation {
    constructor(val){
        this.value = val
    }

}

class Add extends Operation {
    apply(value){
        return value + this.value
    }

    undo(value){
        return value - this.value
    }
}

class Times extends Operation {
    apply(value){
        return value * this.value
    }

    undo(value){
        return value / this.value
    }
}

//Operational Stack

class OpsStack {
    constructor(){
        this.value =0
        this.operation = new Stack()
    }

    add(op){
        this.value = op.apply(this.value)
        this.operation.add(op)
    }

    undo(){
        if(this.operation.isEmpty()){
            return false
        }
        this.value = (this.operation.pop())
    }
}

let s = new OpsStack()

s.add(new Add(1))
s.add(new Add(1))
s.add(new Times(2))
s.add(new Times(2))
console.log("current value", s.value)
s.undo()
s.undo()
console.log("final value", s.value.value)

//output
// current value 8
// final value 1