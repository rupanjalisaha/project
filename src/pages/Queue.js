import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
function Queue() {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="body">
      <h2>
        Queue is a linear data structure that follows FIFO(First In First Out)
        mechanism to store, access and retrieve data. It is used in BFS(Breadth
        First Search) algorithm of graph. Pop, push, top/peek, isFull and
        isEmpty operations can be performed on stack. Dequeue(Double ended
        queue) is another type of queue where elements can be inserted from the
        front side as well as back side using push_back and pop_back.
      </h2>
      <img className="CourseImage" src="https://media.geeksforgeeks.org/wp-content/uploads/20220805131014/fifo.png" width="700px" height="400px"alt="" />
      <h3>* Below some important question answers are given for study...</h3>
      <h2>Q. Define a priority queue</h2>
      <p>
        Priority queue is a collection of elements, each containing a key
        referred as the priority for that element. Elements can be inserted in
        any order (i.e., of alternating priority), but are arranged in order of
        their priority value in the queue. The elements are deleted from the
        queue in the order of their priority (i.e., the elements with the
        highest priority is deleted first). The elements with the same priority
        are given equal importance and processed accordingly.
      </p>
      <h2>Q. State the difference between queues and linked lists.</h2>
      <p>
        The difference between queues and linked lists is that insertions and
        deletions may occur anywhere in the linked list, but in queues
        insertions can be made only in the rear end and deletions can be made
        only in the front end.
      </p>
      <h2>Q. Define a Deque.</h2>
      <p>
        Deque (Double-Ended Queue) is another form of a queue in which
        insertions and deletions are made at both the front and rear ends of the
        queue. There are two variations of a deque, namely, input restricted
        deque and output restricted deque. The input restricted deque allows
        insertion at one end (it can be either front or rear) only. The output
        restricted deque allows deletion at one end (it can be either front or
        rear)
      </p>
      <h2>Q. What is the need for Priority queue?</h2>
      <p>
        In a multiuser environment, the operating system scheduler must decide
        which of the several processes to run only for a fixed period of time.
        One algorithm uses queue. Jobs are initially placed at the end of the
        queue. The scheduler will repeatedly take the first job on the queue,
        run it until either it finishes or its time limit is up and place it at
        the end of the queue if it does not finish. This strategy is not
        appropriate, because very short jobs will soon to take a long time
        because of the wait involved in the run.
      </p>
      <p>
        Generally, it is important that short jobs finish as fast as possible,
        so these jobs should have precedence over jobs that have already been
        running. Further more, some jobs that are not short are still very
        important and should have precedence. This particular application seems
        to require a special kind of queue, known as priority queue. Priority
        queue is also called as Heap or Binary Heap
      </p>
      <p>
        * It's time for a quick revision of your knowledge on queue data
        structure. Click on the answer box to see the correct answer of the
        questions.
      </p>
        <br></br>
      <div className="PracticeSection">
        <h1>Practice Section</h1>
        <hr></hr>
        <h3>
          1. Which of the following best describes the FIFO (First In, First
          Out) principle?
        </h3>
        <ol className="answer-options" type="a">
          <li>
            The first element added to the data structure is the last one to be
            removed
          </li>
          <li>
            The element that has been in the data structure the longest is the
            next one to be removed
          </li>
          <li>
            The order in which elements are removed is the same as the order in
            which they were added
          </li>
          <li>
            The order in which elements are removed is the reverse of the order
            in which they were added
          </li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> c </option>
          </select>
        </div>
        <h3>
          2. Which of the following data structures is most commonly used to
          implement a queue?
        </h3>
        <ol className="answer-options" type="a">
          <li>Array</li>
          <li>Linked list</li>
          <li>Stack</li>
          <li>Heap</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> b </option>
          </select>
        </div>
        <h3>
          3. What is the time complexity of enqueueing an element into a queue?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(1)</li>
          <li>O(log n)</li>
          <li>O(n)</li>
          <li>O(n^2)</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> a </option>
          </select>
        </div>
        <h3>4. What is the time complexity of checking if a queue is empty?</h3>
        <ol className="answer-options" type="a">
          <li>O(1)</li>
          <li>O(log n)</li>
          <li>O(n)</li>
          <li>O(n^2)</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> a </option>
          </select>
        </div>
        <h3>
          5. What is the time complexity of dequeuing an element from a queue?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(1)</li>
          <li>O(log n)</li>
          <li>O(n)</li>
          <li>O(n^2)</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> a </option>
          </select>
        </div>
        <h3>
          6. What is the time complexity of getting the front element of a queue
          without removing it?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(1)</li>
          <li>O(log n)</li>
          <li>O(n)</li>
          <li>O(n^2)</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> a </option>
          </select>
        </div>
        <h3>
          7. What is the time complexity of getting the rear element of a queue
          without removing it?
        </h3>
        <ol className="answer-options" type="a">
          <li>O(1)</li>
          <li>O(log n)</li>
          <li>O(n)</li>
          <li>O(n^2)</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right"> a </option>
          </select>
        </div>
        <h3>8. Which of the following applications uses a queue?</h3>
        <ol className="answer-options" type="a">
          <li>Printing a document</li>
          <li>Scheduling tasks in an operating system</li>
          <li>Implementing a breadth-first search algorithm</li>
          <li>All of the above</li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">d</option>
          </select>
        </div>
        <h3>9. What is the difference between a queue and a dequeue?</h3>
        <ol className="answer-options" type="a">
          <li>
            A queue is a FIFO data structure, while a dequeue is a LIFO data
            structure
          </li>
          <li>
            A queue is a single-ended data structure, while a dequeue is a
            double-ended data structure
          </li>
          <li>
            A queue can only store integers, while a dequeue can store any type
            of data
          </li>
          <li>
            A queue is more efficient than a dequeue for enqueue and dequeue
            operations
          </li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">b</option>
          </select>
        </div>
        <h3>
          10. What is the difference between a queue and a priority queue?
        </h3>
        <ol className="answer-options" type="a">
          <li>
            A queue removes elements in the order they were added, while a
            priority queue removes elements based on their priority
          </li>
          <li>
            A queue is a FIFO data structure, while a priority queue is a LIFO
            data structure
          </li>
          <li>
            A queue is a single-ended data structure, while a priority queue is
            a double-ended data structure
          </li>
          <li>
            A queue is more efficient than a priority queue for enqueue and
            dequeue operations
          </li>
        </ol>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">a</option>
          </select>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Queue;
