import './App.css';
import db from './firebase.config';
import React,{useState,useEffect} from 'react';

function App() {
  const [names,setNames]=useState([])
  const fetchNames=async()=>{
    const response=db.collection('names');
    const data=await response.get();
    data.docs.forEach(item=>{
     setNames([...names,item.data()])
    })
  }
  useEffect(() => {
    fetchNames();
  }, [])
  return (
    <div className="App">
      {
        names && names.map(name=>{
          return(
            <div className="name-container">
              <h4>{name.name}</h4>
              <p>{name.bName}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
