const express=require("express");
const app =express();
// what is middleware?
// Middleware are like any general functions which takes in three parameters as request, response and next function.
// These middleware are used to execute some function before the response is send back to the client. 
// It mostly gets used for the authentication, that before we send the response, we can authenticate if the API request is called from the client with proper user credentials or not.
// These middleware can be applied on the whole application level as well as on one particular API route.
// next() function is very important, after the end of each middleware we should execute next function so that the program execution can move either to next middleware or to main route, if this function is not added then execution will not move forward.

// this is middleware 1 for specific apis by defining in their definition or apis
const middleware1=function(req,res,next){
    console.log("we are using middleware1 for specific api");
    next();
}
// this is middleware 2 for all apis by syntax app.use
const middleware2=function(req,res,next){
    console.log("we using middleware2 for all apis or global");
    next();
}

app.use(middleware2); // by using this line we use middleware for all apis or global for all apis

// here we can use specific middleware on specific apis
app.get("/",middleware1,(req,res)=>{
    res.send("<h1>This is the main page with middleware 1 and middleware2 <h1>")
})
app.get("/two",middleware1,(req,res)=>{
    res.send("<h1>This is the second page with middleware 1 and middleware2 <h1>")
})
app.get("/three",(req,res)=>{
    res.send("<h1>This is the third page with only middleware 2 <h1>")
})

app.get("/four",middleware1,(req,res)=>{
    res.send("<h1>This is the fourth page with middleware 1 and middleware2 <h1>")
})
app.get("/five",(req,res)=>{
    res.send("<h1>This is the fifth page with only middleware 2<h1>")
})
app.listen(2002);
