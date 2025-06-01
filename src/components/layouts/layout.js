import Header from './header'
import ArtList from '../artList'
import Footer from './footer'

function Layout(){
    return(
        <div>
            <Header/>
            <main>
                <ArtList/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;