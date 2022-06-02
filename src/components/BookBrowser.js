import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export default function BookBrowser() {
  return (
    <ImageList cols={3}>

      {books.map((self) => (
        <ImageListItem key={self.id}>
          <img
            src={`${self.img}`}
            srcSet={`${self.img}`}
            alt={self.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={self.name}
            subtitle={'$'+self.author}
            actionIcon={<>
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${self.title}`}
              >
                <InfoIcon />
              </IconButton>
              <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${self.title}`}
            >
              <AddCircleOutlineIcon />
            </IconButton>
            </>}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
const book1={
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
const book2={
  "id":2,
  "title":"Gallows Hill",
  "author":"Darcy Coates",
  "pages":480,
  "summary": "The Hull family has owned the Gallows Hill Winery for generations, living and working on the beautiful grounds where they grow their famous grapes. Until the night Mr. and Mrs. Hull settle down for the evening...and are dead by morning. When their daughter, Margot, inherits the family business, she wants nothing to do with it. The winery is valued for its unparalleled produce, but it's built on a field where hundreds of convicts were once hanged, and the locals whisper morbid rumors. They say the ground is cursed. It's been more than a decade since Margot last saw her childhood home. But now that she's alone in the sprawling, dilapidated building, she begins to believe the curse is more than real―and that she may be the next victim of the house that never rests...",
  "subject": "Horror/Thriller",
  "created_on": "June 2, 2022",
  "img":"https://res.cloudinary.com/dxmayvsdu/image/upload/v1654205886/gallowshill_bbolcz.jpg",
  "subject_id":3
}
const book3={
    "id":3,
    "title":"The Woman in the Library",
    "author":"Sulari Gentill",
    "pages":288,
    "summary": "In every person's story, there is something to hide. . . The ornate reading room at the Boston Public Library is quiet, until the tranquility is shattered by a woman's terrified scream. Security guards take charge immediately, instructing everyone inside to stay put until the threat is identified and contained. While they wait for the all-clear, four strangers, who'd happened to sit at the same table, pass the time in conversation and friendships are struck. Each has his or her own reasons for being in the reading room that morning-it just happens that one is a murderer.Award-winning author Sulari Gentill delivers a sharply thrilling read with THE WOMAN IN THE LIBRARY, an unexpectedly twisty literary adventure that examines the complicated nature of friendship and shows us that words can be the most treacherous weapons of all.",
    "subject": "Mystery",
    "created_on": "June 2, 2022",
    "img":"https://res.cloudinary.com/dxmayvsdu/image/upload/v1654205886/womaninthelibrary_uiw2ux.jpg",
    "subject_id":2
  }

const books=[book1, book2, book3]