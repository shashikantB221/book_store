import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowBooks from './components/ShowBooks';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Bookstore</h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<ShowBooks />} />
            <Route path="/add" element={<AddBook />} />
            <Route exact path="/edit/:id" component={EditBook} />
            {/* <Route exact path="/edit/:id" element={<EditBook/>} /> */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
