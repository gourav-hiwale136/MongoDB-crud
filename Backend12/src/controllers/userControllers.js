

const getUsers = (req,res)=>{
    res.send("All Users")
};


const createUsers = (req,res)=>{
    res.send("New User Created")
}

export {getUsers,createUsers}