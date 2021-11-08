import React, { useEffect } from 'react';
import './Card.css'

export function Card(props){
    const {Question} = props;


    return (
        <div className='card'>

           {Question.type=='b'?
           <div className='b'><h3>{Question.title}</h3></div>
           :
           <div className='a'><h4>{Question.title} </h4>
           <div className='options'>
           {Question.options.op1==null? null:<p><input type="radio" value="1" name={"Q"+Question.id} required/>{Question.options.op1} </p>}
           {Question.options.op2==null? null:<p><input type="radio" value="2" name={"Q"+Question.id} />{Question.options.op2}</p>}
           {Question.options.op3==null? null:<p><input type="radio" value="3" name={"Q"+Question.id} />{Question.options.op3}</p>}
           {Question.options.op4==null? null:<p><input type="radio" value="4" name={"Q"+Question.id} />{Question.options.op4}</p>}
           {Question.options.op5==null? null:<p><input type="radio" value="5" name={"Q"+Question.id} />{Question.options.op5}</p>}
           {Question.options.op6==null? null:<p><input type="radio" value="6" name={"Q"+Question.id} />{Question.options.op6}</p>}
           {Question.options.op7==null? null:<p><input type="radio" value="7" name={"Q"+Question.id} />{Question.options.op7}</p>}
           {Question.options.op8==null? null:<p><input type="radio" value="8" name={"Q"+Question.id} />{Question.options.op8}</p>}
           {Question.options.op9==null? null:<p><input type="radio" value="9" name={"Q"+Question.id} />{Question.options.op9}{" "}
           {Question.id==2||Question.id==3?
           <input type='text' name={"text"+Question.id}/>
           :null}
           
           </p>}
           {Question.options.op10==null? null:<p><input type="radio" value="10" name={"Q"+Question.id} />{Question.options.op10}</p>}
           </div>
           </div>}
        </div>

     
          
       
    )
}