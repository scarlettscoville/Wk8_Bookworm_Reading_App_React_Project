import AppBar from './components/AppBar';
import AddButton from './components/AddButton';
import RemoveButton from './components/RemoveButton'
import Rating from './components/Rating'

import{getUser} from './api/apiBasicAuth';
import{ CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';

const handleAPITest= async ()=>{
  const source = CancelToken.source();
  const response_object= await getUser("kevinb@codingtemple.com", "123abc", source.token);
  console.log(response_object)
}


function App() {
  return (
      <>
      <AppBar>
      </AppBar>
      <AddButton color='success' onClick={handleAPITest}>Test API Call</AddButton>

      <RemoveButton></RemoveButton>
      <Rating></Rating>

      <LoginForm/>      


      </>
  );
}

export default App;
