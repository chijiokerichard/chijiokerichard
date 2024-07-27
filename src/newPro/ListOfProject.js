
function ListOfProject({id,name,active,setList}) {
  return <li onClick={()=>{
    setList(id)

  }} className={` flex items-center justify-center  pl-0 py-0 md:mx-3 mx-1  items-centers  ${active?
    `text-slate-700 border-orange-500 border-[2px] border-r-0  border-l-0 border-t-0`:
    'text-slate-700'}`}>{name}</li>
}

export default ListOfProject
