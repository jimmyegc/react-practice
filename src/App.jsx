import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './Boton'

function App() {
  const [count, setCount] = useState(0)
  
  const titulo=<h1>Titulo</h1>

  const clickme = () => {
    alert('hi')
  }

  const numeros = [1, 2, 3, 4, 5, 6 ,7, 8, 9]

  const dolarRef = useRef()
  const resultadoRef = useRef()

  const procesar = () => {
    const pesos = dolarRef.current.value * 20;
    resultadoRef.current.innerHTML = pesos
  }

  const getData = async() => {
    await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())                      
    .then(data => {        
      console.log(data)               
      setProductos(data)
    })    
  }

  let [productos, setProductos] = useState([])
  useEffect(() => getData, [])

 

  return(
    <>
      {titulo}
      <p className="parrafo">Hola</p>
      <button onClick={clickme}>mostrar saludo</button> |
      <Boton text="Hazme click"></Boton>
      <div>
        { numeros.map((n,key) => {
            return <p key={key}>número: { n }</p>
          })
        }
      </div>
      <hr />
      <h2>Dólares a Pesos</h2>
      <input type="number" ref={dolarRef} />
      <button onClick={procesar}>Convertir</button>
      <div ref={resultadoRef}></div>
      <hr />
      <div>
        { productos.length > 0 && (
          <div >        
          { 
            productos.map(producto => (
              <div className='card' key={ producto.id }>
                <img src={ producto.image} alt="" width="70" />
                <h3>{ producto.title}</h3>
                <p>{ producto.description }</p>              
              </div>
            ))
          }
          </div>
        )}        
      </div>
      <hr />
    </>
  )
  /*
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  */
}

export default App
