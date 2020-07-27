import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Open+Sans+Condensed:wght@300&family=Roboto&display=swap');
    
*{
    li{
        list-style: none;
    }
    button{
        all:unset;
    }
    input{
        all:unset;
    }
    a{
        text-decoration: none;
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nanum Gothic, Open Sans Condensed, Sans-Serif;
}
`