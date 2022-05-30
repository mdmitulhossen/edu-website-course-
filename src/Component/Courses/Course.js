import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './course.css';

// or less ideally
import { Card, Container } from 'react-bootstrap';
import CourseSection from '../Course section/CourseSection';
import CartSection from '../CartSection/CartSection';

const Course = () => {
    const[cart,setCart]=useState([]);

    const handleProduct = (product)=>{
        const newCart=[...cart,product];
        setCart(newCart);

    }
    
    const course = [
        {name:'HTML',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",price:"10.99"},
        {name:'CSS',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",price:"5.99"},
        {name:'Bootstrap',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",price:"5.99"},
        {name:'SASS',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",price:"7.99"},
        {name:'React',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",price:"9.99"},
        {name:'Python',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",price:"10.99"},
        {name:'Javascrip',img:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",price:"20.99"},
        {name:'MySQL',img:"https://www.developer.com/wp-content/uploads/2021/10/MySQL-Database-Tutorials.png",price:"20.99"},
        {name:'C++',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",price:"8.99"},
        {name:'C',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",price:"7.99"},
        {name:'MongoBD',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",price:"4.99"},
        {name:'ExpressJS',img:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",price:"19.99"},
        {name:'NodeJS',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",price:"14.99"},
    
    ]
    return (
        <div className='courses'>
            <div className='course-component'>
                {
                     course.map((cr) => <CourseSection handleProduct={handleProduct} course={cr} key={cr.name}></CourseSection>)
                }
            </div>
            <div className='cart-component'>
                   <CartSection cart={cart}></CartSection>
            </div>
         
        </div>
    );
};

export default Course;