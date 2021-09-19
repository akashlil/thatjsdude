import logo from './logo.svg';
import './App.css';
import datajson from './tutorialsData.json';
import { useState, useEffect } from 'react';
// import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}
function Header() {
  return (
    <div>
      <header className="headerBack">
        <div className="fast-header">
          <h2>That js Dude</h2>
          <button className="btn">sing in</button>
        </div>
      </header>
      <div className="sen-header">
        <h1>Exclusive React Workshop for beginners!</h1>
        <p>Once in a year opportunity to learn and build your first React app</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  )
}

function Main() {
  return (
    <div className="main">
      <Left></Left>
      <Right></Right>
    </div>

  )
}


function Left() {
  const [cardData, setcardData] = useState([]);

  useEffect(() => {
    setcardData(datajson)
  }, [])

  return (
    <div className="left-contner">
      <JsConfusing></JsConfusing>
      <div className="card-display">
        {
          cardData.map(data => {
            const { title, desc } = data;
            return <CardShow title={title} desc={desc}></CardShow>;
            // return (
            //   <CardShow title={title} desc={desc}></CardShow>
            // )
          })
        }

      </div>
    </div>
  )
}



function CardShow(props) {
  const { title, desc } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <button className="learn-more-btn">View deleails</button>
    </div>
  )
}

function Right() {
  return (
    <div className="rignt-contner">
      <PersonalTraining></PersonalTraining>
      <RecentVideo></RecentVideo>
    </div>
  )
}

function PersonalTraining() {
  return (
    <div>
      <h2>Personal Training for $30</h2>
      <p>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything else, you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a time slot You can Book me</p>
    </div>
  )
}

function RecentVideo() {
  return (
    <div>
      <h2>Recent Videos</h2>
      <ul>
        <li>15+ tricks for dev tool</li>
        <li>Understanding this</li>
        <li>be expert in JS Array</li>
        <li>How Browsers works in 4 min</li>
      </ul>
      <button className="btn">more on youtube</button>
    </div>
  )
}


function JsConfusing() {
  return (
    <div>
      <h1>JS Confusing Parts</h1>
      <p>Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event delegation, dom, timers and many more caveats.</p>
    </div>
  )
}
export default App;
