import bcrypt from "bcryptjs"

const users=[
    {
        name:"Admin User",
        email:"admin@email.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:":majid",
        email:"majid@email.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
    {
        name:"User",
        email:"user@email.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
]

export default users