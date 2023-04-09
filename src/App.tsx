import {Route, Routes} from "react-router-dom";
import "./style/style.scss"
import {Home} from "./pages/Home/Home";
import {CashFlow} from "./pages/CashFlow/CashFlow";


function App() {

  return (
    <div className="app">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cashFlow/:company" element={<CashFlow/>}/>
        </Routes>
    </div>
  );
}

export default App;
