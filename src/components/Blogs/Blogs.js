import { Row, Col, Card } from 'antd';
import React from 'react';
import './Blogs'

const Blogs = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <h1>What is Context API ?</h1>
                    <p>Ans: The React-Context-API is a way for a React Application to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent and so on. Context is also touted as an easier, lighter approach to state management using redux.</p>
                </Card>
                <Card>
                    <h1>What is Semantic Tag ?</h1>
                    <p>Ans: Semantic HTML tags provide information about then contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser an some type of coding language.</p>
                </Card>
                <Card>
                    <h1>Difference between Inline block vs Inline element.</h1>
                    <p>Ans: Inline element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height. Inline-block It's formatted just like the inline element, where it doesn't start on a new line. But you can set width and height values.</p>
                </Card>
            </Col>
        </Row>
    );
};

export default Blogs;