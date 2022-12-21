import {useState, useEffect} from "react"

const url = "http://localhost:3000/products"

function App() {

  // 1-> resgatando dados
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  console.log(products)

  

  return (
    <div>
      <h1>Oi</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
