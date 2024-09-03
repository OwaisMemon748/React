import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Carousel from './Components/Carousel/Carousel';
import Features from './Components/feature/feature';
import About from './Components/about/about';
import Service from './Components/Services/service';
import Gallery from './Components/gallery/gallery';
import { faCamera, faRocket, faSearch } from '@fortawesome/free-solid-svg-icons';
import Testimonial from './Components/testimonial/testimonial';

const App = () => {
  const [theme, setTheme] = useState('light');

  // Define feature data
  const featureData = [
    { icon: faCamera, title: 'Photography', text: 'Efficient and reliable transport services.' },
    { icon: faRocket, title: 'Launch', text: '24/7 maintenance and support for other comp.' },
    { icon: faSearch, title: 'Search', text: 'Building mobile solutions for your business.' }
  ];

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Carousel theme={theme} />
        <Features data={featureData} theme={theme} />
        <About theme={theme} />
        <Service theme={theme}/>
        <Gallery theme={theme} />
        <Testimonial/>
      </main>
      <div className='footer-container'>
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default App;
