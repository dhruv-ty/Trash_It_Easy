import React,{useState,useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './Quiz.css'
import { useNavigate } from "react-router-dom";

const qBank = [
    {
      question:
        "What is meant by the 3 R's ?",
      answers: [{Ans:"vinayak",isCor:true}, 
      {Ans:"dsds",isCor:false},
      {Ans:"def",isCor:false},
      {Ans:"abyu",isCor:false}]
    },
    {
      question:
        "How to keep environment clean?",
        answers: [{Ans:"vinayak",isCor:true}, 
        {Ans:"dsds",isCor:false},
        {Ans:"def",isCor:false},
        {Ans:"abyu",isCor:false}]
      },
];


const Quiz = () => {
    
    
    const [Ques, setQues] = useState(0);
    const [Prog, setProg] = useState(0);
    var value=0;
    const [Score, setScore] = useState(0);
    const navigate=useNavigate(); 
    const Chosen=(isCor)=>{
        setProg(Prog+50);
        if(Ques==1)
        value++;
        else
        setQues(Ques+1);
        
        if(isCor)
        setScore(Score+1);  
    }
   

    useEffect(() => {
      if(Prog==100){
    navigate('/quiz_final')
      }
    }, [Prog])

  return (
    <>
    <div className='qz'>
    <div id='Sc'>Score: {Score}</div>    
    <ProgressBar className='pbar'completed={Prog} width={400} bgColor='#5cad5c'/>
    <div className='ques'>{qBank[Ques].question}</div>
   {qBank[Ques].answers.map((answer)=>
   (
    <button onClick={()=>Chosen(answer.isCor)}>{answer.Ans} </button>
   ))} 
   

    </div>
    

    </>
    
  )
}

export default Quiz