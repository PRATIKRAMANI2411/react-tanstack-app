import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TablePage from './pages/TablePage';
import FormPage from './pages/FormPage';
import { GlobalStateProvider } from './provider/GlobalStateProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <GlobalStateProvider>
            <div>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
            </div>
            <Router>
                <div className="p-4 sm:ml-64">
                    <Sidebar />
                    <div className="p-4 flex-1 w-90">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/table" element={<TablePage />} />
                            <Route path="/form" element={<FormPage />} />
                            <Route path="/form/:id" element={<FormPage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </GlobalStateProvider>
    );
}

export default App;
