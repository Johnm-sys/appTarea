const modelHwork = require("../models/hwork-model")
const createSearchParams = require("../utils/createSearchParams")

class ControlerHwork {
    createHwork = async(req, res) => {
        try {
            const hwork = new modelHwork(req.body)
            const saveHwork = await hwork.save()
            res.status(200).json(saveHwork)
        } catch (error) {
            console.log(error.message)
            res.status(401).json(error)
        }
    }
    updateHwork = async(req, res) => {
        try {
            const [homework] = await modelHwork.find({ _id: req.body.id })
            await homework.updateOne({ name: req.body.name, description: req.body.description, accomplished: req.body.boolean })
            res.status(200).json(homework)
        } catch (error) {
            console.log(error.message)
            res.status(401).json(error)
        }

    }
    deleteHwork = async(req, res) => {
        try {
            const homework = await modelHwork.deleteOne({ _id: req.body.id });
            res.status(200).json(homework)
        } catch (error) {
            console.log(error.message)
            res.status(401).json(error)
        }


    }
    showHwork = async(req, res) => {
        try {
            const datos = createSearchParams(req.query)
            const [showhwork] = await modelHwork.find({ _id: datos._id })

            res.status(200).json(showhwork)
        } catch (error) {
            console.log(error.message)
            res.status(401).json(error)
        }
    }
    showAll = async(req, res) => {
        try {
            // const datos = createSearchParams(req.query)
            const showhwork = await modelHwork.find({})

            res.status(200).json(showhwork)
        } catch (error) {
            console.log(error.message)
            res.status(401).json(error)
        }
    }

}
const controlerHwork = new ControlerHwork()
module.exports = controlerHwork