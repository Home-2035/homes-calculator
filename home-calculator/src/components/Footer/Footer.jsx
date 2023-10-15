import s from './Footer.module.css';
import logo from './../../images/logo.jpg'

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <div className={s.logotip}>
                <img src={logo} alt="logotip" />
            </div>
        </footer>
    )
}

export default Footer;


