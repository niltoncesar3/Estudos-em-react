import {useState, useEffect} from "react"

const url = "http://localhost:3000/products"

function App() {

  //1-> Resgatando dados

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data)
    }

    fecthData();
  },[])

  console.log(products)
  
  // 2 -> Adição de produtos


  return (
    <div>
      <h1>Oi</h1>

    </div>
  );
}

export default App;
