import Logo from '../img/fizzBuzz.png'
import LogoGa from '../img/gatsby.svg'
import LogoRe from '../img/redux.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import '../Style.css';
import {useHistory} from 'react-router-dom'




const Home = () => {
  const history=useHistory()

  const clickH=()=>{
    history.push('/App')
  }
  return ( <>
   <div className="container">
     <div className="row row-cols-1 row-cols-sm-2">
      {/* room for explanation about the app */}
     <div className="col order-last order-sm-first">
      <h2 className="fw-bold lh-1 mb-3">fizzbuzz: coding project</h2>
      <p className="lead">its a React project which gets 2 numbers from user. as the user clicks the button it prints numbers from 1 to 100. for multiples of first number displays <span className="Fizz">Fizz</span> and for the second displays <span className="Buzz">Buzz</span>.if a number is multiple of two it displays <span className="FizzBuzz">FizzBuzz</span>.</p>
      <ul className="fa-ul pt-2 checklist">
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>CSS and Bootstrap responsive layout</li>
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React hooks</li>
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React event handlers</li>
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React iterators</li>
        <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>For loops and Ternary Operator</li>
      </ul>
      <button className="btn mt-3 btn-outline-dark btn-lg px-4 me-md-2" onClick={clickH}>LETS TRY it...</button>
      <h5 className="fw-bold mt-5">
        <div className="d-flex">
          <div className="row gx-3">
          <div className="col">
            <li style={{color:' #61dbfb'}}className="fab fa-react fa-4x"></li></div>
            <div className="col"><li style={{color:'#264de4'}}className="fab fa-css3-alt fa-4x"></li></div>
            <div className="col"><li style={{color:'#e34c26'}}className="fab fa-html5 fa-4x"></li></div>
            <div className="col"><li style={{color:'#563d7c'}}className="fab fa-bootstrap fa-4x"></li></div>
        </div>
        </div>
      </h5>
     </div>
     {/* room for the logo */}
     <div className="col">
        <img src={Logo}  className='img-fluid center-block d-block mx-auto'/>
     </div>
     </div>
    
   </div>

</>);
}
 
export default Home;