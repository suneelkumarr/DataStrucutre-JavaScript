const  Node  = require('./graphnode')
//Define the nodes
let A = new Node("A")
let B = new Node("B")
let C = new Node("C")
let D = new Node("D")
let E = new Node("E")
let F = new Node("F")
let G = new Node("G")

//Define how each node is related to others
A.linkTo(B, 1)
A.linkTo(C, 2)
B.linkTo(D, 1)
C.linkTo(E, 10)
D.linkTo(E, 10)
D.linkTo(F, 1)
D.linkTo(G, 1)
G.linkTo(G, 1)


const Graph = require('./graph')

let g = new Graph(A)
//Traverse the graph
g.dfs()

//output graph
// A
// B
// D
// E
// F
// G
// C