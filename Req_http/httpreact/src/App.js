import {useState, useEffect} from "react"

//components
import NewButton from "./components/NewButton";

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json();

      setProducts(data)
    }

    fetchData(products)
  },[])

  console.log(products)
  

  

  //1-> Resgatando dados

  
  
  // 2 -> Adição de produtos


  return (
    <div>
      <h1>Oi</h1>
      
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$ {product.price}</li>
        ))}
      </ul>
      <NewButton/>

    </div>
  );
}

export default App;
