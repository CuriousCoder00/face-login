import Header from "./Components/Header";
import Login from "./Components/Login";
import LoginSuccess from "./Components/LoginSuccess";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="loginSuccess" element={<LoginSuccess/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
