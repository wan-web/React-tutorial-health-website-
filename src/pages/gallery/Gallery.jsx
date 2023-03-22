import './gallery.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for(let i = 0; i < galleryLength; i++) {
    images.push(require(`../../images/gallery${i+1}.jpg`))
  }


  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis reprehenderit velit, voluptatibus eos quibusdam tempora.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map( (image, index) => (
              <article key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </article>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Gallery