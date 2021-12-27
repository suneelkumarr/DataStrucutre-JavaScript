
module.exports =  class Graph {

    constructor(root_node) {
        this.root_node = root_node
        this.dfs_visited = new Set();
    }
    
    dfs(starting_node) {
        if(!starting_node) starting_node = this.root_node
        let node = starting_node 
        console.log(node.value);
        this.dfs_visited.add(node);
        node.links.forEach( neighbour => {
            if (!this.dfs_visited.has(neighbour.right)) {
                this.dfs(neighbour.right);
            }
        })
    }

}