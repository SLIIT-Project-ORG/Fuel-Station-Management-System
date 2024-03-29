const router = require('express').Router();
const Admin = require('../models/AdminModel');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");

router.post('/signup', async (req, res) => {

    try {
        const admin = await Admin.findOne({ username: req.body.username });
        if (admin) {

            return res.status(409)
                .send({ message: "Admin with given username already exist" })
        }

        await new Admin(req.body).save();
        res.status(201)
            .send({ message: "Admin profile created successfully" });
    }
    catch (error) {
        res.status(500)
            .send({ message: "Internal Server Error" });
    }
})

router.post('/login', async (req, res) => {

    try {
        const admin = await Admin.findOne({ username: req.body.username });
        if (!admin) {

            return res.status(401).send({ message: "Invalid username or Password" });
        }

            req.body.password, admin.password

        if (req.body.password != admin.password){

            return res.status(401).send({ message: "Invalid username or Password" });
        }

        const token = admin.generateAuthToken();
        res.status(200).send(
            {
                data: token,
                message: "Logged in successfully"
            }
        );
    }
    catch (error) {
        res.status(500).send(
            {
                message: "Internal Server Error",
                err:error.message
            }
        )
    }

})

router.get('/', (req, res) => {
    Admin.find()
        .then((data) => {

            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        })
})


router.get('/:id', (req, res) => {
    Admin.findById(req.params.id)
        .then((data) => {

            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        })
})


router.put('/update/:id', async (req, res) => {
    const admin = req.body;

    Admin.findByIdAndUpdate(req.params.id, admin)
        .then(() => {

            res.json("Admin updated successfully");
        })
        .catch((err) => {

            res.json(err);
        })

})

router.delete('/delete/:id', (req, res) => {
    Admin.findByIdAndRemove(req.params.id)
        .then(() => {

            res.json("Admin deleted successfully");
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;