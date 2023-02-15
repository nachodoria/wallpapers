import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./App.css"
import ImageSlider from './Slider';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Detailed =()=> {
    const { state } = useLocation(); 

    const handlePaypalCheckout = (p, n) => {
        const price = p;
        const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=ignaciodoria01@gmail.com&currency_code=USD&amount=${price}&item_name=${n}`;
    
        window.open(paypalUrl, '_blank');
      };
    const containerStyles = {
        width: "100%",
        height: "50vh",
        margin: "40px",
      };
      const slides = [
        { url: state.img1 },
        { url: state.img2 },
    
      ];
    return (
        <motion.div className='detail'
        initial={{opacity:0}}
        animate={{
        opacity:1 }}
        transition={{ delay: 0.2 }}
        >
            <Link to ="/">
            <div className='detail-arrow-back'>

            </div>
            </Link>
            <div className='detail-container'>
                <div className='detail-carousel' style={containerStyles}>
                <ImageSlider slides={slides}/>
                </div>
                <div className="detail-text">
                    <div className='detail-title'>
                        <h1>{state.name}</h1>
                    </div>
                    <div className='detail-buy'>
                        <h1>Included for Phone and Desktop</h1>
                        <button onClick={() => handlePaypalCheckout(state.price, state.name)} id="detailbuttonpay" className='buttonpay'><span>Buy now</span></button>
                        
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Detailed;


