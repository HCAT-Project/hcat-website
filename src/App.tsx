import React from 'react';
import HcatNavbar from './components/TopNavbar';
import {Container, Card, Row ,Text,Col} from '@nextui-org/react';
function App() {
  return (
    <div className="App">
      <HcatNavbar />
      <div 
      style={{
          height: "100vh",
          marginLeft: "10%",
        }
      }
      >
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          致力于成为
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          真正小而美的
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          在线网页聊天程序
        </Text>
      </div>
    </div>
  );
}

export default App;
