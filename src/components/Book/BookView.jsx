import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookView(){
    const [allBooks,setAllBooks] = useState("");
    const [allAuthors,setAllAuthors] = useState("");
    const bookUrl = "http://localhost:9090/library/book/getBookById";
    const authorUrl = "http://localhost:9092/library/author/getAuthorById";
    let {bid} = useParams();
    useEffect(() => {
        // console.log(bid);
        fetch(`${bookUrl}/${bid}`)
            .then((res) => res.json())
            .then((data) => {
                setAllBooks(data);
            })
            .catch((error) => console.error("Error fetching book data:", error));
            fetch(`${authorUrl}/${allBooks.bookAuthorId}`)
            .then((res) => res.json())
            .then((data) => {
                setAllAuthors(data);
            })
            .catch((error) => console.error("Error fetching book data:", error));
    }, [bid]);  
//    console.log(bid);

    return(<>
    <div>
 
      <div className="col-sm-12 col-md-6 col-lg-3" key={allBooks.bookId}
       style={{marginLeft:"400px",marginTop:"150px"}}
      >
          <div className="card m-1">
            <img className="" src={allBooks.bookImageUrl}/>
            <div className="card-title">
              <h5>{allBooks.bookTitle}</h5>
            </div>
            <div className="card-text">
              <p>Book ID: {allBooks.bookId}</p>
            </div>
            <div className="card-text">
              <p>Book Price: {allBooks.bookPrice}</p>
            </div>
            <div className="card-text">
              <p>Book Published date: {allBooks.bookPublished}</p>
            </div>
            <div className="card-text">
              <p>Book Author name: {allAuthors.authorName}</p>
            </div>
          </div>
        </div>
      </div>
    </>);
}