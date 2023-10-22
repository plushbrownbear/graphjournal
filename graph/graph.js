'use strict';


// create a graph class
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(numOfVertices)
    {
        this.numOfVertices = numOfVertices;
        this.AdjList = new Map();
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
        // vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);
     
        // Since graph is undirected,
        // add an edge from w to v also
        this.AdjList.get(w).push(v);
    }


    // find the edge count...
    getEdgeCnt(v, bidirectional) { // if an undefined vertexgiven then do entire graph
        let cnt = 0
        let factor = 1
        if (!bidirectional) {
            factor = 2
        }
        if (v !== undefined && v !== null) {
            cnt = this.AdjList.get(v).length / factor
        } else {
            const keys = this.AdjList.keys()
            let result = keys.next()    // using iterator!
            while (!result.done) {
                cnt += this.AdjList.get(result.value).length / factor
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

    // bfs(v)
    // dfs(v)
}
