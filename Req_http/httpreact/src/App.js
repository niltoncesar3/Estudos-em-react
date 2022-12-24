import {useState, useEffect} from "react"

//components
import NewButton from "./components/NewButton"


//url
const url = "http://localhost:3000/products"



function App() {

  const [products, setProducts] = useState([])

  //1-> Resgatando dados

  useEffect (() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }

    fetchData();
  },[10])
 
  console.log(products)

 
  
  // 2 -> Adição de produtos


  return (
    <div>
      <h1>Oi</h1>
      <NewButton/>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
