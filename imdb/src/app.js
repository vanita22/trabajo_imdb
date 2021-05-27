const express = require('express');
const app = express();
const logger = require("morgan");
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');
const hbs = require('nodemailer-express-handlebars');
const dotenv = require('dotenv').config();

const actorsRoutes = require('./routes/actors.routes.js');
const directorsRoutes = require('./routes/directors.routes.js');
const usersRoutes = require('./routes/users.routes.js');
const contentsRoutes = require('./routes/contents.routes.js');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(logger('combined', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
app.use(express.json());

app.get("/", (req, res) => res.json({"academlo-api": "1.0.0"}));

app.use("/api/v1/", actorsRoutes);
app.use("/api/v1/", directorsRoutes);
app.use("/api/v1/", usersRoutes);
app.use("/api/v1/", contentsRoutes);

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('tenemos intentalo más tarde.');
});

const createToken = (payload) => {
	try{
		const token = jwt.sign(payload, process.env.JWT_KEY, {
		   expiresIn: "2 days"
		});
		return token;
	}catch(error){
		return error;
	}
}

const userRowDB = {
	id: 1,
	email: "mauricio@gmail.com"
}

//Creará el token a partir del registro de usuario que se ha autenticado
createToken(userRowDB);

const verifyToken = ((req, res, next) => {
    const token = req.headers['access-token'];

if (token) {
  jwt.verify(token, "clavesecreta", (err, decoded) => {      
    if (err) {
      return res.json({ mensaje: 'Token inválido' });    
    } else {
      req.decoded = decoded;    
      next();
    }
  });
} else {
  res.send({ 
      mensaje: 'Token no proporcionado.' 
  });
}
});

router.get('/users', verifyToken, getAll);

module.exports = app;
