const router = require("express").Router();
const { inventoryController } = require("../../controllers/index");
require("dotenv/config");

router.post("/create", inventoryController.create);
router.patch("/update/:id", inventoryController.update);
router.patch("/total/:BranchId", inventoryController.totalInventory);
router.get("/find/:BranchId", inventoryController.stockTaken);
router.get("/findByBranch/:from/:to", inventoryController.findByBranch);
router.get("/findAllByBranch/:BranchId", inventoryController.findAllByBranch);
router.get("/list/total", inventoryController.totalProduct);
router.get("/search", inventoryController.searchBy);
router.get("/sort", inventoryController.sortBy);
router.get("/pagInventory", inventoryController.paginationAdmin);
router.get("/pagDepok", inventoryController.paginationDepok);
router.get("/pagJaksel", inventoryController.paginationJaksel);
router.get("/pagJaktim", inventoryController.paginationJaktim);
router.get("/totalInv", inventoryController.totalInvAll);
router.get("/byBranchId/:BranchId", inventoryController.findInvByBranch);
router.get("/invDepok", inventoryController.findInvDepok);
router.get("/invJaksel", inventoryController.findInvJaksel);
router.get("/invJaktim", inventoryController.findInvJaktim);

module.exports = router;