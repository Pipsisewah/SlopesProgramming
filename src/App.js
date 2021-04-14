import './App.css';
import Router from "./Router";
import Header from "./components/Header";

function App() {
  return (
      <div className="App">
          <Header siteTitle={"Slopes Programming"}/>
        <div class="flex justify-center h-screen">
          <Router/>
        </div>
      </div>
  );
}

export default App;
