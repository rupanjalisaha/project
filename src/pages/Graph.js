import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
function Graph() {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="body">
      <h2>
        Graph is a non linear data structure formed with nodes that are
        connected with each other and the root node by edges. BFS(Breadth First
        Search) and DFS(Depth First Search) are the searching algorithms to find
        an element in a Graph. It is used in database management system for data
        fetching purpose.
      </h2>
      <img className="CourseImage" src="https://d14b9ctw0m6fid.cloudfront.net/ugblog/wp-content/uploads/2020/10/4.png" width="700px" height="400px"alt="" />
      <h3>* Below some important question answers are given for study...</h3>
      <h2>Q. Define adjacent nodes.</h2>
      <p>
        Any two nodes which are connected by an edge in a graph are called
        adjacent nodes. For example, if an edge x ε E is associated with a pair
        of nodes (u,v) where u, v ε V, then we say that the edge x connects the
        nodes u and v.
      </p>
      <h2>Q. What is a directed graph?</h2>
      <p>A graph in which every edge is directed is called a directed graph.</p>
      <h2>Q. What is an undirected graph?</h2>
      <p>
        A graph in which every edge is undirected is called a directed graph.
      </p>
      <h2>Q. What is a loop?</h2>
      <p>
        An edge of a graph which connects to itself is called a loop or sling.
      </p>
      <h2>Q. What is a simple graph?</h2>
      <p>
        A simple graph is a graph, which has not more than one edge between a
        pair of nodes than such a graph is called a simple graph.
      </p>
      <h2>Q. What is a weighted graph?</h2>
      <p>
        A graph in which weights are assigned to every edge is called a weighted
        graph.
      </p>
      <h2>Q. Define outdegree of a graph.</h2>
      <p>
        In a directed graph, for any node v, the number of edges which have v as
        their initial node is called the out degree of the node v.
      </p>
      <h2>Q. Define indegree of a graph?</h2>
      <p>
        In a directed graph, for any node v, the number of edges which have v as
        their terminal node is called the indegree of the node v.
      </p>
      <h2>Q. What is a cycle or a circuit?</h2>
      <p>
        A path which originates and ends in the same node is called a cycle or
        circuit.
      </p>
      <h2>Q. What is an acyclic graph?</h2>
      <p>
        A simple diagram which does not have any cycles is called an acyclic
        graph.
      </p>
      <h2>Q. What is an undirected acyclic graph?</h2>
      <p>
        When every edge in an acyclic graph is undirected, it is called an
        undirected acyclic graph. It is also called as undirected forest.
      </p>
      <h2>Q. Define graph traversals.</h2>
      <p>
        Traversing a graph is an efficient way to visit each vertex and edge
        exactly once.
      </p>
      <p>
        * It's time for a quick revision of your knowledge on graph data
        structure. Click on the answer box to see the correct answer of the
        questions.
      </p>
      <div className="PracticeSection">
        <h1>Practice Section</h1>
        <hr></hr>
        <h3>1. Which of the following is NOT a property of a simple graph?</h3>
        <ol className="answer-options" type="a">
          <li>There can be multiple edges between two vertices</li>
          <li>There can be self-loops (edges from a vertex to itself).</li>
          <li>The degree of a vertex is the number of edges incident on it.</li>
          <li>A graph can be disconnected.</li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right">
              {" "}
              (a) There can be multiple edges between two vertices.{" "}
            </option>
          </select>
        </div>
        <h3>
          2. What is the time complexity of finding the shortest path between
          two vertices in an unweighted graph using Breadth-First Search (BFS)?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(V+E)</li>
          <li>O(V^2)</li>
          <li>O(E log V)</li>
          <li>O(V log V)</li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right"> (a) O(V + E) </option>
          </select>
        </div>
        <h3>
          3. What is the time complexity of finding the minimum spanning tree of
          an undirected graph using Prim's algorithm?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(V+E)</li>
          <li>O(V^2)</li>
          <li>O(E log V)</li>
          <li>O(V log V)</li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right"> (c) O(E log V) </option>
          </select>
        </div>
        <h3>
          4. What is the time complexity of detecting a cycle in an undirected
          graph using Depth-First Search (DFS)?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(V+E)</li>
          <li>O(V^2)</li>
          <li>O(E log V)</li>
          <li>O(V log V)</li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right"> (a) O(V + E) </option>
          </select>
        </div>
        <h3>
          5. What is the time complexity of finding the topological order of a
          directed acyclic graph (DAG) using DFS?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(V+E)</li>
          <li>O(V^2)</li>
          <li>O(E log V)</li>
          <li>O(V log V)</li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right"> (a) O(V + E) </option>
          </select>
        </div>
        <h3>
          6. What is the maximum number of edges in a bipartite graph with n
          vertices?
        </h3>
        <ol className="answer-options" type="a">
          <li>n*(n-1)</li>
          <li>n^2</li>
          <li>n*(n+1)</li>
          <li>2^(n-1)</li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right"> (c) n*(n + 1) </option>
          </select>
        </div>
        <h3>7. What is the diameter of a tree?</h3>
        <ol className="answer-options" type="a">
          <li>
            The length of the shortest path between any two vertices in the
            tree.
          </li>
          <li>
            The length of the longest path between any two vertices in the tree.
          </li>
          <li>The number of vertices in the tree.</li>
          <li>The number of edges in the tree.</li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right">
              {" "}
              (b) The length of the longest path between any two vertices in the
              tree.{" "}
            </option>
          </select>
        </div>
        <h3>8. What is a connected component of a graph?</h3>
        <ol className="answer-options" type="a">
          <li>
            A subgraph in which every vertex is reachable from every other
            vertex.
          </li>
          <li>
            A subgraph in which every vertex is reachable from every other
            vertex using only directed edges.
          </li>
          <li>
            A subgraph in which every vertex has a degree of at least one.
          </li>
          <li>
            (d) A subgraph in which every vertex has a degree of at most one.
          </li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right">
              (a) A subgraph in which every vertex is reachable from every other
              vertex.
            </option>
          </select>
        </div>
        <h3>9. What is a planar graph?</h3>
        <ol className="answer-options" type="a">
          <li>
            A graph that can be drawn on a plane without any edges crossing.
          </li>
          <li>A graph that is bipartite.</li>
          <li>A graph that is acyclic.</li>
          <li>A graph that is connected.</li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right">
              (a) A graph that can be drawn on a plane without any edges
              crossing
            </option>
          </select>
        </div>
        <h3>10. What is a graph isomorphism?</h3>
        <ol className="answer-options" type="a">
          <li>
            A one-to-one correspondence between the vertices of two graphs such
            that the edges are also preserved.
          </li>
          <li>
            A one-to-one correspondence between the vertices of two graphs such
            that the degrees of the vertices are also preserved.
          </li>
          <li>
            A one-to-one correspondence between the vertices of two graphs such
            that the paths between vertices are also preserved.
          </li>
          <li>
            A one-to-one correspondence between the vertices of two graphs such
            that the cycles in the graphs are also preserved.
          </li>
        </ol>
        <div className="answer-list">
          <p>Answer:</p>
          <select>
            <option value=""></option>
            <option value="right">
              (a) A one-to-one correspondence between the vertices of two graphs
              such that the edges are also preserved.
            </option>
          </select>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Graph;
