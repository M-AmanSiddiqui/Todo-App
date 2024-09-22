import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllproducts } from './utils/products'
import Card from './components/card'
import { data } from 'autoprefixer'
import Item from 'antd/es/list/Item'
function App() {
const [products , setProducts] = useState ([]);
useEffect (() => {
  fetchproducts()
}, [])

const fetchproducts = async ()=>{
  const products = await getAllproducts()
setProducts([...products])
  console.log(products);}
// abcd
  return (
    
   <div className='container mx-auto my-10'>
        <h1 className='text-center text-4xl'>Shopping List</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
{
  products.map((data) => {
    return <Card key={data.id} item ={data}/>
  })
}
            </div>
            </div>
            </section> 
            </div>
)};

export default App
