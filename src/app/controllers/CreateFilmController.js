import managementFilm from '../utils/managementFilm';

class createFilmController{
    async createFilm(req, res){
        const { deTitle, deSinopse, dtRelease, deDiretors, deCast, deGenre, isForeigner } = req.body;
     
        const ret = await managementFilm.saveFilm(
            deTitle, 
            deSinopse,
            dtRelease, 
            deDiretors, 
            deCast, 
            deGenre, 
            isForeigner
        );
        
        if(ret){
            res.status(201).json({ 
                success: true, message: "Filme cadastrado com sucesso" 
            });
        }else{
            res.status(500).json({ 
                success: false, message: "Falha ao ao cadastrar filme" 
            });
        }      
    }
}

export default new createFilmController();