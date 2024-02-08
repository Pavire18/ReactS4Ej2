import './App.css';
import ApisInfoGroup from './components/ApisInfoGroup';
import React from 'react';
import Login from './components/Login/Login';
import CustomCounter from './components/CustomCounter/CustomCounter';

// Antiguo import previo a usar lazy
// import LongText from './components/LongText/LongText';

// Contextos
export const ThemeContext = React.createContext();
export const LoginContext = React.createContext();

const themes = {
  light: {
    name: "Light",
    background: "#FFF",
    fontColor: "#000",
  },
  dark: {
    name: "Dark",
    background: "#000",
    fontColor: "#FFF",
  }
}

// Componentes dinámicos
const LongTextLazy = React.lazy(() => import('./components/LongText/LongText'));

function App() {




  // Estados
  const [themeState, setThemeState] = React.useState(themes.dark);
  const [userState, setUserState] = React.useState();

  const updateUserInfo = (username) => {
    setUserState(username);
  }

  const loginProviderValue = {
    currentUsername: userState,
    updateUserInfo: updateUserInfo,
  }

  return (
    <ThemeContext.Provider value={themeState}>
    <LoginContext.Provider value={loginProviderValue}>
      <div className="App">

        <h2>Login:</h2>

        <Login></Login>

        <h2>Temas (contextos)</h2>
        <p>Tema actual: {themeState.name}</p>
        <button onClick={() => setThemeState(themeState === themes.light ? themes.dark : themes.light)}>Cambiar tema</button>


        <h2>Contador 1:</h2>
        <CustomCounter start={70}/>
        <h2>Contador 2:</h2>
        <CustomCounter start={20}/>

          <h2>Componente lazy:</h2>
          <React.Suspense fallback={<div>Cargando...</div>}>
            <LongTextLazy></LongTextLazy>
          </React.Suspense>



        <h2>Peticiones a la API</h2>

        <ThemeContext.Provider value={themeState}>
          <ApisInfoGroup></ApisInfoGroup>
        </ThemeContext.Provider>

      </div>
    </LoginContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
