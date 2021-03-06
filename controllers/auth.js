const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const {generateJWT} = require("../helpers/jwt")

const createUser = async (req, res = response) => {
    const { email, password } = req.body

    try {

        let user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: "email already exists"
            })
        }
        user = new User(req.body);

        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt)

        await user.save();
        //generar jwt
        const token = await generateJWT(user.id, user.name)
        
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "contact the administrator"
        })
    }

}


const loginUser = async (req, res = response) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: "user does not exists"
            })
        }
        //confirmar los password
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "password invalid"
            })
        }
        //generar JWT 
        const token = await generateJWT(user.id, user.name)
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "contact the administrator"
        })
    }

    
}
const revalidateToken = async (req, res = response) => {

    const uid = req.uid;
    const name = req.name;
    const token = await generateJWT(uid, name)
    res.json({
        ok: true,
        uid,
        name,
        token
    })
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken
}