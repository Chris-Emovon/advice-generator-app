import { useState, useEffect } from 'react'
import './index.css'


function App() {

  
  const [advice, setAdvice] = useState(null)

  
  //const guidance = hint.slip.advice
  

 
  /* useEffect(()=> {
    const fetchAdvice = async () => {
      try {
        const response = await fetch(randomAdviceUrl)
        const rep = setData(response.json)
        console.log(response.json)
      } catch (error) {
        console.log("ERROR!!!")
      }
    }
    fetchAdvice()
  }, [])  */
  ///const help = console.log(hint.slip.id)
  //const info = alert(hint.slip.advice) 

  /*useEffect(display => {
    console.log(hint.slip.advice)
  }, [])*/

  /*const fetchData = async () => {
    try {
      const response = await fetch(randomAdviceUrl)
      const data = await response.json()
      setHint(data)
    } catch (error) {
      console.log("ERROR!!!")
    }
  }


  useEffect(() => {
    fetchData()
  }, [])
  */

  function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip));
  }

    
  return (
    
      <main className="d-flex justify-content-center">
        <div className="card rounded">
          <div className="card-body text-center text-white">
          {advice && (
            <div>
              <p id='adv'>Advice #{advice.id}</p>
              <p className='advice'>{advice.advice}</p>
            </div>
          )} 

          <div>
            <picture>
              <source media="(min-width: 1000px)" srcSet="/images/pattern-divider-desktop.svg"></source>
              <source media="(max-width: 465px)" srcSet="/images/pattern-divider-mobile.svg"></source>
              <img className="divider" src="/images/pattern-divider-desktop.svg" alt=""/>
            </picture>
          </div>
            
            <p onClick={fetchAdvice} className="dot"><img className="d-flex justify-content-center rounded" id="secondImage" src="images/icon-dice.svg" /></p>
          </div>
        </div>
      </main>
  )
}

export default App
