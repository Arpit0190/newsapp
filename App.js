//import logo from './logo.svg';
import './App.css';
import React, {  useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom';

const App = () => {

 const apikey = process.env.REACT_APP_NEWS_API;

  const [Progress , setProgress]=useState([0])

    return (
      <div>
      <Router>
      <Navbar/>
       <LoadingBar
        color="#f11946"
        progress={Progress}
        //onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<News setProgress={ setProgress} apikey={apikey}  key="general" pageSize={5} country="us" category="general"/>} />
        <Route path="/business" element={<News setProgress={ setProgress} apikey={apikey}  key="business" pageSize={5} country="us" category="business"/>} />
        <Route path="/entertainment" element={<News setProgress={ setProgress} apikey={apikey} key="entertainment" pageSize={5} country="us" category="entertainment"/>} />
        <Route path="/general" element={<News setProgress={ setProgress}apikey={apikey} key="general" pageSize={5} country="us" category="general"/>} />
        <Route path="/health" element={<News setProgress={ setProgress} apikey={apikey} key="health" pageSize={5} country="us" category="health"/>} />
        <Route path="/science" element={<News setProgress={ setProgress} apikey={apikey} key="science" pageSize={5} country="us" category="science"/>} />
        <Route path="/sports" element={<News setProgress={ setProgress} apikey={apikey} key="sports" pageSize={5} country="us" category="sports"/>} />
        <Route path="/technology" element={<News setProgress={ setProgress} apikey={apikey} key="technology" pageSize={5} country="us" category="technology"/>} />
      </Routes>
      </Router>
      </div>
    )
  
}
export default App
