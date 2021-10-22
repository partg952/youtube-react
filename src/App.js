import logo from './logo.svg';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {useState,useEffect} from 'react';
import Main from './components/Main';
import axios from 'axios';
function App() {
  const [data,setData] = useState([])

  const [def,setDefault] = useState(true)
  console.log(def)
  
  useEffect(()=>{
      axios('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBkoIKYvN0vhw8N8nGMD1WpZq1IiVBVNSM&maxResults=50&type=vi&q=coding')
      .then((res)=>{
        setDefault(true)
        console.log(res.data)
        setData(res.data.items)
      })
    },[])

  function fetch_data(keyword){

    axios('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBkoIKYvN0vhw8N8nGMD1WpZq1IiVBVNSM&maxResults=50&type=vi&q='+keyword)
    .then((res)=>{
      console.log(res.data)
      setData(res.data.items)
      setDefault(false)
    }).catch((err)=>{
      alert('sorry we faced some error')
    })
  }
  return (
    <div className="App">
      <Navbar func={fetch_data} def={def} setDef={setDefault} data={data} setData={setData}/>
      <Sidebar/>
      <Main data={data} def={def} setDef={setDefault}/>
    </div>
  );
}

export default App;
