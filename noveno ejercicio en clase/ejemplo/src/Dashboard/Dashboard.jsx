import { getContext } from "../Contexto/Contexto"

export default function Dashboard(){

    const {sesion} = getContext()

    return(
        <div>

            <h1>Dashboard {sesion}</h1>

        </div>
    )
}