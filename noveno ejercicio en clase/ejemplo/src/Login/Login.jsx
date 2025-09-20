import { useRef } from 'react';
import {getContext} from '../Contexto/Contexto';

export default function Login(){

    const {Autenticar} = getContext()
    const user = useRef();
    const pass = useRef();
    
    return (
        <div>

            <input type="text" ref={user}/>
            <input type="password" ref={pass}/>
            <button onClick={()=>Autenticar(user.current.value, pass.current.value)}>Login</button>

        </div>

    )

}