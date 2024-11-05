import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
export default function BookList() {
  const bookListContainer = {
  //  marginTop: "1px", // Pushes the content below the fixed top navbar
  //  marginLeft: "1px", // Adjust based on sidebar width
    padding: "0px",
    // fontSize: "50px",
   // margin: "20px",
    marginRight:"600px",
    marginBottom: "0px",
  };
  const baseUrl =
    "http://localhost:9090/library/book/getAllBooks";
  const [allBooks, setAllBooks] = useState([
  ]);
    useEffect(() => {
      fetch(baseUrl) // Replace with your actual backend endpoint
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch books");
          }
          return response.json();
        })
        .then((data) => setAllBooks([...data]))
        .catch((error) =>
          console.error("There was an error fetching the books!", error)
        );
    }, []);

  let mappedBooks = allBooks.map((eachBook) => (
    <tr key={eachBook.bookId}>
      <td>{eachBook.bookTitle}</td>
      <td>{eachBook.bookPrice}</td>
      <td>{eachBook.bookPublished}</td>
      <td>
        <button
          className="btn btn-info btn-sm me-2"
          onClick={() => alert(`Viewing book ID: ${book.id}`)}
        >
          <FaEye />
        </button>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => alert(`Editing book ID: ${book.id}`)}
        >
          <FaEdit />
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(book.id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <div style={bookListContainer}>
        {/* <span className="badge bg-warning">List of books</span> */}
        <h2
          className="text text-dark"
          style={{
           // width: "100%",
          // width: "1000px",
        //    marginLeft:"1px",
           marginRight:"50px",
           fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
            
          }}
        >
          Book List
        </h2>
        <table
          className="table table-bordered table-hover"
          style={{
            // width: "100%",
            width: "1000px",
            //height:"100px",
            marginLeft: "200px",
            marginTop: "10px",
            fontFamily:"cursive"
          }}
        >
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Published date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-warning">{mappedBooks}</tbody>
        </table>
      </div>
      <div>
       
      </div>
    </>
  );
}
