const express = require("express");
const router = express.Router();

//Images upload
//images upload help the req get the files
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

//authentication
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

//Load User
const User = require("../models/User");
const Product = require("../models/Product");

// @route POST api/product/article
// @desc Create new Product
// @access Public
router.post("/", auth, admin, (req, res) => {
  //
  let form = new formidable.IncomingForm();
  //whaever image type exxtensions will be there
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image couldnot be uploaded",
      });
    }
    const product = new Product(req.body);

    if (files.photo) {
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, doc) => {
      if (err) {
        return res.json({ success: false, err });
      }

      res.status(200).json({
        success: true,
        article: doc,
      });
    });
  });
});

module.exports = router;
