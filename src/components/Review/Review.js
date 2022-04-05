import { Avatar, Card, Col, Rate, Row } from 'antd';
import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReviews([]);
    return (
        <Row>
            {
                reviews.map(review =>
                    <Col sm={{ span: 24 }} md={{ span: 8 }} key={review.id}>
                        <Card>
                            <div>
                                <Avatar src={review.img} />
                                <span style={{ paddingLeft: '8px' }}>Name: {review.name}</span>
                            </div>
                            <Rate allowHalf defaultValue={2.5} />
                            <p>Comment: {review.comment}</p>
                        </Card>
                    </Col>)
            }
        </Row>
    );
};

export default Review;