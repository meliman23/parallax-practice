
import './App.css';
import sky from './sky.jpg';
import grass from './grass.jpg';

//first install with npm install @react-spring/parallax
import {Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    // pages is the scene 
    <Parallax pages={3
    }>
    
    <ParallaxLayer
    // each layer is a page that takes up the screeen 
    offset={0}// staked by defauls
    //where the page starts
    speed={1} // changes scroll speed
    factor={2} // 1 factor takes 1.5 takes up 1.5 a page ect how long the page is 
    style={{
      backgroundImage: `url(${sky})`,
      backgroundSize: `cover`,
    }}
    ></ParallaxLayer>

     <ParallaxLayer 
     offset={1} // starts on page 1
     speed={1} //1 scroll speed
     factor={3} //spans 3 pages
     style={{
      backgroundImage: `url(${grass})`,
      backgroundSize: `cover`,
    }}
     ></ParallaxLayer>

     <ParallaxLayer
     offset={0.3}
     speed={1}
     >
      <h1 className='center'>Okc Mow and Go</h1>
     </ParallaxLayer>

     <ParallaxLayer
     offset={.8}
     speed={.4}
     >
      <h2 className='center'>The best lawn care at the best price.</h2>
     </ParallaxLayer>

     <ParallaxLayer
     offset={1.8}
     speed={1}
     >
      <h1 className=' white'>Pricese and contact </h1>
     </ParallaxLayer>
     <ParallaxLayer
     offset={1.9}
     speed={.4}
     >
      <div className='container'>
       <h2 className='white'>$30 for front yards</h2>
       <h2 className='white'>$50 for front and backyard</h2>
      <h2 className='white'>Refer a friend to get half off </h2>
      <h2 className='white'>Contact me on<a href='https://www.instagram.com/okcmowandgo/'>Instagram</a>for an appointment</h2>
      </div>
      
      
     </ParallaxLayer>


  </Parallax>

  );
}

export default App;
