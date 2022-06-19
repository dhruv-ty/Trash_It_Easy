import React from 'react'
import Confetti from 'react-confetti'
//import useWindowSize from 'react-use/lib/useWindowSize'
import cup from '../Images/cup.png'

const Final_score = ({fscore}) => {
    //const { width, height } = useWindowSize()
  return (
    <>
     <Confetti
      width={600}
      height={700}
    />
    <div className='final'>
     <img src={cup} width='200' style={{position: 'relative',bottom: '120px'}}></img> 
     <div style={{position: 'relative',bottom: '100px'}}>Congratulations ! You got  {fscore}/5</div>    
     <button  className='nxt'>Play Again</button>
    </div>
    
    </>
    
  )
}

export default Final_score