import React from 'react';
import useCounter from '../../hooks/useCounter';
import { ThemeContext } from "../../App";
import { LoginContext } from "../../App";




const CustomCounter = ({start}) => {
    const theme = React.useContext(ThemeContext);
    const login = React.useContext(LoginContext);
    const [counter, handleIncrement, handleDecrement] = useCounter(start);

return(
    <div style={{ background: theme.background, color: theme.fontColor }}>
        { login.currentUsername ?
            <div>
                <p>Valor actual: {counter}</p>
                <button onClick={handleDecrement}>Decrementar</button>
                <button onClick={handleIncrement}>Aumentar</button>
            </div>
            : <p>No tienes permiso para ver este módulo</p>
        }
    </div>
)


}


export default CustomCounter;