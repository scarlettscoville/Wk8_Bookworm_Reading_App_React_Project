import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MyBook() {

    const book={
        "id": 1,
        "title": "The House",
        "author": "Christina Lauren",
        "pages": 367,
        "summary": "Delilah and Gavin’s new love is threatened by a force uncomfortably close to home in this haunting novel from New York Times bestselling duo Christina Lauren, authors of Beautiful Bastard.",
        "subject": "Horror/Thriller",
        "created_on": "June 2, 2022",
        "img":"https://res.cloudinary.com/dxmayvsdu/image/upload/v1654205886/thehouse_qsekpo.jpg",
        "subject_id":1
      }

  return (
      <Grid container spacing={1} sx={{m:1, pr:2, border: '1px solid', borderRadius:1}}>
        <Grid book sm={12} xs={12} md={12}>
          <Item sx={{display:"flex",  justifyContent:"center"}}>
            <Avatar alt={book.title} sx={{height:'30%', width:'30%'}} variant="rounded" src={book.img}/>
          </Item>
        </Grid>
        <Grid book sm={12} xs={12} md={12}>
          <Item sx={{height:'100%', alignContent:"center"}}>
              <Typography variant="subtitle1"> 
                <strong>Author:</strong>
              </Typography>
              <Typography variant="body1"> 
                {book.author}
              </Typography>
          </Item>
        </Grid>
        <Grid item sm={6} xs={6} md={6}>
          <Item sx={{height:'100%'}}>
              <Typography variant="subtitle1"> 
                <strong>Pages:</strong>
              </Typography>
              <Typography variant="body1"> 
                {book.pages}
              </Typography>
          </Item>
        </Grid>
        <Grid item sm={6} xs={6} md={6}>
          <Item sx={{height:'100%'}}>
              <Typography variant="subtitle1"> 
                <strong>Item ID:</strong>
              </Typography>
              <Typography variant="body1"> 
                {book.id}
              </Typography>
          </Item>
        </Grid>
        <Grid item sm={12} xs={12} md={12}>
          <Item sx={{height:'100%'}}>
              <Typography variant="subtitle1"> 
                <strong>Summary:</strong>
              </Typography>
              <Typography variant="body1"> 
                {book.summary}
              </Typography>
          </Item>
        </Grid>
        <Grid item sm={12} xs={12} md={12}>
          <Item sx={{height:'100%'}}>
              <Typography variant="subtitle1"> 
                <strong>Genre:</strong>
              </Typography>
              <Typography variant="body1"> 
                {book.subject}
              </Typography>
          </Item>
        </Grid>
      </Grid>
  );
}