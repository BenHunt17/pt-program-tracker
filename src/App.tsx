import Header from "./main/Header";
import Sidebar from "./main/sidebar/Sidebar";

export default function App() {
  return (
    <div className="bg-green-50 h-screen flex flex-col">
      <div className="flex-none z-10">
        <Header />
      </div>
      <div className="flex-grow">
        <Sidebar />
      </div>
    </div>
  );
}
