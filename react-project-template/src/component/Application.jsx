import { useState } from 'react';
import '../Style.css'

const Application = () => {
  const[fizz,setFizz]=useState(3)
  const[buzz,setBuzz]=useState(5)
  const[numbers,setNumbers]=useState([])
  const [index,setIndex]=useState([])

  const handleChangeFizz=(e)=>{
    setFizz(e.target.value)
  }
  const handleChangeBuzz=(e)=>{
    setBuzz(e.target.value)
  }

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
  <div style={{marginBottom:'200px'}} className="container mt-5">
  <div className="row border border-2 border-dark mx-3">
      <h5 className="col border-bottom border-2 text-center p-2">insert your inputs please</h5>
    <div className="row mt-4">
      <div className="col-sm-6 col-12">
        <label className="label-form">Fizz</label>
        <input type='number' className='form-control' onChange={handleChangeFizz}/>
      </div>
      <div className="col-sm-6 col-12">
        <label className="label-form">Buzz</label>
        <input type='number' className='form-control' onChange={handleChangeBuzz}/>
      </div>
      <div className="col-12 mt-4 d-flex justify-content-end">
        <button className="btn btn-outline px-3 mb-4" onClick={handleClick}>FizzBuzz it...</button>
      </div>
      <div className="col-12 border-bottom border-2 mb-3 fullWidth">
        <h5>results</h5>
      </div>
      <div className="row">
      <div className="col-12">
        <table className="table table-sm table-striped">
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
        </table>
        </div>
      </div>
    </div>
    </div>
    </div>
   
  </> );
}

 
export default Application;