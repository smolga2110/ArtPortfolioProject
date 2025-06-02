import './styles/header.css'

function Header() {
    return(
        <header>
            <div className="header_container">
                <h1 className='header_text'>ArtIN</h1>
                <nav className='header_nav'>
                    <a className='header_links'>Главная</a>
                    <a className='header_links'>О нас</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;