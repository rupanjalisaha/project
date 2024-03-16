import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Sidebar from "../components/Sidebar";
function Array() {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="body">
      <h2>
        Array is a linear data structure with consecutive memory blocks. The
        array elements are easily accessed using indexing. There are many
        algorithms to search and sort elements in array data structure. Few
        important are - Linear search, Binary Search, Bubble sort, Insertion
        sort, Selection sort, Quick and Merge sorts, Count sort, radix sort
        algorithms etc.
      </h2>
      <img className="CourseImage" src="https://cdn.educba.com/academy/wp-content/uploads/2019/11/Arrays-in-data-structure.png" width="700px" height="400px"alt="" />
      <h3>
        * Below some important questions are provided for study reference...
      </h3>
      <h2>Q. Define bubble sort</h2>
      <p>
        Bubble sort is a simple sorting algorithm that works by repeatedly
        stepping through the list to be sorted, comparing each pair of adjacent
        items and swapping them if they are in the wrong order. The pass through
        the list is repeated until no swaps are needed, which indicates that the
        list is sorted. The algorithm gets its name from the way smaller
        elements "bubble" to the top of the list
      </p>
      <h2>Q. How the insertion sort is done with the array?</h2>
      <p>
        It sorts a list of elements by inserting each successive element in the
        previously sorted sublist. Consider an array to be sorted
        A[1],A[2],….A[n] a. Pass 1 : A[2] is compared with A[1] and placed them
        in sorted order. b. Pass 2 : A[3] is compared with both A[1] and A[2]
        and inserted at an appropriate place. This makes A[1], A[2],A[3] as a
        sorted sub array. c. Pass n-1 : A[n] is compared with each element in
        the sub array A[1],A[2],……A[n-1] and inserted at an appropriate
        position.
      </p>
      <h2>Q. What are the steps for selection sort?</h2>
      <ul>
        <li>The algorithm divides the input list into two parts: the sublist of items 
already sorted, which is built up from left to right at the front (left) of the 
list, and the sublist of items remaining to be sorted that occupy the rest of 
the list.</li>
<li>Initially, the sorted sublist is empty and the unsorted sublist is the entire input
list.</li>
<li>The algorithm proceeds by finding the smallest (or largest, depending on
sorting order) element in the unsorted sublist, exchanging it with the leftmost 
unsorted element (putting it in sorted order), and moving the sublist 
boundaries one element to the right.</li>
      </ul>
      <h2>Q. What is meant by shell sort?</h2>
      <p>Shell sort, also known as Shell sort or Shell's method, is an in-place comparison 
sort. It can either be seen as a generalization of sorting by exchange (bubble sort) or 
sorting by insertion (insertion sort).[1] The method starts by sorting elements far apart 
from each other and progressively reducing the gap between them. Starting with far 
apart elements can move some out-of-place elements into position faster than a simple 
nearest neighbor exchange. Donald Shell published the first version of this sort in 
1959. The running time of Shell sort is heavily dependent on the gap sequence it uses.</p>
<h2>Q. What are the steps in quick sort?</h2>
<h3>The steps are:</h3>
<ol type="a">
<li>Pick an element, called a pivot, from the list.</li>
<li>Reorder the list so that all elements with values less than the pivot come before 
the pivot, while all elements with values greater than the pivot come after it
(equal values can go either way). After this partitioning, the pivot is in its final 
position. This is called the partition operation.</li>
<li>Recursively apply the above steps to the sub-list of elements with smaller
values and separately to the sub-list of elements with greater values.</li>
</ol>
<h2>Q. Define radix sort</h2>
<p>Radix Sort is a clever and intuitive little sorting algorithm. Radix sort is a noncomparative integer sorting algorithm that sorts data with integer keys by grouping 
keys by the individual digits which share the same significant position and value. 
Radix Sort puts the elements in order by comparing the digits in 1's,10th and 100th place.</p>
<h2>Q. What is meant by linear search?</h2>
<p>Linear search or sequential search is a method for finding a particular value in a 
list that consists of checking every one of its elements, one at a time and in 
sequence, until the desired one is found.</p>
<h2>Q. What is binary search?</h2>
<p>For binary search, the array should be arranged in ascending or descending order.
In each step, the algorithm compares the search key value with the middle element of 
the array. If the key match, then a matching element has been found and its index, or 
position, is returned.</p>
<p>Otherwise, if the search key is less than the middle element, then the algorithm repeats 
its action on the sub-array to the left of the middle element or, if the search key is 
greater, on the sub-array to the right.</p>
<br></br>
      <p>
        * It's time for a quick revision of your knowledge on array data
        structure. Click on the answer box to see the correct answer of the
        questions.
      </p>
      <div className="PracticeSection">
        <h1>Practice Section</h1>
        <hr></hr>
        <h3>
          1. Which of the following is the correct way to declare an array of 10
          integers in C?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">int arr[10]</option>
          </select>
        </div>
        <h3>
          2. What is the time complexity of accessing an element in an array?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Constant time (O(1))</option>
          </select>
        </div>
        <h3>
          3. What is the time complexity of inserting an element into an
          unsorted array?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Constant time (O(1))</option>
          </select>
        </div>
        <h3>
          4. What is the time complexity of deleting an element from an unsorted
          array?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Linear time (O(n))</option>
          </select>
        </div>
        <h3>
          5. What is the time complexity of searching for an element in an
          unsorted array?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Linear time (O(n))</option>
          </select>
        </div>
        <h3>
          6. What is the time complexity of sorting an array using insertion
          sort?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Quadratic time (O(n^2))</option>
          </select>
        </div>
        <h3>
          7. What is the time complexity of sorting an array using merge sort?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">Divide-and-conquer time (O(n log n))</option>
          </select>
        </div>
        <h3>
          8. What is the time complexity of sorting an array using quicksort?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              Average case: Divide-and-conquer time (O(n log n)) Worst case:
              Quadratic time (O(n^2))
            </option>
          </select>
        </div>
        <h3>
          9. What is the difference between row-major and column-major order in
          multidimensional arrays?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              In row-major order, elements are stored contiguously in memory by
              rows. In column-major order, elements are stored contiguously in
              memory by columns.
            </option>
          </select>
        </div>
        <h3>
          10. What is the advantage of using a multidimensional array over using
          a one-dimensional array to represent a matrix?
        </h3>
        <div className="answer-list">
          <p></p>
          <select>
            <option value=""></option>
            <option value="right">
              Multidimensional arrays are more concise and easier to read when
              representing matrices. They also allow for direct access to
              elements using row and column indices.
            </option>
          </select>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Array;
