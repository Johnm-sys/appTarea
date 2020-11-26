const controlerHwork = require("../controllers/hwork-controler")
const router = require("express").Router()

router.route("/").post(controlerHwork.createHwork)
router.route("/").put(controlerHwork.updateHwork)
router.route("/").get(controlerHwork.showHwork)
router.route("/").delete(controlerHwork.deleteHwork)
router.route("/all").get(controlerHwork.showAll)

module.exports = router