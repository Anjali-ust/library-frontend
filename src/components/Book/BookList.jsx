import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function BookList() {
    let navigate = useNavigate();
  const bookListContainer = {
   marginTop: "60px", // Pushes the content below the fixed top navbar
  //  marginLeft: "1px", // Adjust based on sidebar width
    padding: "0px",
    // fontSize: "50px",
   // margin: "20px",
    marginRight:"600px",
    marginBottom: "0px",
  };
  const baseUrl =
    "http://localhost:9090/library/book/getAllBooks";
 const deleteUrl = "http://localhost:9090/library/book/deleteBookById";
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
      <td>{eachBook.bookAuthorId == "" ? (
        <button className="btn btn-secondary text-dark">Map</button>
      ) : (
        eachBook.bookAuthorId
      )
    }</td>
      <td>
        <button
          className="btn btn-info btn-sm me-2"
          onClick={() => handleView(eachBook.bookId)}
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
          onClick={() => handleDelete(eachBook.bookId)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  ));

  function handleDelete(bookId){
    fetch(deleteUrl+"/"+bookId,{method:'DELETE',headers: {
        'Content-Type': 'application/json'}}).then((res) => res.text())
        .then((data)=>{
            //console.log(data);
            setAllBooks(allBooks.filter((book) => book.bookId != bookId));
        });
  }

  function handleView(bookId){
    navigate("/book-view/"+bookId);

  }
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
            marginTop: "50px",
            fontFamily:"cursive"
          }}
        >
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Published date</th>
              <th>Author Id</th>
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
