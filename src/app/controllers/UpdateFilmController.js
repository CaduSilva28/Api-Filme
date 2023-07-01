import managementFilm from "../utils/managementFilm";

class updateFilmController{
    async updateFilm(req, res){
        const { id, deTitle, deSinopse, dtRelease, deDiretors, deCast, deGenre, isForeigner } = req.body;
        const jsonFilm = await managementFilm.updateFilm(id, deTitle, deSinopse, dtRelease, deDiretors, deCast, deGenre, isForeigner);

        if(jsonFilm){
            res.status(200).json({ 
                success: true, message: "Filme atualizado com sucesso!", data: jsonFilm
            });
        }else{
            res.status(401).json({ 
                success: false, message: "Filme não foi encontrado" 
            });
        }      
    }
}

export default new updateFilmController();