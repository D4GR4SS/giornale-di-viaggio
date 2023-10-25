import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.key} {...item} />;
  });

  console.log(cards);
  return (
    <div className='container'>
      <Navbar />
      <section className='cards'>{cards}</section>

      <Footer />
    </div>
  );
}
