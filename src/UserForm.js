import {Grid, Typography, Input, Button} from '@mui/material'; // Importing Grid from Material-UI
import { useState } from 'react';

const UserForm = ({ addUser }) => {

   const [id, setId] =useState();
   const [name, setName] =useState('');

    return(

        // user MUI to create the user form without manually creating the form using html

        <Grid
        container
        spacing={2}
        sx={{
            backgroundColor: '#ffffff',
            marginBottom: '30px',
            display : 'block'
        }}
        >

         <Grid item xs={12}>
         <Typography component={'h1'} sx={{color: '#000000'}}>User Form</Typography>
         </Grid>

         <Grid item xs={12} sm={6} sx={{display: 'flex' }}>
         <Typography 
         component={'label'} 
         htmlFor="id"
         sx={{
            color: '#000000',
            marginRight:'20px',
            fontSize: '16px',
            width : '100px',
            display: 'block'

         }}>
            ID</Typography>
            <Input
            type="number"
            id="id"
            name="id"
            sx={{width : '400px'}}
            value={id}
            onChange={e => {setId(e.target.value)} } // change the id state variable value when type something on th input box
            />
         </Grid>

         <Grid item xs={12} sm={6} sx={{display: 'flex' }}>
         <Typography 
         component={'label'} 
         htmlFor="id"
         sx={{
            color: '#000000',
            marginRight:'20px',
            fontSize: '16px',
            width : '100px',
            display: 'block'

         }}>
            Name</Typography>
            <Input
            type="text"
            id="name"
            name="name"
            sx={{width : '400px'}}
            value={name}
            onChange={e => {setName(e.target.value)} }
            />
         </Grid>

         <Button
         sx={{
            margin: 'auto',
            marginBottom: '20px',
            backgroundColor: '#00c6c6',
            color : '#000000',
            marginLeft : '15px',
            marginTop : '20px',
            "&:hover" : {
                opacity : '0.7',
                backgroundColor: '#00c6c6'
            }
         }}
         onClick={() => {addUser({id: id, name:name})}} // if key and value is same name we can addd only value
         >Add</Button>

        </Grid>
    );
}

export default UserForm;