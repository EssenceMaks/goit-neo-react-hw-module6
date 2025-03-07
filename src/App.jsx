import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './App.css';


const App = () => {
  return (
    <div className="container">
      <ThemeToggle />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App