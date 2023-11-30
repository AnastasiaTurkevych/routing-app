import { BrowserRouter as Router, Routes, Route, Outlet, NavLink, useParams } from 'react-router-dom';
import './App.css';


const products = [
  { id: 1, name: 'Apple'},
  { id: 2, name: 'Sumsung'},
  { id: 3, name: 'Nokia'}


]

function Home(){
  return <h2>Home</h2>
}

function About(){
  return <h2>About</h2>
}

function NotFound(){
  return <h2>Not Found</h2>
}

// function Phone(){
//   return <h2>Phone</h2>
// }

// function Tablet(){
//   return <h2>Tablet</h2>

// }

function Products(){
  return (
    <div>
      <h2>Products</h2>
      <Outlet />
    </div>
  )
}

function ProductsList(){
  return (
    <div>
      <h2>Products list</h2>
      <ul>
        {
          products.map(product => {
            return <li key = {product.id}>
              <NavLink  className={setActiveProducts} to = {`/products/${product.id}`}>{product.name}</NavLink>

            </li>
          })
        }
      </ul>
      <Outlet />
    </div>
  )
}

function Product(){
  const params = useParams()

 const product =  products.find(p => p.id == +params.id)

  return(
    <div>
    <h1>Product  id {product.id}</h1>
    <h1>Product name {product.name}</h1>

    </div>
  )

}

const setActive = ({isActive})=> (isActive ? "active" : "")
const setActiveProducts = ({isActive})=> (isActive ? "activeProduct" : "")


function Nav() {
  return(
    <nav>
      <NavLink to="/" className={setActive}>Home</NavLink>
      <NavLink to="/about" className={setActive}>Про сайт</NavLink>
      <NavLink to="/products" className={setActive}>Товари</NavLink>


    </nav>
  )

}


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='' element ={<Home />} />
          <Route path='/about' element ={<About />} />
          <Route path='/products' element ={<Products />}>
          <Route index element ={<ProductsList />} />
          <Route  element ={<ProductsList />} >
              <Route path=':id' element ={<Product />} />

          </Route>

        </Route>
        
        <Route path='*' element ={<NotFound />} />

        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
