import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Public from './components/Public';
import Protected from './components/Protected';
import  useAuth from './hooks/useAuth';




function App(){
  const isLogin = useAuth();

  return isLogin ?  <Protected/> : <Public/>;

}

export default App;