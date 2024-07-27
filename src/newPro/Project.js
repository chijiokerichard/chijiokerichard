import { useContext, useEffect, useState } from 'react'
import { list } from './active'
import { projecActivetContext, useProjectPage } from './Context'
import ListOfProject from './ListOfProject'
import { projects } from './imgs'
import ProjectView from './ProjectView'



function Project() {
  const active = useContext(projecActivetContext)
  const [lists, setList] = useState(active)
  const { pro, setPro } = useProjectPage()



  useEffect(() => {
    onProject()
    return(()=>{
      onProject()
    })
  })



  function onProject() {

    switch (lists) {
      case 'All':
        setPro(projects.member)
        break
      case 'Websites':
        setPro(projects.member.map(p => p.filter(p => p.name === 'Websites')))
        break
      case 'Crud':
        setPro(projects.member.map(p => p.filter(p => p.name === 'Crud')))
        break
      case 'Games':
        setPro(projects.member.map(p => p.filter(p => p.name === 'Games')))
        break
      case 'Dashboard':
        setPro(projects.member.map(p => p.filter(p => p.name === 'Dashboard')))
        break
      default:
        setPro(projects)

    }
  }

  return (
    <div className='container md:col-start-2 col-start-1 col-end-12 row-start-2 row-end-12  mb-[3rem] md:justify-between md:items-center md:px-[3rem] '>
      <div className='items-center justify-center w-full'>
        <ul className='flex items-center  text-center justify-center mx-auto'>
          {
            list.map((li) => <div
              key={li.id}>
              <ListOfProject
                name={li.name}
                id={li.id}
                ac={active}
                setList={setList}
                active={lists === li.name}
                onProject={onProject}
              />
            </div>
            )
          }
        </ul>
      </div>
      <div>
      </div>
      <div className='md:grid md:grid-cols-3  md:w-[700px]  w-[250px] md:mx-auto my-3 gap-3 items-center mx-auto justify-items-center md:px-2 px-1 place-items-center text-center'>
        {pro.map(p => p.map(p => <ProjectView
          key={p.id}
          img={p.img}
          name={p.id}
          id={p.id}
        />
        ))}
        
    </div>
    </div>

  )
}

export default Project
