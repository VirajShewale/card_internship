import './App.css';
import BasketballPlayerCard from './components/BasketballPlayerCard';
// import Navbar from './components/navbar/Navbar';
import lebron from '../src/assets/Lebron.jpg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {


  return (
    <>
      <Navbar />
      <BasketballPlayerCard
        name="LeBron James"
        image={lebron}
        position="Forward"
        stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1,
        reboundsPerGame: 10.5 }}
      />
      <Footer />

    </>
  );
}

export default App;
