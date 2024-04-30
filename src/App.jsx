import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

// App ana bileşeni, tüm alt bileşenleri bir araya getirir
const App = () => {
  return (
    <div className=''>
      <Header />
      <main>
        <ContactForm />
        <ContactInfo />
      </main>
      {/* Diğer bileşenler... */}
    </div>
  );
};

export default App;