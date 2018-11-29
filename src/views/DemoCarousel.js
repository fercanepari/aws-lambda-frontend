import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';

export default class DemoCarousel extends Component {
    render() {
        return (
            <div>
                
            <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false}>
                <div>
                    <img src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg" alt="" />
                    <p className="legend">React</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg" alt=""  />
                    <p className="legend">Code</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" alt=""  />
                    <p className="legend">Axios</p>
                </div>
                <div>
                    <iframe title="vid_1" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
                </div>
            </Carousel>
            </div>
        );
    }
}
   
ReactDOM.render(<DemoCarousel />, document.getElementById('carousel'));