import "tachyons";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="body">
      <h2>
        "Data Structure" is the core of software engineering. It is the process
        to organize the unstructured data in a structured format for the ease of
        access. Data structures are useful in{" "}
        <u>database management, operating system, graphics, data science</u> and
        also in many other cases.
      </h2>
      <h3>Data structures are of two types:</h3>
      <ul>
        <li>Linear data structure.</li>
        <li>Non linear data structure.</li>
      </ul>
      <h3>
        *Below two flowcharts for of all types of data structures and their use
        cases are given for a better understanding.
      </h3>
      <br></br>
      <div className="ImageContainer">
        <img
          src="https://miro.medium.com/v2/resize:fit:851/1*ZIGq3Xit78261gDW-3bheQ.png"
          width="100%" height="400px"
          alt=""
          style={{left:"0"}}
        ></img>
      </div>
      <h3>* Below some important questions are provided for study reference...</h3>
      <h2>Q. What are the objectives of studying data structures? </h2>
      <ul>
        <li>
          To identify and create useful mathematical entities and operations to
          determine what classes of problems can be solved using these entities
          and operations
        </li>
        <li>
          To determine the representation of these abstract entities and to
          implement the abstract operations on these concrete representation
        </li>
      </ul>
      <h2>Q. Define sorting</h2>
      <p>
        Sorting arranges the numerical and alphabetical data present in a list
        in a specific order or sequence. There are a number of sorting
        techniques available. The algorithms can be chosen based on the
        following factors – Size of the data structure – Algorithm efficiency –
        Programmer’s knowledge of the technique.
      </p>
      <h2>Q. Mention the types of sorting</h2>
      <ul>
        <li>Internal sorting</li>
        <li>External sorting</li>
      </ul>
      <h2>Q. What do you mean by internal and external sorting?</h2>
      <p>
        An <b>internal sort</b> is any data sorting process that takes place
        entirely within the main memory of a computer. This is possible whenever
        the data to be sorted is small enough to all be held in the main memory
      </p>
      <p>
        <b>External sorting</b> is a term for a class of sorting algorithms that
        can handle massive amounts of data. External sorting is required when
        the data being sorted do not fit into the main memory of a computing
        device (usually RAM) and instead they must reside in the slower external
        memory (usually a hard drive)
      </p>
      <h2>Q. Define hashing function</h2>
      <p>
        A hashing function is a key-to-transformation, which acts upon a given
        key to compute the relative position of the key in an array. A simple
        hash function HASH(KEY_Value)= (KEY_Value)mod(Table-size)
      </p>
      <h2>Q. What is open addressing?</h2>
      <p>
        Open addressing is also called closed hashing, which is an alternative
        to resolve the collisions with linked lists. In this hashing system, if
        a collision occurs, alternative cells are tired until an empty cell is
        found. There are three strategies in open addressing:{" "}
      </p>
      <ul>
        <li>Linear probing</li>
        <li>Quadratic probing</li>
        <li>Double hashing</li>
      </ul>
      <h2>Q. What are the collision resolution methods?</h2>
      <p>The following are the collision resolution methods</p>
      <ul>
        <li>Separate chaining</li>
        <li>Open addressing</li>
        <li>Multiple hashing</li>
      </ul>
      <h2>Q. Define Hashing.</h2>
      <p>
        Hashing is the transformation of string of characters into a usually
        shorter fixed length value or key that represents the original string.
        Hashing is used to index and retrieve items in a database because it is
        faster to find the item using the short hashed key than to find it using
        the original value.
      </p>
      <h2>Q. What do you mean by hash table?</h2>
      <p>
        The hash table data structure is merely an array of some fixed size,
        containing the keys. A key is a string with an associated value. Each
        key is mapped into some number in the range 0 to tablesize-1 and placed
        in the appropriate cell.
      </p>
      <h2>Q. What do you mean by hash function?</h2>
      <p>
        A hash function is a key to address transformation which acts upon a
        given key to compute the relative position of the key in an array. The
        choice of hash function should be simple and it must distribute the data
        evenly. A simple hash function is hash_key=key mod tablesize.
      </p>
      <h2>Q. Write the importance of hashing.</h2>
      <ul>
        <li> Maps key with the corresponding value using hash function.</li>
        <li>
          {" "}
          Hash tables support the efficient addition of new entries and the time
          spent on searching for the required data is independent of the number
          of items stored.
        </li>
      </ul>
      <h2>Q. What do you mean by collision in hashing?</h2>
      <p>
        When an element is inserted, it hashes to the same value as an already
        inserted element, and then it produces collision.
      </p>
      <h2>Q. What do you mean by separate chaining?</h2>
      <p>
        Separate chaining is a collision resolution technique to keep the list
        of all elements that hash to the same value. This is called separate
        chaining because each hash table element is a separate chain (linked
        list). Each linked list contains all the elements whose keys hash to the
        same index
      </p>
      <h2>Q. What do you mean by open addressing?</h2>
      <p>
        Open addressing is a collision resolving strategy in which, if collision
        occurs alternative cells are tried until an empty cell is found. The
        cells h0(x), h1(x), h2(x),…. are tried in succession, where
        hi(x)=(Hash(x)+F(i))mod Tablesize with F(0)=0. The function F is the
        collision resolution strategy.
      </p>
      </div>
    </div>
  );
}
export default App;
