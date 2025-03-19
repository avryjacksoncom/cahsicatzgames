
import './App.css';
import TicTacToe from './pages/TicTacToe';
import NewGame1 from './pages/NewGame1';
import NewGame2 from './pages/NewGame1';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route exact path="/" element={<TicTacToe/>} />
          <Route exact path="/newgame1" element={<NewGame1/>} />
          <Route exact path="/newgame2" element={<NewGame2/>} />
          {/* <Route exact path="/projects" element={<ProjectPage />} />
          <Route exact path="/notes" element={<NotesPage />} /> */}

         
        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;

