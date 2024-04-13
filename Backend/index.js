import express from 'express';
const app = express();


 const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/jokes',(req, res) =>{
    const jokes =[
        {
            joke: "I'm a cat",
            author: "<NAME>"
        },
        {
            joke: "I'm a dog",
            author: "<NAME>"
        },
        {
            joke: "I'm a horse",
            author: "<NAME>"
        },
        {
            joke: "I'm a turtle",
            author: "<NAME>"
        },
    ]
    res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});