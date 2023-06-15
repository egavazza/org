import { IoIosArrowDropupCircle } from "react-icons/io"
import { animateScroll as Scroll } from 'react-scroll';
import "./Footer.css"


// const Scroll = require('react-scroll');
// const scroll = Scroll.animateTopScroll;
// const onClickUp = () => {
//     scroll.scrollToTop();
// }


const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href="https://github.com/egavazza" target="_blank" rel="noreferrer noopener">
                <img src="/img/github.png" alt='Github' />
            </a>
            <a href="https://www.linkedin.com/in/ezequiel-gavazza/" target="_blank" rel="noreferrer noopener">
                <img src="/img/linkedin.png" alt='twitter' />
            </a>
            <a href="https://www.instagram.com/m4rketers/" target="_blank" rel="noreferrer noopener">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/logo.png' alt='org' />
        {/* <IoIosArrowDropupCircle className="scrollUp" onClick={onClickUp} /> */}
        <strong className="footer-texto">Desarrollado por Ezequiel Gavazza</strong>
    </footer>
}

export default Footer
