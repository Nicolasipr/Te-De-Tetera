const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const { verificaToken } = require('../middlewares/auth')


const router = express.Router();


//Se manda verifica token para verificar si es un usuario logeado
router.post('/usuario', (req, res) => {
    let body = req.body;
    console.log(body.password);

    let usuario = new Usuario({
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        username: body.username,
        password: bcrypt.hashSync(body.password, 10),
        createdAt: new Date()
    });

    usuario.save((err, usuarioNuevo) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            usuario: usuarioNuevo
        });
    })

});

router.get('/usuario/all', (req, res) => {
   Usuario.find({}, (err, usuarios) => {
       if (err) return err;
       res.send(usuarios)
   })
});

router.get('/usuario', verificaToken, (req, res) => {
    Usuario.find({ estado: true }, (err, usuarios) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuarios: usuarios
        });


    })
});

router.delete('/usuario/:id', verificaToken, (req, res) => {
    let id = req.params.id;
    Usuario.findByIdAndUpdate(id, { estado: false }, { new: true }, (err, usuarioEliminado) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuarios: usuarioEliminado
        });

    })

})





module.exports = router;