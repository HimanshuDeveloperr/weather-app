import Home from "./Components/Home/Home";

import { Route ,Routes} from "react-router-dom";
import City from "./Components/Cities/City";



function App() {
  return (
    
       <Routes>
           <Route path="/" Component={Home}/>
           
       </Routes>
      
    
  );
}

export default App;
