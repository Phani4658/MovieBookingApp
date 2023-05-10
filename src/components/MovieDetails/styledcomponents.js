import {styled} from "styled-components"

export const MovieDetailsBg = styled.div`
padding:1em;
background: #1E1E1E;
min-height:100vh; 
@media screen and (min-width:768px){
    display:flex;
}
`

export const MovieImageBg = styled.div`
background:url(${props=>props.image});
background-size:cover;
border-radius:30px;
height:65vh;
padding:20px;
width:100%;  
@media screen and (min-width:768px){
    width:400px;
    height:450px;
    margin-right:20px;
}
@media screen and (min-width:1024px){
    width:650px;
    height:600px;
}
@media screen and (min-width:1440px){
    height:480px;
    width:360px;
}
display:flex;
align-items:flex-start;
gap:0.5em;
box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
`

export const ImageCard = styled.div`
backdrop-filter: blur(16px) saturate(180%);
-webkit-backdrop-filter: blur(16px) saturate(180%);
background-color: rgba(171, 179, 206, 0.75);
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.125);
width:fit-content;
padding:3px 10px;
display:flex;
gap:0.3em;
align-items:center;
`

export const ImageCardText = styled.p`
color:#fff;
font-size:18px;
font-weight:700;

`

export const MovieDetailsContainer = styled.div`
padding:10px 5px;
color:#fff;
@media screen and (min-width:768px){
    width:550px;
}
@media screen and (min-width:1024px){
    width:800px;
}
@media screen and (min-width:1440px){
    width:1200px;
}
`

export const MovieName = styled.div`
font-size:30px;
font-weight:700;
margin-bottom:10px;
`

export const GenreContainer = styled.div`
display:flex;
gap:1em;
margin:10px 0;
`

export const GenreCard = styled.div`
    background-color: #454545;
    border-radius: 12px;
    padding:3px 10px;
`

export const GenreText = styled.p`
color:#fff;
`

export const Description = styled.p`
color:#9e9e9e;
`

export const BookTicketsBtn = styled.button`
background-color:#FF6600;
border:none;
border-radius:8px;
margin:10px 0;
padding:10px 20px;
color:#fff;
font-weight:600;
cursor:pointer;
margin-top:20px;
`