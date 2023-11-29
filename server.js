//require('dotenv').config();
const port = 8080;
const app = require("./app")

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})