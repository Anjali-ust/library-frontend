import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function BookAdd() {
    const baseUrl = "http://localhost:9090/library/book/addBook";
    const authorUrl = "http://localhost:9091/library/author/getAllAuthors";
    const [allAuthors,setAllAuthors] = useState([]);
    let navigate = useNavigate();
    const [bookData,setBookData] = useState({
        bookId:"",
        bookTitle : "",
        bookPrice :"",
        bookPublished :"",
        bookImageUrl :"",
        bookAuthorId:""
       
    });

    useEffect(() => {
        fetch(authorUrl) // Replace with your actual backend endpoint
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch books");
            }
            return response.json();
          })
          .then((data) => setAllAuthors([...data]))
          .catch((error) =>
            console.error("There was an error fetching the books!", error)
          );
      }, []);
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(baseUrl,{method:'POST',body:JSON.stringify(bookData),headers:{'Content-type':'application/json'}})
    .then((res) => res.json())
    .then((data) => navigate("/book-list"));
    console.log(bookData);
  }
  return (
    <>
      <div className="container m-5" style={{margin:'30px',zIndex:"-1"}}>
        <div className="card" style={{marginLeft:'300px',width:'500px'}}>
          <form action="" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="card-header bg-dark text-light">
              <h4>Enter the details of the book to be added</h4>
            </div>
            <div className="form-control-group m-2">
              <label htmlFor="bId" className="form-label text text-dark"
              style={{marginRight:'420px',fontWeight:'bolder'}}
              >
                Book Id
              </label>
              <input
                type="text"
                id="bId"
                placeholder="Enter book Id"
                className="form-control"
                onChange={(e) => setBookData({...bookData,bookId:e.target.value})}
              />
            </div>
            <div className="form-control-group m-2">
              <label htmlFor="bTitle" className="form-label text text-dark"
              style={{marginRight:'390px',fontWeight:'bolder'}}
              >
                Book Name
              </label>
              <input
                type="text"
                id="bTitle"
                placeholder="Enter book name"
                className="form-control"
                onChange={(e) => {setBookData({...bookData,bookTitle:e.target.value});
            console.log(e)}}
              />
            </div>
            <div className="form-control-group m-2">
              <label htmlFor="bPrice" className="form-label text text-dark"
              style={{marginRight:'400px',fontWeight:'bolder'}}
              >
                Book Price
              </label>
              <input
                type="text"
                id="bPrice"
                placeholder="Enter price in dollars"
                className="form-control"
                onChange={(e) => setBookData({...bookData,bookPrice:e.target.value})}
              />
            </div>
            <div className="form-control-group m-2">
              <label htmlFor="bPublished" className="form-label text text-dark"
              style={{marginRight:'320px',fontWeight:'bolder'}}
              >
                Book Published date
              </label>
              <input
                type="date"
                id="bPublished"
                placeholder="Enter published date"
                className="form-control"
                onChange={(e) => setBookData({...bookData,bookPublished:e.target.value})}
              />
            </div>
            <div className="form-control-group m-2">
              <label htmlFor="bImageUrl" className="form-label text text-dark"
              style={{marginRight:'360px',fontWeight:'bolder'}}
              >
                Book Image Url
              </label>
              <input
                type="text"
                id="bImageUrl"
                placeholder="Image Url"
                className="form-control"
                onChange={(e) => setBookData({...bookData,bookImageUrl:e.target.value})}
              />
            </div>
            <div className="form-control-group m-2">
                  <label htmlFor="bAuthor" className="form-label"
                  style={{marginRight:'350px',fontWeight:'bolder'}}>
                    Author selection:
                  </label>
                  <select
                    className="form-control"
                    id="bAuthor"
                    onChange={(e) => 
                       setBookData({...bookData,bookAuthorId:e.target.value})}
                  >
                    <option value="">Select Author</option>
                    {allAuthors.map((author) => (
                  <option key={author.authorId} value={author.authorId}>
                    {author.authorName}
                  </option>
                ))}
                  </select>
                </div>
            <div className="card-footer bg-dark text-light">
              <button
                type="submit"
                style={{
                  padding: "0.75rem 2rem",
                  fontSize: "1rem",
                  color: "black",
                  backgroundColor: "white",
                  marginTop: "3px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "gold")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Add
              </button>
              <button
                type="reset"
                style={{
                  padding: "0.75rem 2rem",
                  fontSize: "1rem",
                  color: "black",
                  backgroundColor: "white",
                  marginLeft:"100px",
                  marginTop: "3px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "gold")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
