import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { Outlet } from 'react-router-dom'


const RootLayout = ({ children }) =>{

    return(
        <div className="root-main">
          
          <Header />

            <Content componentData = {children}> </Content>
            <Outlet />
          <Footer />
          
        </div>
    )
}

export default RootLayout
