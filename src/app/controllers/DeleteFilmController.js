import managementFilm from "../utils/managementFilm";

class deleteFilmController{
    async deleteFilm(req, res){
        const id = req.params.id;

        try{
            await managementFilm.deleteFilmForId(id);
            res.status(200).json({ success: true, message: "Filme deletado" });
        }catch(msgError){
            res.status(401).json({ success: false, message: "Filme não encontrado" });
            throw new Error(msgError);
        }
    }
}

export default new deleteFilmController();