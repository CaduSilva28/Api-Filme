require('dotenv').config({ path: './config/homolog.env'});
const apiKey = process.env.UUID;

const authentication = (req, res, next) => {
    const deUuid = req.header('UUID');

    if(deUuid !== apiKey){
        return res.status(403).json({
            success: false,
            message: "Chave de acesso inválida" 
        });
    }

    next();
}

export default authentication;