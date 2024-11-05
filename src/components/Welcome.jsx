import { useNavigate } from 'react-router-dom';

export default function Welcome() {
    let navigate = useNavigate();

    function handleButtonClick() {
        //console.log("Button clicked!");
        navigate("/homes");
    }

    return (
        <>
         <div>
          <div>
            <h1>LibraryNest</h1>
            <p style={{'fontSize':'1.2rem'}}>
                 Explore, catalog, and share your love of literature with LibraryNest! Our user-friendly platform allows you to easily add and manage your personal library of books and authors.
            </p>
            <button onClick={handleButtonClick}>Get started</button>
          </div>
         </div>
        </>
    );
}
