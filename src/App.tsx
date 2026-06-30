import './globals.css';

import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
