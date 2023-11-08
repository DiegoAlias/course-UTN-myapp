import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card
        img=""
        name="DINOSAURUS"
        description="Tiranosaurus Rex"
        price="$10000"
        sku="403234"
        stock="5"
      />
    </div>
  );
}

export default App;
