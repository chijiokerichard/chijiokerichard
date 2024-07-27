import Contact from './Contact'
import Home from './Home'
import Project from './Project'
import About from './About'
import a from './imgs/projectimg/dice.png'
import b from './imgs/projectimg/porfoli.jpg'
import c from './imgs/shop/cat-3.png'
import d from './imgs/projectimg/dashbord.jpeg'
import e from './imgs/shop/cat-5.png'
import f from './imgs/shop/cat-9.png'
import g from './imgs/page/login-1.png'


export const imgs = [a, b, c, d, e, f,g]

export const projects = {

    member :[ [{
        name: 'Games',
        img: imgs[0],
        id: 'dice game',
    },
    {
        name: 'Games',
        img: imgs[5],
        id: 'winter',
    },
    {
        name: 'Games',
        img: imgs[4],
        id: 'dice',
    }],
    [{
            name: 'Websites',
            img: imgs[1],
            id: 'portfolio'
        },
    ],
    [{
            name: 'Crud',
            img: imgs[2],
            id: 'todo list'
        },

    ],
    [{
            name: 'Dashboard',
            img: imgs[3],
            id: 'fin tech'
        },
    ]
    ]

}




const home = [
    {
        id: 'Home',
        name: <Home />
    }

]

const about = [
    {
        id: 'About',
        name: <About />
    }

]

const project = [
    {
        id: 'Project',
        name: <Project />
    }

]

const contact = [
    {
        id: 'Contact',
        name: <Contact />
    }

]

export const navPages = [home, about, project, contact]

