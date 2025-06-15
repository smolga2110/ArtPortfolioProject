import Header from './header'
import ArtList from '../artList'
import Footer from './footer'
import './styles/layout.css'

function Layout(){
    return(
        <div>
            <Header/>
            <main className='main_container'>
                <ArtList/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;