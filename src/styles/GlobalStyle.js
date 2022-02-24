import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* :root{
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3); 
    --white-color: #fff;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-light-color-2:#151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

} */

.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #191d2b;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: ##878484;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3); 
    --white-color: #fff;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-light-color-2:#151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.08rem;
}

body{
background-color: var(--background-dark-color);
color: var(--font-light-color);
transition: all 0.5s ease-in-out;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

a{
    font-family: inherit;
    color: inherit;
    font-size: 0.9rem;
}

h1{
    font-size: 3rem;
    color: var(--white-color);
    span{
        font-size: 3rem;
    }
}

span{
    color: var(--primary-color);
}



.light-dark-mode {
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: white;
    }
  }

  .ham-burger-menu{
        position: absolute;
        z-index: 15;
        width: 34px;
        height: 25px;
        display: none;
        
        cursor: pointer;
      
      
        span {
          width: 100%;
          height: 3px;
          border-radius: 4px;
          background-color: #fff;
        }
  }
  

  .nav-toggle{
      transform: translateX(0);

  }
  @media screen and (max-width: 1200px){
      .ham-burger-menu{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          left: 93%;
          top: 3.5%;
          position: fixed;
      }
    .ham-burger-menu span{
        display: block;
    }
  }
  @media screen and (max-width: 490px){
      .ham-burger-menu{
          left: 90%;
      }
  }

  @media screen and (max-width: 348px){
    .ham-burger-menu{
        left: 90%;
       position: fixed;
    }
  }

`;

export default GlobalStyle;
