const user = [
    {name:'Temo',   age:25},
    {name:'Lasha',  age:21},
    {name:'Ana',    age:28}
]

let newUser = user.sort((p1,p2)=>{return p1.age-p2.age});

console.log(newUser[0].name)


