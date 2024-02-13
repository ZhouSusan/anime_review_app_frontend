import { useEffect, useRef } from "react";
import api from '../../assets/AnimeService';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({getAnimeData, anime, reviews, setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const animeId = params.animeId;

    useEffect(()=>{
        getAnimeData(animeId);
    },[]);

    const addReview = async(e) => {
        e.preventDefault();
        const rev = revText.current; 

        try {
            const response = await api.post("/reviews", {reviewBody:rev.value, imdbId:animeId});

            const updatedReviews= [...reviews, {body: rev.value}];
            rev.value = "";
            setReviews(updatedReviews);
        } 
        catch(err) 
        {
            console.error(err);
        }

    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Reviews</h3>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={anime?.poster} alt=""  width="100%" height="100%" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText={"Write a review"}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                    reviews?.map((review) => {
                        return(
                            <>
                                <Row>
                                    <Col>{review.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews;