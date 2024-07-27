import Nav from './Nav'
import Header from './Header'

import Wrapper from './Wrapper'
import Footer from './Footer'
import { active } from './active'
import { usePage, useSelected } from './Context'

function App() {
    const { page } = usePage()
    const { selected } = useSelected()
    let show;
    page.map((p) => {
        if (p.id === selected) {
            show = p.name
        }
        return show
    })
    return (
        <Wrapper className='relative md:w-[100%] h-[100vh] w-[100%] mx-auto'>
            <div className="md:grid  mx-auto grid md:grid-cols-6 grid-cols-1 md:grid-rows-[100px] grid-rows-[100px]">
                <Nav className=''
                    actives={active}
                />
                <Header />
                { show}
            </div>
            <Footer />
        </Wrapper>
    )
}

export default App
