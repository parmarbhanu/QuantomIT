const router = require("express").Router();
const Blog=require("../models/blogModel")


// add new blog
router.post("/addblog", async (req, res) => {
    
    const { nameofexp,description,deffcuilty,subject,imgUrl,materiallist,safety,instruction} = req.body;
    // console.log(req.body)
    const newblog = new Blog({
        nameofexp,
        description,
        deffcuilty,
         subject,
         imgUrl,
         materiallist,
         safety,
         instruction
        });
   
    newblog.save()
        .then(() => res.json("added a new blog succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
});
  


router.get("/allblogs", (req, res) => {
    try {
        // console.log("searching for blogs")
        Blog.find()
        .then((blg) => res.json(blg))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
});

router.get("/singleblog/:id", (req, res) => {
    // console.log(req.params.id)
    try {
        Blog.findById(req.params.id)
        .then((blg) => res.json(blg))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
});



module.exports=router