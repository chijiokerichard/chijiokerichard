import { usePage, useSelected, useTheme, useToggle } from './Context'

import { BsMoon,} from 'react-icons/bs'
import { MdLightMode } from 'react-icons/md'
import './css/navbar.css'
import List from './List'
import { navPages} from './imgs'


function Nav({actives}) {

    
    
    const { setTheme } = useTheme()
    const { toggle } = useToggle()
    const {setPage} = usePage()
    const {selected} = useSelected()
    const {theme} = useTheme()

    activeLink()
    function activeLink(){
            switch(selected){
                case 'Home':
                    setPage(navPages[0])
                    break
                case 'About':
                    setPage(navPages[1])
                    break
                case 'Project':
                    setPage(navPages[2])
                    break
                case 'Contact':
                    setPage(navPages[3])
                    break
                default:
                    return 'not found'
            }
        
    }
// useActive(selected,setPage,pages,Li)

    return (
        <nav className={`md:grid md:z-20 z-30 bg-white shadow-2xl ${toggle && 'hidden'} na text-black grid-rows-[100px]  items-start fixed md:w-[225px]  h-full pr-3 mr-[2rem]`}>
            <div className={`text-4xl row-start-1 row-end-4
             pt-6 flex items-center justify-center gap-4 text-orange-300`} style={{ fontWeight: 'bolder' }}>
                <span className=''>DEV</span><span className=''>CJ</span>
            </div>
            
            <div className='row-start-4 row-end-5 na grid grid-cols-1 grid-row-[50% auto] md:mt-[1rem] mt-[4rem] justify-stretch items-center list-none md:gap-1 gap-3'>
                {actives.map((acti)=>
                <List  
                name={acti.name}
                key={acti.id}
                id={acti.id}
                icon={acti.icon}
                />
            )}
            </div>
            
            <div className='grid grid-cols-2  grid-rows-[100%] w-[170px]  ml-3 rounded-md list-none  place-items-center 
            justify-start h-[250px]   row-start-5 row-end-7'>
                <li className='ml-[-28px] bg-white' onClick={() => {
                    setTheme('light')

                }}> <span className={`flex pl-1  text-center  sh items-center w-[100px] h-[35px] ${theme === 'light' ?  'rounded-md shadow-lg shadow-purple-500 bg-white' :''} `}><MdLightMode /> Light</span></li>
                <li className='' onClick={() => {
                    setTheme('dark')
                }}><span className={`flex items-center justify-end pr-1 mr-2  text-black w-[85px] ${theme === 'light'? '': 'shadow-green-300 text-black  shadow-lg rounded-md' }  ml-[-10px] h-[35px]`}><BsMoon /> Dark</span></li>
            </div>
        </nav>
    )
}

export default Nav
