// responsivoreact/src/App.tsx
import Header from './components/Header';
import Main from './components/Encabezado'; 
import Section from './components/Section';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Main />
      <Section />
      <Footer />
    </div>
  );
}
