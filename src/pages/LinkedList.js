import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
function LinkedList() {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="body">
      <h2>
        Linked list is a linear data structure while storing data but behaves
        like a non linear data structure while fetching data.
      </h2>
      <h3>
        Linked list is a sequence of nodes connected with each other. There are
        two fields in the linked list - one to store the data and another to
        store the address of the next node. The address stored in last node is
        set to be NULL and the first node is called "Head node".
      </h3>
      <img className="CourseImage" src="https://miro.medium.com/v2/resize:fit:1230/1*iMYmkYDCSrXXdwpbqm-ekA.jpeg" width="700px" height="400px"alt="" />
      <p>
        * It's time for a quick revision of your knowledge on linked-list data
        structure. Click on the answer box to see the correct answer of the
        questions.
      </p>
      <div className="PracticeSection">
        <h1>Practice Section</h1>
        <hr></hr>
        <h3>
          1. Which of the following is the time complexity of inserting an
          element at the beginning of a singly linked list?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="1">O(1)</option>
          </select>
        </div>
        <h3>
          2. Which of the following is the time complexity of searching for an
          element in a singly linked list?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">O(n)</option>
          </select>
        </div>
        <h3>
          3. Which of the following is the time complexity of deleting an
          element from a singly linked list?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">O(n)</option>
          </select>
        </div>
        <h3>
          4. Which of the following is the time complexity of reversing a singly
          linked list?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">O(n)</option>
          </select>
        </div>
        <h3>
          5. What is the difference between a singly linked list and a doubly
          linked list?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              A singly linked list has one pointer per node, while a doubly
              linked list has two pointers per node.
            </option>
          </select>
        </div>
        <h3>6. What is a circular singly linked list?</h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              A circular singly linked list is a singly linked list where the
              last node points back to the first node.
            </option>
          </select>
        </div>
        <h3>7. What is a doubly linked list with a sentinel node?</h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              {" "}
              A doubly linked list with a sentinel node is a doubly linked list
              with an extra node at the beginning and end of the list.
            </option>
          </select>
        </div>
        <h3>8. What is a doubly linked list with cycle detection?</h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              A doubly linked list with cycle detection is a doubly linked list
              that can detect if there is a cycle in the list.
            </option>
          </select>
        </div>
        <h3>
          9. What is the difference between merging and sorting linked lists?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              {" "}
              Merging two linked lists is the process of combining the two lists
              into a single list
            </option>
          </select>
        </div>
        <h3>10. What are some applications of linked lists?</h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              Linked lists are used to implement stacks and queues; undo/redo
              functionality; represent hierarchical relationships, such as file
              systems and organizational structures and also to represent
              graphs.
            </option>
          </select>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LinkedList;
