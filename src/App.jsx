
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {


  return (
    <main className="sm:flex sm:justify-center sm:items-center sm:h-screen">
      <section className="sm:grid sm:grid-cols-2 sm:shadow-xl sm:rounded-3xl sm:overflow-hidden sm:w-[32rem]">
      <Header />
      <Main />
      </section>
    </main>
  );
}

export default App;
