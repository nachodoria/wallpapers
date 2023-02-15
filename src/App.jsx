import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'



const App = () => {
  const handlePaypalCheckout = (p, n) => {
    const price = p;
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=ignaciodoria01@gmail.com&currency_code=USD&amount=${price}&item_name=${n}`;

    window.open(paypalUrl, '_blank');
  };


  const navigate = useNavigate();

  const goDetail = (name, price, img1, img2) => {
    navigate("/detail",
      {
        state: {
          name: name,
          price: price,
          img1: img1,
          img2: img2,

        }
      }

    )
  }


  return (
    <motion.div className="App"
    initial={{opacity:0}}
    animate={{
    opacity:1 }}
    transition={{ delay: 0.2 }}>
      <div className='navbar-container'>
        <div className='navbar'>
          <h1>Ignacio Doria's Wallpapers</h1>
          <button onClick={() => window.location = 'mailto:ignaciodoriaoberman@gmail.com'} className='btncontact'><span>Contact me </span></button >

        </div>
      </div>
      <div className='store'>


        <motion.div className='item'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.3}}>
          <div className='iteminfo'>
            <div className='itemdetail'>
              <h1>
                Wavy
              </h1>
              <p>
                Wavy is a mix of art transformed into elements.
              </p>
              <h2>
                Earthly - Icy - Fire - Air - Darkness - SPE
              </h2>
            </div>
            <div className='itembot'>
              <div className='itembutton'>
                <button onClick={() => handlePaypalCheckout('3.99', "Wavy")} className='buttonpay'><span>Buy Now</span></button>
                <button onClick={() => { goDetail("Wavy", "3.99", "src//detail/wavy/phone.png", "src//detail/wavy/desktop.png") }} className='buttonlearn'><span>Learn More</span></button>

              </div>
              <h1>3.99$</h1>
            </div>
          </div>
          <div className='itemimg-wavy'>
          </div>
        </motion.div>

        <motion.div className='item'
        initial={{opacity:0}}
        whileInView={{opacity:1}} style={{ flexDirection: "row-reverse" }}>
          <div className='iteminfo'>
            <div className='itemdetail' style={{ alignItems: "flex-end", textAlign: "right" }}>
              <h1>
                Abstract
              </h1>
              <p>
                Abstract is based on the different personalities that a person can have during life.
              </p>
              <h2>Cocky - Humble - Commander - Realistic -
                MVP - SPE</h2>
            </div>
            <div className='itembot' style={{ flexDirection: "row-reverse" }}>
              <div className='itembutton'>
                <button onClick={() => handlePaypalCheckout('3.99', "Abstract")} className='buttonpay'><span>Buy Now</span></button>
                <button onClick={() => { goDetail("Abstract", "3.99", "src//detail/abstract/phone.png", "src//detail/abstract/desktop.png") }} className='buttonlearn'><span>Learn More</span></button>

              </div>
              <h1>3.99$</h1>
            </div>
          </div>
          <div className='itemimg-abstract'>

          </div>
        </motion.div>

        <motion.div className='item'
        initial={{opacity:0}}
        whileInView={{opacity:1}}>
          <div className='iteminfo'>
            <div className='itemdetail'>
              <h1>
                Sonar
              </h1>
              <p>
                Sonar is a way to express a soul and the way it works.
              </p>
              <h2>
                Forest - Water - Blood - Darkness - Cyber
              </h2>
            </div>
            <div className='itembot'>
              <div className='itembutton'>
                <button onClick={() => handlePaypalCheckout('2.99', "Sonar")} className='buttonpay'><span>Buy Now</span></button>
                <button onClick={() => { goDetail("Sonar", "2.99", "src//detail/sonar/phone.png", "src//detail/sonar/desktop.png") }} className='buttonlearn'><span>Learn More</span></button>

              </div>
              <h1>2.99$</h1>
            </div>
          </div>
          <div className='itemimg-sonar'>

          </div>
        </motion.div>

        <motion.div className='item'
        initial={{opacity:0}}
        whileInView={{opacity:1}} style={{ flexDirection: "row-reverse" }}>
          <div className='iteminfo'>
            <div className='itemdetail' style={{ alignItems: "flex-end", textAlign: "right" }}>
              <h1>
                A Rush of blood
                to the Head
              </h1>
              <p>
                This special edition was made with a lot of love to Coldplay, this album made me part of who I am today.
              </p>
              <h2>A Rush of Blood to the Head</h2>
            </div>
            <div className='itembot' style={{ flexDirection: "row-reverse" }}>
              <div className='itembutton' >
                <button onClick={() => handlePaypalCheckout('4.99', "Coldplay")} className='buttonpay'><span>Buy Now</span></button>
                <button onClick={() => { goDetail("A Rush of Blood to the Head", "4.99", "src//detail/arobtth/phone.png", "src//detail/arobtth/desktop.png") }} className='buttonlearn'><span>Learn More</span></button>

              </div>
              <h1>4.99$</h1>
            </div>
          </div>
          <div className='itemimg-coldplay'>

          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default App
