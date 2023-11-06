import ProductList from './Product/page'
// import Footer from './Footer/page'
import Footer from './Footer/page'
import './globals.css'
import Sidebar from './(dashboard)/dashboard/Sidebar/page'
import Signuppage from './(dashboard)/dashboardsignup/page'
import Loginpage from './(dashboard)/dashbordlogin/page'


export default function Home() {
  return (
    <div>
      <ProductList/>
      <Footer/>
     
    </div>
  )
}
