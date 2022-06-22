import React,{useState,useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './Quiz.css'
import { useNavigate } from "react-router-dom";
import Final_score from './Final_score';

const qBank = [
    {
      question:
        "What is meant by the 3 R's ?",
      answers: [{Ans:"Reduce,Reuse,Recycle",isCor:true}, 
      {Ans:"Reduce,Reuse,Renovate",isCor:false},
      {Ans:"Reduce,Regenerate,Recycle",isCor:false},
      {Ans:"Refract,Recycle,React",isCor:false}]
    },
    {
      question:
        "How to keep environment clean ?",
        answers: [{Ans:"Exploit energy",isCor:false}, 
        {Ans:"Never Recycle products",isCor:false},
        {Ans:"Throw garbage on roads",isCor:false},
        {Ans:"Conserve Resources",isCor:true}]
      },
      {
        question:
          "The disposal of the screen is done by ?",
          answers: [{Ans:"Sedimentation",isCor:false}, 
          {Ans:"Flocculation",isCor:false},
          {Ans:"Filtration",isCor:false},
          {Ans:"Incineration",isCor:true}]
        },
        {
          question:
            "Sludge Bulking can be controlled by ?",
            answers: [{Ans:"Chlorination",isCor:true}, 
            {Ans:"Coagulation",isCor:false},
            {Ans:"Aeration",isCor:false},
            {Ans:"Dentrification",isCor:false}]
          },
          {
            question:
              "A facility for disposal of municipal waste is ?",
              answers: [{Ans:"Septic tank",isCor:false}, 
              {Ans:"Sanitary landfills",isCor:true},
              {Ans:"Dug Wells",isCor:false},
              {Ans:"Tandom Fills",isCor:false}]
            },
];




const Quiz = () => {
    
    
    const [Ques, setQues] = useState(0);
    const [Prog, setProg] = useState(0);
    const [value, setvalue] = useState(0);
    const [Score, setScore] = useState(0);
    const navigate=useNavigate(); 
    const Chosen=(isCor)=>{
        setProg(Prog+20);
        if(Ques==4)
        console.log("sds");
        else
        setQues(Ques+1);
        
        if(isCor)
        setScore(Score+1);  
    }
   

    useEffect(() => {
      if(Prog==100){
       setvalue(value+1); 
    //navigate('/quiz_final')

      }
    }, [Prog])

  return (
    <>
    {
    value==0 &&
    <div className='qz'>
    <div id='Sc'>Score: {Score}</div>    
    <ProgressBar className='pbar'completed={Prog} width={400} bgColor='#5cad5c'/>
    <div className='ques'>{qBank[Ques].question}</div>
   {qBank[Ques].answers.map((answer)=>
   (
    <button onClick={()=>Chosen(answer.isCor)}>{answer.Ans} </button>
   ))} 
    </div>
    }
    
    {
    value>=1 &&
    <Final_score fscore={Score}/>
    }
    

    </>
    
  )
}

export default Quiz