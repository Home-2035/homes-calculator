import './AboutUs-module.css';
import inst from './../../images/inst.svg';
import vk from './../../images/vk.svg';
import tg from './../../images/tg.svg';
import mail from './../../images/mail.svg';
// import axios from 'axios';
import { NavLink } from 'react-router-dom';


const AboutUs = (e) => {

    // доделаю не трогать
    //     const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const name = document.getElementById('name');
    //     const email = document.getElementById('email');
    //     const message = document.getElementById('msg');

    //     axios.post('./AboutUs.php', {
    //         name: name,
    //         email: email,
    //         message: message
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }

    return (
        <div className="about">
            <h1 className='contactUs'>Свяжитесь с нами!</h1>
            <div className='aboutBlock'>
                <div className="contacts">
                    <h3>Наши контакты</h3>
                    <div className="contact-block">
                        <h3>Расположение команды</h3>
                        <p>Магнитогорск ул. Грязнова д. 36,  Многопрофильный колледж</p>
                    </div>
                    <div className="contact-block">
                        <h3>Телефоны</h3>
                        <p>+7 495 96-95-943</p>
                        <p>+7 495 249-01-60</p>
                    </div>
                    <div className="contact-block">
                        <h3>E-mail</h3>
                        <NavLink target='_blank' to='https://newlms.magtu@bk.ru'>https://newlms.magtu@bk.ru</NavLink> <br />
                        <NavLink target='_blank' to='https://newlms.magtu@bk.ru'>https://newlms.magtu@bk.ru</NavLink>
                    </div>
                    <div className="img-block">
                        <NavLink target='_blank' to={'#'}><img src={inst} alt="Instagram" /></NavLink>
                        <NavLink target='_blank' to={'#'}><img src={mail} alt="Mail" /></NavLink>
                        <NavLink target='_blank' to={'#'}><img src={tg} alt="Telegram" /></NavLink>
                        <NavLink target='_blank' to={'#'}><img src={vk} alt="Vk" /></NavLink>
                    </div>
                </div>
                <form className="inputsBlock" /*onSubmit={handleSubmit}*/>
                    <input type="text" name="name" id="name" placeholder='Имя' /> <br />
                    <input type="mail" name="email" id="mail" placeholder='+7 (***) *** ** **' /> <br />
                    <textarea name='msg' placeholder='Сообщение' /> <br />
                    <button type='submit' className='btn'>Задать вопрос</button>
                </form>
            </div>
        </div>
    )
};

export default AboutUs;