import './App.css';
import Router from "./Router";
import {ToastProvider} from "react-toast-notifications";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
      <div className="App flex flex-col h-screen justify-between">
          <Header/>
          <div className="flex-grow min-h-screen">
                <ToastProvider>
              <Router/>
                </ToastProvider>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
