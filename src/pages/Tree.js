import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
function Tree() {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="body">
      <h2>
        Tree is a non-linear data structure with children nodes connected with
        parent nodes. The first node of a tree is called "root node". Each node
        can have maximum 2 nodes. A node having no child node is called "leaf
        node".
      </h2>
      <h3>Trees are of many types:</h3>
      <ul>
        <li>Binary Search Tree</li>
        <li>AVL Tree(Balanced Tree)</li>
        <li>Trie Tree</li>
        <li>B+ Tree</li>
        <li>B- Tree</li>
        <li>T Trees</li>
        <li>Heap Tree</li>
      </ul>
      <img className="CourseImage" src="https://miro.medium.com/v2/resize:fit:975/1*PWJiwTxRdQy8A_Y0hAv5Eg.png" width="800px" height="400px"alt="" />
      <h3>* Below some important question answers are given for study...</h3>
      <h2>Q. Define forest.</h2>
      <p>
        A tree may be defined as a forest in which only a single node (root) has
        no predecessors. Any forest consists of a collection of trees.
      </p>
      <h2>Q. State the properties of a binary tree</h2>
      <ul>
        <li>
          The maximum number of nodes on level n of a binary tree is 2n-1, where
          n≥1.
        </li>
        <li>
          The maximum number of nodes in a binary tree of height n is 2n-1,
          where n≥1.
        </li>
        <li>
          For any non-empty tree, nl=nd+1 where nl is the number of leaf nodes
          and nd is the number of nodes of degree 2.
        </li>
      </ul>
      <h2>Q. State the merits of linear representation of binary trees.</h2>
      <ul>
        <li>Storage method is easy and can be easily implemented in arrays</li>
        <li>
          When the location of a parent/child node is known, other one can be
          determined easily
        </li>
        <li>
          It requires static memory allocation so it is easily implemented in
          all programming language
        </li>
      </ul>
      <h2>Q. State the demerit of linear representation of binary trees.</h2>
      <p>
        Insertions and deletions in a node take an excessive amount of
        processing time due to data movement up and down the array
      </p>
      <h2>Q. State the merit of linked representation of binary trees.</h2>
      <p>
        Insertions and deletions in a node involve no data movement except the
        rearrangement of pointers, hence less processing time.
      </p>
      <h2>Q. What is the use of threaded binary tree?</h2>
      <p>
        In threaded binary tree, the NULL pointers are replaced by some
        addresses. The left pointer of the node points to its predecessor and
        the right pointer of the node points to its successor.
      </p>
      <h2>Q. Define AVL Tree.</h2>
      <p>
        An empty tree is height balanced. If T is a non-empty binary tree with
        TL and TR as its left and right subtrees, then T is height balanced if
        (i) TL and TR are height balanced and (ii) │hL - hR│≤ 1 Where hL and hR
        are the heights of TL and TR respectively.
      </p>
      <h2>Q. What do you mean by balanced trees?</h2>
      <p>
        Balanced trees have the structure of binary trees and obey binary search
        tree properties. Apart from these properties, they have some special
        constraints, which differ from one data structure to another. However,
        these constraints are aimed only at reducing the height of the tree,
        because this factor determines the time complexity. Eg: AVL trees, Splay
        trees.
      </p>
      <h2>Q. What are the categories of AVL rotations?</h2>
      <p>
        Let A be the nearest ancestor of the newly inserted nod which has the
        balancing factor ±2. Then the rotations can be classified into the
        following four categories: Left-Left: The newly inserted node is in the
        left subtree of the left child of A. Right-Right: The newly inserted
        node is in the right subtree of the right child of A. Left-Right: The
        newly inserted node is in the right subtree of the left child of A.
        Right-Left: The newly inserted node is in the left subtree of the right
        child of A.
      </p>
      <h2>Q. What do you mean by balance factor of a node in AVL tree?</h2>
      <p>
        The height of left subtree minus height of right subtree is called
        balance factor of a node in AVL tree.The balance factor may be either 0
        or +1 or -1.The height of an empty tree is -1.
      </p>
      <h2>Q. Define splay tree.</h2>
      <p>
        A splay tree is a binary search tree in which restructuring is done
        using a scheme called splay. The splay is a heuristic method which moves
        a given vertex v to the root of the splay tree using a sequence of
        rotations.
      </p>
      <h2>Q. What is the idea behind splaying?</h2>
      <p>
        Splaying reduces the total accessing time if the most frequently
        accessed node is moved towards the root. It does not require to maintain
        any information regarding the height or balance factor and hence saves
        space and simplifies the code to some extent.
      </p>
      <br></br>
      <p>
        * It's time for a quick revision of your knowledge on tree data
        structure. Click on the answer box to see the correct answer of the
        questions.
      </p>
      <div className="PracticeSection">
        <h1>Practice Section</h1>
        <hr></hr>
        <h3>
          1. Which of the following is a true statement about a binary tree?
        </h3>
        <ol className="answer-options" type="a">
          <li>Every node has at most two children.</li>
          <li>Every node has at least one child.</li>
          <li>Every node has at least two children.</li>
          <li>Every node has at most one child.</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> a </option>
          </select>
        </div>
        <h3>
          2. What is the maximum number of nodes in a binary tree of height h?
        </h3>
        <ol className="answer-options" type="a">
          <li>2^h</li>
          <li>2^(h+1)-1</li>
          <li>2^(h-1)</li>
          <li>2^h-1</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> b </option>
          </select>
        </div>
        <h3>
          3. What is the time complexity of searching for an element in a
          balanced binary search tree?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(log n)</li>
          <li>O(n)</li>
          <li>O(n log n)</li>
          <li>O(log log n)</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> a </option>
          </select>
        </div>
        <h3>
          4. What is the time complexity of inserting an element into a balanced
          binary search tree?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(log n)</li>
          <li>O(n)</li>
          <li>O(n log n)</li>
          <li>O(log log n)</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> a </option>
          </select>
        </div>
        <h3>
          5. What is the time complexity of deleting an element from a balanced
          binary search tree?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(log n)</li>
          <li>O(n)</li>
          <li>O(n log n)</li>
          <li>O(log log n)</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> a </option>
          </select>
        </div>
        <h3>
          6. What is the difference between preorder, inorder, and postorder
          traversal of a binary tree?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              {" "}
              Preorder: Root, Left, Right; Inorder: Left, Root, Right;
              Postorder: Left, Right, Root{" "}
            </option>
          </select>
        </div>
        <h3>7. What is a full binary tree?</h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              {" "}
              A full binary tree is a binary tree in which every node has either
              zero or two children.{" "}
            </option>
          </select>
        </div>
        <h3>8. What is a perfect binary tree?</h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              A perfect binary tree is a full binary tree in which all leaves
              are at the same level
            </option>
          </select>
        </div>
        <h3>
          9. What is the difference between a binary search tree (BST) and a
          regular binary tree?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              In a BST, the data in each node is greater than the data in all of
              its left children and less than the data in all of its right
              children.
            </option>
          </select>
        </div>
        <h3>
          10. What are some of the applications of trees in computer science?
        </h3>
        <ol className="answer-options" type="a">
          <li>
            File systems: Trees are used to represent the hierarchical structure
            of file systems.
          </li>
          <li>
            Syntax trees: Trees are used to represent the structure of
            expressions in programming languages.
          </li>
          <li>
            Decision trees: Trees are used to represent decision-making
            processes.
          </li>
          <li>
            Routing tables: Trees are used to represent routing tables in
            computer networks
          </li>
          <li>All of the above</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">e</option>
          </select>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Tree;
