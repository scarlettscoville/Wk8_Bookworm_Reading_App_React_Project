import React, {useState} from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const subjects=[{id:1, name:"Horror"},{id:2, name:"Mystery"},{id:3, name:"Thriller"}]

export default function CategoryBar({handleClick=()=>{}}) {
    const [actSub, setActSub] = useState({});

    const handleActSub=(sub)=>{
      if (actSub === sub){
        setActSub({})
      }else{
        setActSub(sub)
      }
    }

  return (
    <Stack direction="row" spacing={1}>
      {subjects.map((sub)=>(
          sub===actSub?
            <Chip 
                key={sub.id} 
                size="small" 
                color="primary"  
                label={sub.name} 
                onClick={()=>{handleActSub(sub); handleClick()}} />
          :
            <Chip 
                variant="outlined" 
                size="small" 
                color="primary" 
                key={sub.id} 
                label={sub.name} 
                onClick={()=>{handleActSub(sub); handleClick()}} />
          )) }
    </Stack>
  );
}
