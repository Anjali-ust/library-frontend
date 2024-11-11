import React, { useState } from 'react';
import { Link,Outlet } from "react-router-dom";
import { FaSearch, FaAngleDown, FaBook, FaUser } from "react-icons/fa";

export default function NavigationComponent() {
    const [showBookOptions, setShowBookOptions] = useState(false);
    const [showAuthorOptions, setShowAuthorOptions] = useState(false);

    const toggleBookOptions = () => setShowBookOptions(!showBookOptions);
    const toggleAuthorOptions = () => setShowAuthorOptions(!showAuthorOptions);

    const navbarStyle = {
        zIndex :'1',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#333',
        height: '80px',
        padding: '0 20px',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        width: '100%',
    };

    const navStyle = {
        display: 'flex',
        listStyleType: 'none',
        margin: '0 50px',
        padding: 0,
    };

    const navLinkStyle = {
        color: 'gold',
        textDecoration: 'none',
        padding: '10px 15px',
    };

    const searchStyle = {
        display: 'flex',
        alignItems: 'center',
        marginRight: '200px',
    };

    const inputStyle = {
        padding: '10px',
        border: 'none',
        borderRadius: '4px 0 0 4px',
    };

    const buttonStyle = {
        padding: '10px',
        border: 'none',
        backgroundColor: '#555',
        color: 'gold',
        borderRadius: '0 4px 4px 0',
        cursor: 'pointer',
    };

    const logoStyle = {
        height: '40px',
        marginRight: '0px',
    };

    const headingStyle = {
        color: 'gold',
        marginRight: '200px',
        fontSize: '40px',
    };

    const sidebarStyle = {
        position: 'fixed',
        top: '80px',
        left: '0',
        width: '200px',
        backgroundColor: '#222',
        color: 'gold',
        padding: '20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    };

    const dropdownStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        padding: '10px',
        fontWeight: 'bold',
        fontSize: '18px',
        color: 'gold',
        borderBottom: '1px solid #555',
    };

    const dropdownContentStyle = {
        listStyleType: 'none',
        paddingLeft: '20px',
        marginTop: '10px',
        color: 'gold',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    };

    const dropdownItemStyle = {
        padding: '8px 0',
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: '16px',
        color: 'lightgray',
    };

    return (
        <>
                <nav style={navbarStyle}>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/5833/5833290.png"
                    alt="logo"
                    style={logoStyle}
                />
                <h2 style={headingStyle}>LibraryNest</h2>
                <div style={searchStyle}>
                    <input type="text" placeholder="Search" style={inputStyle} />
                    <button style={buttonStyle}>
                        <FaSearch />
                    </button>
                </div>
                <ul style={navStyle}>
                    <li style={navLinkStyle}>Home</li>
                    <li style={navLinkStyle}>About</li>
                    <li style={navLinkStyle}>Contact</li>
                </ul>
            </nav>
           <Outlet></Outlet>

            {/* Sidebar Navigation */}
            <div style={sidebarStyle}>
                <div style={dropdownStyle} onClick={toggleBookOptions}>
                    <span><FaBook /> Book</span>
                    <FaAngleDown />
                </div>
                {showBookOptions && (
                    <ul style={dropdownContentStyle}>
                         <li >
                            <Link to="/book-add" 
                           style={{color:'lightgray',marginLeft:'2px',textDecoration:'none',
                            textAlign:'left'
                           }}>
                            Book Add</Link>
                        </li>
                        <li>
                            <Link to="/book-list" 
                           style={{color:'lightgray',marginLeft:'2px',textDecoration:'none',
                            textAlign:'left'
                           }}>
                            Book List</Link>
                        </li>
                    </ul>
                )}

                <div style={dropdownStyle} onClick={toggleAuthorOptions}>
                    <span><FaUser /> Author</span>
                    <FaAngleDown />
                </div>
                {showAuthorOptions && (
                    <ul style={dropdownContentStyle}>
                        <li style={dropdownItemStyle}>Add Author</li>
                        <li style={dropdownItemStyle}>Delete Author</li>
                        <li style={dropdownItemStyle}>Edit Author</li>
                        <li style={dropdownItemStyle}>View Author</li>
                    </ul>
                )}
            </div>
        </>
    );
}
