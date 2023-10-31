import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Article from './components/article';


const obj = {}


function App() {

  const [name, setName] = useState('Vasya')
  const [isYellow, setIsYellow] = useState(true)

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

      let [data, data1] = await Promise.all([fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11'), fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11')]) 
     

    }
    )()

  },[])




  

  const BodeRender = () => (
    <div>
      <Header
        name={name}
      />
      <Article
        name={name}
        setName={setName}
        isYellow={isYellow}
        setIsYellow={setIsYellow}
      />
    </div>
  )

  obj.vasya = 110

  return <BodeRender />
}

export default App;
