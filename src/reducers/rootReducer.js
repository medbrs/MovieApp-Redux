import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../actions/actiontypes";
import uuid from 'uuid'

const initialState = [
        { image : 'https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
  title : 'Mr Robot',
  year : '2015',
  rating : 5,
  id: uuid(),
  descriptions : 'Elliot Alderson is a young computer scientist living in New York, who works as a computer security technician for Allsafe Security. ... Elliot encounter " Mr . Robot ", a mysterious anarchist who wants to recruit him into his group of hackers known as" Fsociety ".'
  
},

{
image : 'https://m.media-amazon.com/images/M/MV5BNDg4NjU3MTYzNl5BMl5BanBnXkFtZTgwNzE2MDU2MjE@._V1_.jpg',
title : 'Who Am i ',
year :  '2014',
rating : 4,
id: uuid(),
descriptions : "Benjamin Engel, a hacker from Berlin, sits in an interrogation room. The officer in charge told Hanne Lindberg, head of Europol's Cyber ​​Division, that Benjamin had asked to be interrogated. Benjamin claims to have information about FRI3NDS, a notorious four-member hacker group connected to the Russian cyber-mafia, and about MRX, a famous Darknet figure. He asks for Hanne's attention before revealing his information."
},

{image : 'http://fr.web.img5.acsta.net/c_215_290/pictures/19/06/13/16/39/3685647.jpg',
title : 'Fast & Furious',
year : '2013',
rating : 2,
id: uuid(),
descriptions : 'When night falls, Dominic Toretto reigns on the streets of Los Angeles at the head of a team of faithful who share his taste for risk, his passion for speed and his cult of sports cars launched at over 250 km / h in urban rodeos of rare violence. His days are devoted to tinkering and revamping high-end models, to make them ever more efficient and more visible, and to organize illicit games.'
}
    ]


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MOVIE:
            return [...state,action.payload]
            case DELETE_MOVIE: 
            return state.filter(el => el.id !== action.payload)
            case EDIT_MOVIE:
                return state.map(el => el.id === action.payload.id ? action.payload : el)
            default :
            return state;
    }
    
}




export default rootReducer;
