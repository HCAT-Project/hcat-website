import React from 'react';
import HcatNavbar from './components/TopNavbar';
import {Container, Card, Row ,Text} from '@nextui-org/react';
function App() {
  return (
    <div className="App">
      <HcatNavbar />
      <div>
        <Text 
        style={{textAlign:"center",marginTop:"20px"}}
        h1>致力于成为真正小而美的在线网页聊天程序</Text>
      </div>
    </div>
  );
}

export default App;
