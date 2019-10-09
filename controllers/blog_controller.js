const BlogModel = require("../database/models/blog_model");

async function create(req, res) {
    //logic for creating a resource
    let { title, content } = req.body;
    let blog = await BlogModel.create({ title, content })
        .catch(err => res.status(500).send(err));
    res.redirect("/blog");
}

async function index(req, res) {
    //showed a list of all the resources
    let blog = await BlogModel.find();
    res.render("blog/index", {blog});
}

function make(req, res) {
    //shows the form to create the resource
    res.render("blog/new");
}

const show = async (req, res) => {
    let {id} = req.params;
    let blog = await BlogModel.findById(id) //any mongoose specific interaction returns a promise
        .catch(err => res.status(500).send(err))
    res.render("blog/show", {blog});
}

const edit = async (req, res) => {
    let {id} = req.params;
    let blog = await BlogModel.findById(id)
        .catch(err => res.status(500).send(err))
    res.render("blog/edit", {blog})
}

const update = async (req, res) => {
    let { id } = req.params
    let { title, content} = req.body
    await BlogModel.findByIdAndUpdate(id, {title, content})
        .catch(err => res.status(500).send(err));
    res.redirect(`/blog/${id}`)
}

const destroy = async (req, res) => {
    let { id } = req.params
    await BlogModel.findByIdAndDelete(id)
        .catch(err => res.status(500).send(err));
    res.redirect('/blog');
}

module.exports = {
    create,
    index,
    make,
    show,
    edit,
    update,
    destroy
}