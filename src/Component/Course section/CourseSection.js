import React from 'react';
import './courseSection.css';
import Button from 'react-bootstrap/Button';



// or less ideally
import { Card, Container, } from 'react-bootstrap';
import Course from '../Courses/Course';
import CartSection from '../CartSection/CartSection';

const CourseSection = (props) => {
    return (
        <Container fluid='md'>
        <div className='courseSection'>
             <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={props.course.img} className='course-img'/>
                <Card.Body>
                    <Card.Title>{props.course.name}</Card.Title>
                    <Card.Text>
                        Price : ${props.course.price}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>props.handleProduct(props.course)}>Purchase</Button>
                </Card.Body>
             </Card>
            
        </div>
        </Container>
    );
};

export default CourseSection;