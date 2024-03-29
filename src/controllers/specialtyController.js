import specialtyservice from '../services/specialtyService'

let createSpecialty = async (req, res) => {
    try {
        let infor = await specialtyservice.createSpecialty(req.body);
        return res.status(200).json(infor)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...'
        })
    }
}

let getAllSpecialty = async (req, res) => {
    try {
        let infor = await specialtyservice.getAllSpecialty();
        return res.status(200).json(infor)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...'
        })
    }
}

let getDetailSpecialtyById = async (req, res) => {
    try {
        let infor = await specialtyservice.getDetailSpecialtyById(req.query.id, req.query.location);
        return res.status(200).json(infor)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...'
        })
    }
}

module.exports = {
    createSpecialty: createSpecialty,
    getAllSpecialty: getAllSpecialty,
    getDetailSpecialtyById: getDetailSpecialtyById
}