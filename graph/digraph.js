'use strict';


// directed graph class
class Digraph {
    // defining vertex array and
    // adjacent list
    constructor(numOfVertices)
    {
        this.numOfVertices = numOfVertices;
        this.AdjList = new Map();

        this.visited = new Map(); // this keeps track of visited vertices during traversal
    }
 
    // add vertex to the graph, internals represented as a map of arrays with vertices for keys
    addVertex(v)
    {
        // initialize the adjacent list with a null array
        this.AdjList.set(v, []);
    }

    // add edge to the graph
    addEdge(v, w)
    {
        if ((v == undefined || v == null) || (w == undefined || w == null)) {
          console.log("Error: something is undefined!")
          console.log("v value: ", v);
          console.log("w value: ", w);
          return
        }

        // get the list for vertex v and put the
        // vertex w denoting directed edge going from v to w
        this.AdjList.get(v).push(w);
    }


    // find the edge count...
    getEdgeCnt(v) { // if an undefined vertexgiven then do entire graph
        let cnt = 0
        if (v !== undefined && v !== null) {
            cnt = this.AdjList.get(v).length
        } else {
            const keys = this.AdjList.keys()
            let result = keys.next()    // using iterator!
            while (!result.done) {
                cnt += this.AdjList.get(result.value).length
                result = keys.next() // go to next edge list!
            }
        }
        return cnt
    }

    // Prints the vertex and adjacency list
    printGraph()
    {
        // get all the vertices
        const get_keys = this.AdjList.keys();
     
        // iterate over the vertices
        for (var i of get_keys) 
        {
            // get the corresponding adjacency list
            // for the vertex
            const get_values = this.AdjList.get(i);
            var conc = "";
     
            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";
     
            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

    // depth first traversal at v
    depthFirst(v) {
        this.dft(v)
        this.visited.clear()
    }

    dft(v) {
        if (v !== undefined && v !== null) {
            if (this.AdjList.get(v)) {
                this.visited.set(v, true)    // visit current vertex!

                const vEdges = this.AdjList.get(v)
                for (var i of vEdges)
                    if (!this.visited.get(i)) {
                        this.dft(i)
                    }

                console.log("-> ", v)
                return
            }
            console.log("Error: vertex given cannot be found ", v)
            return
        }
        console.log("Error: vertex given is ", v)
        return
    }

    // breadth first traversal at v
    breadthFirst(v) {
        this.bft(v)
        // this.clearCache()
        this.visited.clear()
    }

    bft(v) {
        if (v !== undefined && v !== null) {
            if (this.AdjList.get(v)) {
                this.visited.set(v, true)    // visit current vertex!
                console.log("-> ", v)

                const vEdges = this.AdjList.get(v)
                for (var i of vEdges)
                    if (!this.visited.get(i)) {
                        this.bft(i)
                    }

                return
            }
            console.log("Error: vertex given cannot be found ", v)
            return
        }
        console.log("Error: vertex given is ", v)
        return
    }
}
