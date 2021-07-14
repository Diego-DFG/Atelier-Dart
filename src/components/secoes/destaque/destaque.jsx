import React from "react";
import Carrossel from 'react-slick';

import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img02 from '../../../assets/img/img_21_w.jpeg';
import img03 from '../../../assets/img/img_19_w_h.jpg';
import img04 from '../../../assets/img/img_20_w_h.jpg';

import './_destaque.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "#333", height: "80px", width: "100px", 
            zIndex: '99999', textAlign: 'center', justifyContent: "center", alignItems: "center",
            marginRight: "1.6rem", borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "#333", height: "80px", width: "100px", 
            zIndex: '99999', textAlign: 'center', justifyContent: "center", alignItems: "center",
            marginLeft: "1.6rem", borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem" }}
      onClick={onClick}
    />
  );
}
  
 function DestaqueCarousel() {
   let settings = {
     dot: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
   }
    return(
      <div className='container-xxl carousel destaque'>
          <Carrossel {...settings}>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-img'>
                        <img className='img' src={img02} alt="" />
                    </div>
                    <div className='details'>
                        
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-img'>
                        <img className='img' src={img03} alt="" />
                    </div>
                    <div className='details'>
                        
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-img'>
                        <img className='img' src={img04} alt="" />
                    </div>
                    <div className='details'>
                        
                    </div>
                </div>
            </div>
        </Carrossel>
      </div>
    );
 }
 export default DestaqueCarousel;