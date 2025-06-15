import './styles/footer.css'

function Footer(){
    return(
        <footer>
            <div className='footer_container'>
                <span>What is copyrights?</span>
                <div className='contacts_container'>
                    <ul>
                        <li>
                            <a href='https://github.com/smolga2110'>GitHub</a>
                        </li>
                        <li>
                            <a>Telegram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;