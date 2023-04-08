import React from 'react';
import HcatNavbar from './components/TopNavbar';
import {Container, Card, Row ,Text,Col} from '@nextui-org/react';
import "./components/styles/styles.css"

import { useState, useEffect } from 'react';


function App() {
  const text = "致力于成为真正小而美的在线网页聊天程序";
  const [angle, setAngle] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 0.15) % 360);
    }, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <HcatNavbar />
      <div 
      style={{
          height: "100vh",
          marginLeft: "5%",
        }
      }
      >
        <Text
          h4
          size={60}
          css={{
            textGradient: `${angle}deg, #3F51B5 40%,  $pink600 60%`,
          }}
          weight="bold"
        >
          {text}
        </Text>
      </div>
    </div>
  );
}

export default App;
