import React, { useEffect, useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { useHistory } from "react-router-dom";
import './Home.css'
import {Card} from '../../Comp/Cards/Card'

export function Home(props){
    const [Questions,setQuestions]=useState([]);
    // const [cookies, setCookie] = useCookies(['voted']);
    const [key,setKey]=useState(1);
    const history = useHistory();
    
    

console.log(key)
  useEffect(async()=>{
    document.title = "استمارة - التصنيف العنصري"
    fetch('/api/questions')
    .then(data=> data.json())
    .then(data=>{
        setQuestions(data.info);
    })
  },[])

  async function onSave(e) {
    e.preventDefault()
    
    let { Q1,Q2,Q3,Q5,Q6,Q7,Q8,Q9,Q10,Q13,Q14,Q15,Q16,Q17,Q18,Q19,Q20,Q21,Q22,Q23,text2,text3 } = e.target.elements;
    let answers=[];

    console.log(Q2)
    


      answers.push(Q1.value);
      if(Q2.value=='9')
      {
        answers.push(text2.value);
      }else{
        answers.push(Q2.value);
      }
      if(Q3.value=='9'){
        answers.push(text3.value);
      }else{
        answers.push(Q3.value);
      }
      
      answers.push(Q5.value);
      answers.push(Q6.value);
      answers.push(Q7.value);
      answers.push(Q8.value);
      answers.push(Q9.value);
      
      answers.push(Q10.value);
      answers.push(Q13.value);
      answers.push(Q14.value);
      answers.push(Q15.value);
      answers.push(Q16.value);
      answers.push(Q17.value);
      answers.push(Q18.value);
      answers.push(Q19.value);
      answers.push(Q20.value);
      answers.push(Q21.value);
      answers.push(Q22.value);
      answers.push(Q23.value);

      console.log(answers)

    fetch('/api/answer', {
      method: "POST",
      body: JSON.stringify({answers}),
      headers: {
          "Content-Type": "application/json",
      },
    }).then(res => res.json())
        .then(data => {
          console.log('Success')
            if (data.success == true) {
              history.push("/Submitted")
            }
        })


}
  

    return (
        <div className='content'>
          <div className='head'><h3>يتعــرض جزء من المواطنين لبعض المضايقات في الاماكن العامة.  تتمثل هذه السلوكيات بتعامل مغاير بسبب مظهرهم الخارجي. تدعى هذه الظاهرة بالتصنيف العرقي (profiling) أو العنصرية على أساس المظهر الخارجي.</h3></div>
          <form className="Survey" onSubmit={(e => onSave(e))} >



          {
          Questions.map((Question,index) => (
          // display a <div> element with the user.name and user.type
          // parent element needs to have a unique key
          Question.type=='b'?
          <div className='questions'><Card Question={Question} key={index}/></div>

          :
          <div className='questions'><Card Question={Question} key={index}/></div>



        ))}
        <div className='btn'>
           <button className="button-8" type='submit'>إرسال
</button>
           </div>
           </form>
        </div>
    )
  }

  
