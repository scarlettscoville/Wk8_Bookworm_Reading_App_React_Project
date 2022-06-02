import AppBar from './components/AppBar';
import AddButton from './components/AddButton';
import RemoveButton from './components/RemoveButton'
import Rating from './components/Rating'

import{getUser} from './api/apiBasicAuth';
import{ CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import ProfileForm from './forms/ProfileForm'

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
  

      <RemoveButton></RemoveButton>
      <Rating></Rating>

      <LoginForm/>     

      <ProfileForm/>


      </>
  );
}

export default App;
