import './styles/header.css'

function Header() {
    const showUpload = () => {
        let visa = document.getElementById('visib');
        visa.removeAttribute('hidden')
    }

    return(
        <header>
            <div className="header_container">
                <h1 className='header_text'>ArtIN</h1>
                <nav className='header_nav'>
                    <button id='upload_header' onClick={showUpload}>Загрузить</button>
                    <a className='header_links'>Главная</a>
                    <a className='header_links'>О нас</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;