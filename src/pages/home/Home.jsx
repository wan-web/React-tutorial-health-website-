import './home.css';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import FAQs from '../../components/FAQs';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
    </>
  )
}

export default Home