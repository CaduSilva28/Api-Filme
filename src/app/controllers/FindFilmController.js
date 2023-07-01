import managementFilm from "../utils/managementFilm";

class findFilmController{
    async findFilm(req, res){
        try{
            const jsonFilm = await managementFilm.findAllFilm();
            res.status(200).json({ success: true, data: jsonFilm });
        }catch(msgError){
            res.status(500).json({ success: false, message: "Ocorreu um erro no servidor" });
            throw new Error(msgError);
        }
    }

    async findFilmForId(req, res){
        const id = req.params.id;
        const jsonFilm = await managementFilm.findFilmForId(id);

        if(jsonFilm.length > 0){
            res.status(200).json({ success: true, data: jsonFilm });
        }else{
            res.status(401).json({ success: false, message: "Filme não encontrado" });
        }   
    }

    async findFilmByName(req, res){
        const deTitle = req.params.deTitle;
        const jsonFilm = await managementFilm.findFilmByName(deTitle);

        if(jsonFilm.length > 0){
            res.status(200).json({ success: true, data: jsonFilm });
        }else{
            res.status(401).json({ success: false, message: "Nenhum filme foi encontrado" });
        }
    }
}

export default new findFilmController();