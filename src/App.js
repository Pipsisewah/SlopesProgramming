import './App.css';
import Router from "./Router";
import Header from "./components/Header";
import {ToastProvider} from "react-toast-notifications";

function App() {
  return (
      <div className="App">
          <Header siteTitle={"Slopes Programming"}/>
        <div class="flex justify-center h-screen">
            <ToastProvider>
          <Router/>
            </ToastProvider>
        </div>
      </div>
  );
}

export default App;
