import Image from '../images/values.jpg';
import SectionHead from './SectionHead';
import {GiCutDiamond} from 'react-icons/gi';
import {values} from '../data';
import Card from '../UI/Card';

const Values = () => {
  return (
    <section className='values'>
      <div className="container values__container">
        <div className="values__left">
          <img className='values__image' src={Image} alt="Values" />
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur accusamus non ratione nam alias autem ipsa ullam temporibus dolorem.
          </p>
          <div className="values__wrapper">
            {
              values.map( ({id, icon, title, desc}) => (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values