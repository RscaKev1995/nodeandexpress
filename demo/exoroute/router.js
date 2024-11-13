const express = require('express');
const router = express.Router();

let users = [
    {id: 1, name: 'Kev', email: 'kevyn@gmail.com'},
    {id: 2, name: 'Rom', email: 'romelu@gmail.com'},
];

router.get('/users', (req, res) => {
    res.status(200).json(users);
});

router.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'user not found in this fucking server' });
    }
});

router.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(403).send('name and email are required in this awful body');
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.put('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('user not found');
    }
    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    res.status(200).json(user);
});

router.delete('/users/:id', (req, res) => {
    const index = users.findIndex(user => user.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('user not found');
    }
    users.splice(index, 1);
    res.status(200).json({ message: 'user deleted with a motherfucking success' });
});

module.exports = router;