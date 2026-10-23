const Post = require("./model/post.models")
const User = require("./model/user.models")
require("./db/db.connect")

const addUser = {
    name: "Pritam",
    email: "Pritam@gmail.com"
}

const addUsers = async() =>{
    try{
        const newUser = new User(addUser)
        await newUser.save()
    }
    catch(error){
        console.log("Error while add user")
    }
}
// addUsers()

const postData = {
    title: "Greeting",
    content: "Have a good Day",
    author: "6adb45628ef0619a9ba00fa4"
}

const postUser = async() =>{
    try{
        const newPost = new Post(postData)
        await newPost.save()
    }
    catch(error){
        console.log(error)
    }
}
// postUser()

const getAllPost = async() =>{
    try{
        const allPost = await Post.find().populate("author")
        console.log("All Post", allPost)
    }
    catch(error){
        console.log("Error", error)
    }
}
getAllPost()
