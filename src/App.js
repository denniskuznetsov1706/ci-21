import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Article from './components/article';
import MainMenu from './components/mainComponent';
import MainPage from './components/mainPage';
import Footer from './components/mainFooter';


const obj = {}


function App() {

  const [name, setName] = useState('Vasya')
  const [isYellow, setIsYellow] = useState(true)

  const [tabPage, setTabPage] = useState(1)

  

  // useEffect( ()=>{

  //   // fetch(`https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11`, {

  //   //   method: 'GET',
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   },
  //   //   // body: JSON.stringify({...req.body, authId}),
  //   // })

  //   // fetch('https://jsonplaceholder.typicode.com/posts')
  //  let t =  fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11')
  //   .then(data=>data.json())
  //   .then(data=>console.log(data))
  

  // },[name, isYellow])


  useEffect(()=>{

    (async ()=>{

      try{
        let [data, data1] = await Promise.all([fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11'), fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11')]) 
      }catch(e){
        console.log(e)
      }
      
     

    }
    )()

  },[])




  

  const BodeRender = () => (
    <div>
      <MainMenu 
       
        setTabPage ={setTabPage}
       />
      <MainPage  tabPage ={tabPage}/>
      <Footer />

    </div>
  )

  obj.vasya = 110

  return <BodeRender />
}

export default App;
