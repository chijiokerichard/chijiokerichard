import { useTheme} from "./Context"

function Wrapper({children,className}) {
    const {theme} = useTheme()
  return (
    <div className={`${theme === 'dark'?'bg-white text-black' : 'bg-white text-black'} ${className}`}>
    {children}
    </div>
  )
}

export default Wrapper
