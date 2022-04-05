import { Avatar, Button, Card, Col, Image, Rate, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import './Home.css';


const imageUrl = 'https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg';
const Home = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useReviews([]);

    return (
        <Row>
            <Col sm={{ 'span': 24, }} md={{ 'span': 12 }}>
                <Image src={imageUrl} />
            </Col>
            <Col sm={{ 'span': 24, }} md={{ 'span': 12 }}>
                <div style={{ padding: '8px' }}>
                    <h1>PREMIUM PERFORMANCE, THINKPAD RELIABILITY</h1>
                    <p>There's a reason ThinkPad reliability is legendary and it starts with military-spec testing against extremes — our laptops more than endure the rigors of everyday life. Factor in the award-winning precision keyboard with its renowned red TrackPoint®, multitouch touchpad, ergonomic keys, and convenient multimedia buttons and we've got comfort covered too.</p>
                    <Button type='primary'>Live Demo</Button>
                </div>
            </Col>
            <Col span={24}>
                <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>Customer Review</h1>
            </Col>
            {/* <Col span={24} style={{ marginBottom: '1rem' }} /> */}
            {
                reviews.length > 0 ? reviews.slice(0, 3).map(review =>
                    <Col sm={{ span: 24 }} md={{ span: 8 }} key={review.id}>
                        <Card>
                            <div>
                                <Avatar src={review.img} />
                                <span style={{ paddingLeft: '8px' }}>Name: {review.name}</span>
                            </div>
                            <Rate allowHalf defaultValue={2.5} />
                            <p>Comment: {review.comment}</p>
                        </Card>
                    </Col>) : <></>
            }
            <Col span={24}>
                <center><Button onClick={() => navigate('/reviews')} type='primary'>See All Reviews</Button></center>
            </Col>
        </Row>
    );
};

export default Home;