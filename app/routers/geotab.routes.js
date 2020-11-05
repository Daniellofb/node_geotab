module.exports = app => {
    const creatives = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", creatives.create);
    router.get("/", creatives.findAll);
    router.get("/published", creatives.findAllPublished);
    router.get("/:id", creatives.findOne);
    router.put("/:id", creatives.update);
    router.delete("/:id", creatives.delete);
    router.delete("/", creatives.deleteAll);
  
    app.use('/api/geoteb', router);
  };