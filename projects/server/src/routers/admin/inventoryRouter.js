const router = require("express").Router();
const { inventoryController } = require("../../controllers/index");
require("dotenv/config");

router.post("/create", inventoryController.create);
router.get("/findAll/:id", inventoryController.findAll)
router.get("/findByBranch/:from/:to", inventoryController.findByBranch);
router.get("/pagProduct", inventoryController.paginationProduct);
router.get("/list/total", inventoryController.totalProduct);
router.get("/search", inventoryController.searchBy);
router.get("/sort", inventoryController.sortBy);

module.exports = router;