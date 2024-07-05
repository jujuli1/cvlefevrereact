import React, { useEffect, useState } from 'react';
import Header from '../components/public/Header'
import './Home.css'

const Home = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setOutput([...output, `> ${input}`]);
      setInput('');

      // Simulate command processing
      if (input.toLowerCase() === 'hello') {
        setOutput((prevOutput) => [...prevOutput, 'hey']);
      } else {
        setOutput((prevOutput) => [...prevOutput, `Unknown command: ${input}`]);
      }
    }
  };

  
  
    useEffect(() => {
      setIsVisible(true);
    }, []);

  return (

    
    <div className={`qui-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="terminal-header">
      <Header/>

       Page Home

        
        <div className="terminal-buttons">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
        </div>
      </div>
      <div className="terminal-body">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        
      </div>
    </div>
  );
};

export default Home;