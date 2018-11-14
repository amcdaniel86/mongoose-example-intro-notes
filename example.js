



























// example of a MVC pattern with router.get
router.get('/cities-list', function(req, res, next) { // <-- this CONTROLLER is.. 
  Product.find() // asking for data from the Product MODEL and ..
  .then(products => {
      const data = { products };
      res.render("products/detail", data); // ..sending a VIEW to the client
  })
  .catch(error => {
    next(error)
  })
})