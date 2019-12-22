import React from 'react';
import { Link } from 'react-router-dom';

 const Home = () => {
     return (
         <div className="container">
            <div className='homeWrap'>
                <p>The perfect news community made for everyone.</p>
                <Link to="/clients">See what’s new</Link>
            </div>
        </div>
     )
 }

 export default Home;
