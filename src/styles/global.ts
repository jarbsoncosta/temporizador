import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme['gray-900']};
    color:${(props) => props.theme['white']};
    -webkit-font-smoothing: antialiased;
}
:focus{
    outline: 0;
    //box-shadow: 0 0 0 2px ${(props) => props.theme['green-700']};
}
body, input, textarea, button, h1, h2, h3 p{
   font-family: 'DM Sans', sans-serif;
    font-weight: 400;
   


}

`
