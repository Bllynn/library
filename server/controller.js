module.exports = {
  createUser: (req, res) => {
    const dbInstance = req.app.get("db");
    const { Username, Password } = req.body;
    dbInstance
      .create_user([Username, Password])
      .then(user => {
        req.session.user = user[0].id;
        res.status(200).send(user);
      })
      .catch(err => {
        console.log(err);
      });
  },
  login: (req, res) => {
    const dbInstance = req.app.get("db");
    const { Username, Password } = req.body;
    console.log(Username,Password)
    dbInstance
      .login([Username, Password])
      .then(user => {
        console.log(user);
        if(user.length >=1){
          req.session.user = user[0].id;
          res.status(200).send(user);
        }
        res.sendStatus(201)
      }).catch(err => {
        console.log(err);
      });
  },
  getUser: (req, res) => {
    const dbInstance = req.app.get("db");
    if (req.session.user) {
      const userId = req.session.user;
      console.log(userId)
      dbInstance
        .get_userid([userId])
        .then(user => {
          res.status(200).send(user);
        })
        .catch(err => {
          res.status(500).send({
            errorMessage:
              "Oops! Something went wrong. Our engineers have been informed!"
          });
          console.log(err);
        });
    } else {
      res.status(200).send("No current user");
    }
  },
  filterBooks: (req, res) => {
    const dbInstance = req.app.get("db");
    if (req.query.genre !== "All") {
      dbInstance
        .filter_books([req.query.genre])
        .then(filteredBooks => {
          res.status(200).send(filteredBooks);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      dbInstance
        .get_books()
        .then(library => {
          res.status(200).send(library);
        })
        .catch(err => {
          res.status(500).send({
            errorMessage:
              "Oops! Something went wrong. Our engineers have been informed!"
          });
          console.log(err);
        });
    }
  },
  getBooks: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_books()
      .then(library => {
        res.status(200).send(library);
      })
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },
  getBookDetails: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_book_details(+req.params.id)
      .then(book => {
        res.status(200).send(book);
      })
      .catch(err => {
        console.log(err);
      });
  },
  logout: (req, res) => {
    req.session.destroy();
    console.log("You successfully logged out!");
    res.status(200).send(req.session);
  },
  deleteBook: (req, res) => {
    let id = req.params.id;
    const dbInstance = req.app.get("db");
    dbInstance
      .delete_book(id)
      .then(book => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
      });
  },
  editBook:(req,res) =>{
    let id = req.params.id;
    console.log(11111,id,req.body)
    let {title, author, genre, image_url,description} = req.body
  },
  addtoCart: (req, res) => {
    let book_id = req.params.id;
    let user_id = req.session.user;
    console.log("addtoCart TEST", book_id, user_id);
    const dbInstance = req.app.get("db");
    dbInstance
      .check_cart(user_id, +book_id)
      .then(cart => {
        console.log(cart);
        if (cart.length < 1) {
          dbInstance
            .add_to_cart([user_id, book_id])
            .then()
            .catch(err => {
              console.log("11111", err);
            });
          /////////////trying to get it to add only 1 copy of each book to librarycart/////
        }
        if((cart.length === 1) && (cart[0].book_id === Number(book_id) )){
          console.log(cart.length)
          
          res.sendStatus(202)
        }
      })
      .catch(err => {
        console.log("2222222", err);
      })
  }
};
