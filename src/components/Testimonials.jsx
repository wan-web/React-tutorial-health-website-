import SectionHead from './SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';
import { testimonials } from '../data';
import { useState } from 'react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const {name, quote, job, avatar} = testimonials[index];
  console.log(testimonials.length);
  
  const prevTestimonialHandler = () => {
    if(index === 0) {
      setIndex(testimonials.length - 1);
    }else {
      setIndex( prev => prev - 1);
    }
  }

  const nextTestimonialHandler = () => {
    if(index === testimonials.length - 1){
      setIndex(0)
    }else {
      setIndex( prev => prev + 1);
    }
  }


  return (
    <section className='testimonials'>
      <div className="container testimonials__container">
        <SectionHead className="testimonials__head" icon={<ImQuotesLeft />} title="Testimonials"/>
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className='testimonial__quote'>{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className='testimonial__title'>{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button className='testimonials__btn' onClick={prevTestimonialHandler}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className='testimonials__btn' onClick={nextTestimonialHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials