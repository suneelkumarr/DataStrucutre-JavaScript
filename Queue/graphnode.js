module.exports = class Node {

    constructor(value) {
        this.value = value
        this.links = []
    }
    
    linkTo(node, weight) {
        this.links.push(new Link(this, weight, node))
    }
}

class Link {

    constructor(a, weight, b) {
        this.left = a;
        this.weight = weight
        this.right = b
    }
}