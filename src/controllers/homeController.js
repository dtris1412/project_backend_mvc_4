const getHomepage = (req, res) => {
  res.send("Hello World!");
};
const getABC = (req, res) => {
  res.render("abc.ejs");
};

const getXYZ = (req, res) => {
  res.render("xyz.ejs");
};
module.exports = {
  getHomepage,
  getABC,
  getXYZ,
};
