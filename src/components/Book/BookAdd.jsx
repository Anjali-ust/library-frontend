import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export default function BookAdd() {
    const [bookData,setBookData] = useState({
        bookId:"",
        bookTitle : "",
        bookPrice :"",
        bookPublished :"",
        bookImageUrl :"",
        bookAuthorId:""
       
    });
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(bookData);
  }
  return (
    <>
      <div className="container m-5">
        <div className="card">
          <form action="" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="card-header bg-dark text-light">
              <h4>Enter the details of the book to be added</h4>
            </div>
            <div className="form-control-group m-2">
              <label htmlFor="bId" className="form-label text text-dark">
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
              <label htmlFor="bTitle" className="form-label text text-dark">
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
              <label htmlFor="bPrice" className="form-label text text-dark">
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
              <label htmlFor="bPublished" className="form-label text text-dark">
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
              <label htmlFor="bImageUrl" className="form-label text text-dark">
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
