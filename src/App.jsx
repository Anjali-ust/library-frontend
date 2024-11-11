import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome';
import HomePage from './components/HomePage';
import NavigationComponent from './components/NavigationComponent';
import BookList from './components/Book/BookList';
import BookView from './components/Book/BookView';
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import BookAdd from './components/Book/BookAdd';
function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Route without NavigationComponent */}
        <Route path="/" element={<Welcome />} />

        {/* Grouped Routes with NavigationComponent */}
        <Route element={<WithNav />}>
          <Route path="/homes" element={<HomePage />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/book-add" element={<BookAdd />} />
          <Route path="/book-view/:bid" element={<BookView />} />
        </Route>
     
      </Routes>
    </BrowserRouter>
    </>
  );
}

// Component to wrap routes with NavigationComponent
function WithNav() {
  return (
    <>
      <NavigationComponent />
    
    </>
  );
}
export default App;
