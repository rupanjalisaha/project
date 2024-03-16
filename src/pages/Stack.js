import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
function Stack() {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="body">
      <h2>
        Stack is a linear data structure that follows LIFO(Last In First Out)
        mechanism to store, access and retrieve data. It is used in DFS(Depth
        First Search) algorithm of graph. Pop, push, top/peek, isFull and
        isEmpty operations can be performed on stack.
      </h2>
      <img className="CourseImage" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Stack%20Article%20-%20Soni/working-of-stack.png" width="700px" height="400px"alt="" />
      <h3>* Below some important question answers are given for study...</h3>
      <h2>Q. List the applications of stacks</h2>
      <ul>
        <li>Towers of Hanoi</li>
        <li>Reversing a string</li>
        <li>Balanced parenthesis</li>
        <li>Recursion using stack</li>
        <li>Evaluation of arithmetic expressions</li>
      </ul>
      <h2>
        Q. Mention the advantages of representing stacks using linked lists than
        arrays.
      </h2>
      <ul>
        <li>
          It is not necessary to specify the number of elements to be stored in
          a stack during its declaration, since memory is allocated dynamically
          at run time when an element is added to the stack
        </li>
        <li> Insertions and deletions can be handled easily and efficiently</li>
        <li>
          Linked list representation of stacks can grow and shrink in size
          without wasting memory space, depending upon the insertion and
          deletion that occurs in the list
        </li>
        <li>
          Multiple stacks can be represented efficiently using a chain for each
          stack
        </li>
      </ul>
      <br></br>
      <p>
        * It's time for a quick revision of your knowledge on stack data
        structure. Click on the answer box to see the correct answer of the
        questions.
      </p>
      <div className="PracticeSection">
        <h1>Practice Section</h1>
        <hr></hr>
        <h3>
          1. Which data structure follows the LIFO (Last In, First Out)
          principle?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Stack</option>
          </select>
        </div>
        <h3>2. What is the basic operation of a stack?</h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Removing the last element added</option>
          </select>
        </div>
        <h3>
          3. What is the time complexity of pushing an element onto a stack?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Constant time (O(1))</option>
          </select>
        </div>
        <h3>
          4. What is the time complexity of popping an element from a stack?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Constant time (O(1))</option>
          </select>
        </div>
        <h3>
          5. What is the time complexity of peeking at the top element of a
          stack?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Constant time (O(1))</option>
          </select>
        </div>
        <h3>
          6. What is one of the applications of stacks in expression evaluation?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              Converting infix expressions to postfix expressions
            </option>
          </select>
        </div>
        <h3>7. What is the application of stacks in parenthesis checking?</h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              Checking whether a given expression is well-formed
            </option>
          </select>
        </div>
        <h3>8. What is the application of stacks in compiler design?</h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              Parsing expressions and statements; Generating code from a
              high-level programming language and Managing symbol tables and
              scopes
            </option>
          </select>
        </div>
        <h3>
          9. What is the application of stacks in backtracking algorithms?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              Trying different solutions to a problem and keeping track of the
              previous states; Unwinding the recursion stack to find a solution;
              Maintaining a history of visited states to avoid cycles
            </option>
          </select>
        </div>
        <h3>
          10. What is the application of stacks in implementing undo/redo
          functionality?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              Keeping track of the previous states of a document or application;
              Allowing users to undo or redo actions and Maintaining a history
              of changes made to a document or application
            </option>
          </select>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Stack;
