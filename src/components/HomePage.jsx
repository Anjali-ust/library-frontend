import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function HomePage() {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Welcome to books";
    
    useEffect(() => {
        let index = 0;
        
        const typeCharacter = () => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
               } else {
                clearInterval(interval);
               }
        };

        const interval = setInterval(typeCharacter, 50); // Adjust the speed here (100ms)
        
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    
    const welcomeText = {
        color: 'black',
        fontSize : '50px'
    };
    return (
        <>
            <div className="container" style={welcomeText}>
                <h2>{displayedText}</h2>
            </div>
          
        </>
    );
}   