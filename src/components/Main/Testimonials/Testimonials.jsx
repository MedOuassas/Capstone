import React from "react";
import { AppWrap } from "../../../wrapper";
import { images } from "../../../constants";
import './Testimonials.css';
import { AiFillStar } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';
// import { pulse } from 'react-animations'; 

// const Pulse = styled.div`animation: 5s ${keyframes`${pulse}`} infinite`;

const reviews = [
    {image: images.iqsf, name: "Veronica", reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {image: images.sajal, name: "Sarah", reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {image: images.ramsha, name: "Fiona", reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {image: images.mawra, name: "Debbie", reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
]

const ReviewCard = ({props}) => {
        return (
             <div className="app__testimonials-review">
               <div className="app__testimonials-name-image">
                <img className="app__testimonial-review-image" src={props.image} alt={props.name} />
                 <h6 className="app__testimonials-review-name">{props.name}</h6>
               </div>
               <div className="app__testimonials-stars">
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
                    <AiFillStar className="app__testimonials-review-stars-icon"/>
               </div>
               <p className="app__testimonials-review-text">{props.reviewText}</p>
             </div>
            );
}
const Testimonials = () => {
    return (
        <div className="app__testimonials-content">
            <h1 className="app__testimonals-title">Testimonials</h1>
            {/* <ReviewCard /> */}
            <div className="app__testimonial-review-card">
                {
                    reviews.map((review) => {
                            return (
                                <ReviewCard key={review.name} props={review} />
                            );
                        })
                }
            </div>
        </div>
    );
}

export default AppWrap(Testimonials, 'testimonials-section', 'app__testimonials');