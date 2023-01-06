import {useState, useEffect} from "react"

const url = "http://localhost:3000/products"


function App() {

  const [products, setProducts] = useState([])

  // 1 -> Resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  },[])



  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {product.price}
          </li>
        ))}
      </ul>
     
            
      

    </div>
  );
}

export default App;
