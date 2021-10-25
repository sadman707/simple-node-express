const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

/* const handler = (req, res) => {
    res.send('Hello from node');
} */

app.get('/', (req, res) => {
    res.send('Hello from my first node');
});

const users = [
    { id: 0, name: 'Sadman', email: 'sadman@gmail.com', phone: '017894948564' },
    { id: 1, name: 'Sakib', email: 'Sakib@gmail.com', phone: '01789496668' },
    { id: 2, name: 'Saknur', email: 'Shabnur@gmail.com', phone: '01789494888' },
    { id: 3, name: 'Sabbana', email: 'Shabana@gmail.com', phone: '01789494888' },
    { id: 4, name: 'sanchon', email: 'kanchon@gmail.com', phone: '01789494888' },
    { id: 5, name: 'sarabonti', email: 'shrabonti@gmail.com', phone: '01789494888' },
    { id: 6, name: 'Sachorita', email: 'Suchorita@gmail.com', phone: '01789494888' },

]

app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
    res.send(users)
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;

    newUser.id = users.length;
    users.push(newUser);

    console.log('Hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);

})
// Dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'oranges']);
})

app.get('/fruits/mangoes/lengra', (req, res) => {
    res.send('yummy yummy');
})

app.listen(port, () => {
    console.log('listening to port', port);
});