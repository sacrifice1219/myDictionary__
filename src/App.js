import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Container } from '@mui/material';
import Header from './components/header/Header';
import Definitions from './components/Definitions/Definitions';
import DarkMode from './components/icon/icon';
import Footer from './components/footer/footer';

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false);
  

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

      setMeanings(data.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings)

  useEffect(() => {
    dictionaryApi();
    //eslint-disable-next-line
  }, [word, category]);

  return (
    <div className="App" style={{ height: "100vh", backgroundColor: LightMode ? "#ffff" : "#282c34", color: LightMode ?"black" : "white", transition: "all 0.5s linear"}}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: "100vh", justifyContent: "space-evenly" }}>
        <div style={{
          position: "absolute", top: 0, right:15, paddingTop:10
        }}>
          <span> {LightMode ? "Dark" : "Light" } Mode</span>
          <DarkMode checked={ LightMode} onChange={()=> setLightMode(!LightMode)} />
        </div>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} LightMode={ LightMode} setMeanings={setMeanings} />
        {meanings && (<Definitions word={word} meanings={meanings} category={category} LightMode={ LightMode} />)}
      </Container>
       <Footer/>
    </div>
   
  );
}

export default App;
