import mongoose from 'mongoose';
import filmModel from '../models/filmModel';
require('dotenv').config({ path: './config/homolog.env' });

const Film = mongoose.model("film",filmModel);

class managementFilm{
    acessFilm = async () => {
        return await mongoose.connect(process.env.URI_MONGO);
    }

    saveFilm = async (deTitle, deSinopse, dtRelease, deDiretors, deCast, deGenre, isForeigner) => {
        try{
            await this.acessFilm();

            const film = new Film({ 
                deTitle: deTitle,  
                deSinopse: deSinopse,
                dtRelease: new Date(dtRelease),
                deDiretors: deDiretors,
                deCast: deCast,
                deGenre: deGenre, 
                isForeigner: isForeigner
            });
    
            await film.save();

            return true;

        }catch(msgError){
            return false;
            throw new Error(msgError);
        }
    }

    findAllFilm = async () => {
        await this.acessFilm();
        return await Film.find();
    };

    findFilmForId = async (id) => {
        await this.acessFilm();
        
        try{
            return await Film.find({ '_id': id });
        }catch(msgError){
            return [];
            throw new Error(msgError);
        }
    }

    findFilmByName = async (name) => {
        await this.acessFilm();

        const regex = new RegExp(name, 'i'); 
        
        try{
            return await Film.find({ deTitle: regex });
        }catch(msgError){
            return[];
            throw new Error(msgError);
        }
    }

    deleteFilmForId = async (id) => {
        await this.acessFilm();
        return await Film.findByIdAndDelete(id);
    }

    updateFilm = async (id, deTitle, deSinopse, dtRelease, deDiretors, deCast, deGenre, isForeigner) => {
        await this.acessFilm()

        try{
            const jsonFilm = await Film.findByIdAndUpdate(id,
                {
                    deTitle: deTitle, 
                    deSinopse: deSinopse,
                    dtRelease: dtRelease, 
                    deDiretors: deDiretors, 
                    deCast: deCast, 
                    deGenre: deGenre, 
                    isForeigner: isForeigner
                },
                { new: true }
                );
            return jsonFilm
        }catch(msgError){
            return [];
            throw new Error(msgError);
        }
    }
}

export default new managementFilm();

