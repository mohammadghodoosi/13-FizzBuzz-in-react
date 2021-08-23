import '../prism.css'
import '../Style.css'
import Highlight, { defaultProps } from "prism-react-renderer";
import demo from 'prism-react-renderer/themes/synthwave84'
import styled from "styled-components";



const Code = () => {
  // insert your code here
  const exampleCode = `
  import { useState } from 'react';
  import '../Style.css'
  
  const Application = () => {

    //STEP 1
    const[fizz,setFizz]=useState(3)
    const[buzz,setBuzz]=useState(5)
    const[numbers,setNumbers]=useState([])
    const [index,setIndex]=useState([])
  

    //STEP 2
    const handleChangeFizz=(e)=>{
      setFizz(e.target.value)
    }
    const handleChangeBuzz=(e)=>{
      setBuzz(e.target.value)
    }

    //STEP 3
    const handleClick=()=>{
     let arrayNumber=[]
     let arrayIndex=[]
     for(let i=1;i<=100;i++){
       let value=((i%fizz==0?'Fizz':'')+(i%buzz==0?'Buzz':'')||i)
       arrayNumber.push(value)
     }
     for(let i=0;i<100;i+=5){
       arrayIndex.push(i)
     }
     setNumbers(arrayNumber)
     setIndex(arrayIndex)
    }
  
    return ( <>
      //layout has been ommited for shortening the code.
      //for source code go to repo please


      //STEP 4
     <tbody>
              {index.map(i=>{
                return(
                  <tr>
                    <td className={numbers[i]}>{numbers[i]}</td>
                    <td className={numbers[i+1]}>{numbers[i+1]}</td>
                    <td className={numbers[i+2]}>{numbers[i+2]}</td>
                    <td className={numbers[i+3]}>{numbers[i+3]}</td>
                    <td className={numbers[i+4]}>{numbers[i+4]}</td>
  
                  </tr>
                )
              })}
            </tbody>
    </> );
  }
  
   
  export default Application;
     `.trim();

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  color:white
`;

const LineContent = styled.span`
  display: table-cell;
`;
  return ( <>
   <div className="container py-5 px-5">
     <h3 className="border-1 border-bottom border-dark pb-3 text-end">the code of fizzbuzz</h3>
     <div className="row row-cols-1 row-cols-sm-2">
       <div className="col-sm-8">
          
        <Highlight 
        {...defaultProps}  
        theme={demo}
        code={exampleCode} 
        language="js">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
             <Pre className={className} style={style}>
              {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
               <LineContent>
               {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
               ))}
               </LineContent>
               </Line>
        ))}
      </Pre>
    )}
  </Highlight>
          
       </div>
       <div className="col-sm-4 order-sm-last order-first">
           <div className="row mt-sm-5">
             <div className="col mt-sm-5">
               <h5 className='border-bottom border-2 mt-sm-5'>step 1</h5>
               <p>using useState hooks to create reusable variables.</p>
             </div>
           </div>
           <div className="row">
             <div className="col mt-sm-5">
               <h5 className='border-bottom border-2 mt-sm-5'>step 2</h5>
               <p>using event handler in order to save the change of user</p>
             </div>
           </div>
           <div className="row">
             <div className="col mt-sm-5">
               <h5 className='border-bottom border-2 mt-sm-5'>step 3</h5>
               <p>using for loop two times to generate 1-100 numbers and ternary operator to change numbers to <span className="Fizz">Fizz</span> , <span className="Buzz">Buzz</span> and <span className="FizzBuzz">FizzBuzz</span>.</p>
             </div>
           </div>
           <div className="row mt-sm-5">
             <div className="col mt-sm-5">
              
             </div>
           </div>
           <div className="row mt-sm-5">
             <div className="col mt-sm-5">
              
             </div>
           </div>
           <div className="row mt-sm-5">
             <div className="col mt-sm-5">
               <h5 className='border-bottom border-2 mt-sm-5'>step 4</h5>
               <p>displaying numbers in the UI with the help of map method.</p>
             </div>
           </div>
       </div>
     </div>
   </div>
  </> );
}
 
export default Code;



 