/* 
*----------------Mongodb connection
* create account 
* create an user with password
* whitelist ip address
* go to database> connect> driver> Node> view full code and copy the code
* paste the code in server code site and change the password in uri
*------------------------
* 
* CREATE -------POST 
* app.post("/users",async(req,res)=>{})
* make a function async to use await inside it 
* make sure you use the express.json() middleware
* access the data from the body: const user = req.body;
* const result = await userCollection.insertOne(user); ---- upora userCollection name a akta variaable thakba sakana amon thakba * const userCollection = client.db("usersDB").collection("users");
* res.send(result)

* Client ---------------------------
* create fetch 
* and second parameter as a object
* provide method: "POST"
* add headers:{"content-type":"application/json"}
* add body:JSON.stringify(user)
*-----------------------------


*READ MANY ---------------------------
* create a cursor: userCollection.find();
* const result = await cursor.toArray();


* DELETE ---------------------
* create app.delete('/users/:id',(req,res)=>{})
* specify the unique ObjectId to delete the right user
* const query = {_id: new ObjectId(id)}
*const result = await userCollection.deleteOne(query);
* res.send(result)

*CLIENT --------------------
* make a dynamic url with id in fetch 
* mention the method:DELETE


*/