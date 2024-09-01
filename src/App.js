import logo from './logo.svg';
import './App.css';
import './Design.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <BlogPage/>
     <Footer/>
    </div>
  );
}

export default App;
