const express = require("express");
const blogRouter = express.Router();
const BlogController = require("./../controllers/blog_controller");


blogRouter.get("/blog", BlogController.index);

blogRouter.post("/blog", BlogController.create);

blogRouter.get("/blog/new", BlogController.make);

blogRouter.get("/blog/:id", BlogController.show);

blogRouter.get("/blog/edit/:id", BlogController.edit);

blogRouter.put("/blog/:id", BlogController.update);

blogRouter.delete("/blog/:id", BlogController.destroy);

module.exports = blogRouter;