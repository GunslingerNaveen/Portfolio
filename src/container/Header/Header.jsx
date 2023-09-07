import React from 'react'
import { useState,useEffect } from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import {AppWrap,MotionWrap} from '../../wrapper'

const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {

  const [text, setText] = useState("");
  const fullText = "Naveen";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 400);
    return () => clearInterval(typing);
  }, []);

  return (
    <div  className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100, 0], opacity:[0,1]}}
      transition={{duration:1}}
      className='app__header-info'
      >
        <div className='app__headerbadge'>

          <div className='badge-cmp app__flex'>

            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello,I am</p>
              <h1 className='head-text'>{text}</h1>
            </div>

          </div>

          <div/>

          <div style ={{marginLeft:20}} className='tag-cmp app__flex'>
            <p className='p-text'> FullStack JavaScript Developer || React JS </p>
          </div>
          
        </div>
        <div/>
        <br></br>
          <div style ={{marginLeft:20}} className='tag-cmp app__flex'>
            <p className='p-text'>As an Electrical and Electronics Engineering graduate in 2019, I have gained experience in the automotive industry with diverse roles such as Technician and Quality inspector. </p>
        </div>
        <br></br>
          <div style ={{marginLeft:20}} className='tag-cmp app__flex'>
            <p className='p-text'>I recently acquired skills in MERN stack development and seeking entry-level opportunities in this field.
             I am enthusiastic, highly motivated, and eager to learn and grow professionally while contributing my knowledge and skills to a team. </p>
        </div>

        <br></br>
          <div style ={{marginLeft:20}} className='tag-cmp app__flex'>
            <p className='p-text'>Strong focus on Front-end development and a passion for creating visually appealing and user-friendly websites and web applications. </p>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ opacity:[0,1]}}
        transition={{duration:1,delayChildren:0.5}}
        className='app__header-img'
      >
        <img src={images.Imagenk} alt='profile'/>

        <motion.img whileInView={{ scale:[0,1]}}
        transition={{duration:1,ease:'easeInOut'}}
        src={images.circle}
        alt='profile_circle'
        className='overlay_circle'/>

      </motion.div>
         
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
         {[images.react,images.javascript,images.html].map((circle,index)=>(
           <div className='circle-cmp app__flex' key={`circle-${index}`}>
             <img src={circle} alt='circle'/>
           </div>
         ))}
      </motion.div>
    </div>
  )
}
export default AppWrap(
  MotionWrap(Header,'app__home'),
  'home',
  'app__whitebg'
);

