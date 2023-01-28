import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Root from "./pages/Index";
import Admin from "./pages/Admin";
import Details from "./pages/Details";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <div className="App">
      <div className="main-nav">
        <Link to="/"><h1>Factory 58</h1></Link> | <Link to="/admin"><h2>Admin</h2></Link>
      </div>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/details/:name' element={<Details />} />
      </Routes>
      </div>
    </BrowserRouter>
);
