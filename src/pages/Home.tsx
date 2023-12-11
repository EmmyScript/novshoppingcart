
import Register from "../components/Register"
import { ShoppingCart } from "../components/ShoppingCart"




export const Home = () => {
  return (
    <><div>Home</div>
    <ShoppingCart isOpen={false}/>
    <Register/>
    
    </>
  )
}

export default Home