import './contact.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ad aspernatur doloribus nostrum dignissimos cumque maxime nulla tempora libero. Aspernatur dolorem qui, fuga optio quae nesciunt eos id repudiandae modi.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:taewan.web.lab@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
            <a href="http://m.me/" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact