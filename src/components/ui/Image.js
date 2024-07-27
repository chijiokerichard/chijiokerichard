import { Link } from "react-router-dom"
import { watchImg } from "../../data"

export  function Image(...argument){
    const all = argument.map((i)=>i)
    return <div>
        <img {...all[0]} alt={all[0].alt} />
        {watchImg.map(l=><Link to={`/pro/${l.id}`} key={l.id}></Link>
)}
        </div>
}