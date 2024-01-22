import "./App.css";

function App() {
  return (
    <div className="">
      <p className="bg-green-50 text-6xl text-center border-6">DrakMod</p>
      <p className="font-sans hover:bg-sky-700">Hover</p>
      <div className="flex flex-rox">
        <div className="basis-1/6 md:basis-1/4 sd:basis-1/2 bg-gray-500">1</div>
        <div className="basis-1/6 md:grow h-14  bg-gray-500">2</div>
        <div className="basis-1/6 md:basis-1/4 sd:basis-1/2 bg-gray-500">3</div>
        <div className="basis-1/6 md:basis-1/4 sd:basis-1/2 bg-gray-500">4</div>
      </div>
    </div>
  );
}

export default App;
