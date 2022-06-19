import React from 'react'
import { useEffect, useState } from 'react'
import EachComp from './EachComp';
import axios from 'axios'

const Feed = () => {
  const [Page, setPage] = useState(0);
  var start=0,end=2;

  const [content, setcontent] = useState([]);
  const getsomething = async()=>{
       const { data }=await axios.get(`https://newsapi.org/v2/everything?q=Ecosystem&apiKey=fa553aecdcef4d74b09bcfe6ffecd00d`
       );
       setcontent(data.articles);
       console.log(data.articles);
    };
    
    useEffect(() => {
        getsomething();
    }, [start])  

    const handlechange =()=>{
      setPage(Page+1);
      console.log(Page);
    }
  return (
    <>  <button className='nxt' onClick={handlechange}>Next</button>
        {
        content && content.slice(Page,Page+2).map((c)=> 
        <EachComp  title={c.title} url={c.urlToImage}/>
        )
        }
        
    </>

  )
}

export default Feed