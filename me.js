const check = [
    {id:false,name:'one'},
    {id:true,name:'two'},
    {id:false,name:'three'},
]

const isSomeTrue = check.some(p=>p.id)
console.log(isSomeTrue)