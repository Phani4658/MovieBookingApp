import { styled } from "styled-components"

export const MainBackground = styled.main`
background-color:#1E1E1E;
min-height:100vh;
padding:20px;
`

export const MainHeading = styled.h1`
color:#fff;
font-size:2em;
margin-bottom:1em;
`

export const MoviesContainer = styled.ul`
margin:auto;
padding:0.5em;
display:flex;
align-items:center;
overflow-x:scroll;

`

export const ViewContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

export const FailureHeading = styled.h1`
color:#fff;
text-align:center;
margin:10px 0; 
`

export const PrimaryButton = styled.button`
color:white;
background-color:#006fff;
width:180px;
margin:auto;
border-radius:8px;
border:none;
padding:10px;

`