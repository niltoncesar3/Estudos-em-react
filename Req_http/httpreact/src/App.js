import { useState, useEffect } from "react";

//components


const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
   

  //1-> Resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  },[])
  
  
  // 2 -> Adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(product),
    });

     // 3 -> carregamento dinamico
    const addedProduct =  await res.json();

    setProducts((prevProducts) => [...prevProducts,addedProduct])

    setProducts("")
    setPrice("")
  }


  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} R$ {product.price}</li>
        ))}
      </ul>
      <div className="add-products">
        <form onSubmit={handleSubmit}>
          <label>
            Nome: 
            <input type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço: 
            <input type="number"
            name="name"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit"/>
        </form>
      </div>
      

    </div>
  );
}

export default App;
