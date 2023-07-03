import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";

function App() {
  return (
    <div>
      {/* <div className=" flex:col bg-gray-300 sm:flex h-screen ">
        <div className=" w-screen h-44 sm:h-screen sm:w-2/5 bg-black flex justify-center text-white items-center font-extrabold text-5xl">
          BOARD .
        </div>
        <div className=" w-screen h-fit sm:w-4/5 bg-black">
          <Login />
        </div>
      </div> */}
      <Dashboard />
    </div>
  );
}

export default App;
