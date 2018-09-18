module.exports = {
    createUser:(req,res)=>{
        const dbInstance=req.app.get('db')
        const {Username, Password}=req.body
        dbInstance.create_user([Username,Password]).then(user=>{
            req.session.user = user[0].id
            res.status(200).send(user);
        }).catch(err=>{
            console.log(err)
        })
    },
    login: (req,res) =>{
        const dbInstance = req.app.get('db')
        const {Username,Password}=req.body
        dbInstance.login([Username,Password]).then(user=>{
            req.session.user = user[0].id
            res.status(200).send(user);
        }).catch(err=>{
                console.log(err)
        })
    },
    getUser: (req, res) => {
        const dbInstance = req.app.get('db');
        if(req.session.user){
            const userId = req.session.user
            dbInstance.get_user([userId])
                .then( user => {
                    res.status(200).send( user )
                })
                .catch( err => {
                    res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                    console.log(err)
                } );
        } else {
            res.status(200).send("No current user");
        }
    },
    filterBooks:(req,res)=>{
        const dbInstance = req.app.get('db');
        if(req.query.genre !== "All"){
            dbInstance.filter_books([req.query.genre]).then(filteredBooks=>{
                res.status(200).send(filteredBooks)
            }).catch(err=>{
                console.log(err)
            });
        }else{
            dbInstance.get_books().then(library=>{
                res.status(200).send(library)
            }).catch(err=>{
                res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err)
        })
        }
    },
    getBooks:(req,res)=>{
        const dbInstance = req.app.get('db');
        dbInstance.get_books().then(library=>{
            res.status(200).send(library)
        }).catch(err=>{
            res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        })
    },
    getBookDetails:(req, res)=>{
        
        const dbInstance = req.app.get('db');
        dbInstance.get_book_details(+req.params.id).then(book=>{
            res.status(200).send(book)
        }).catch(err=>{
            console.log(err)
        });
    },
    logout: (req, res) => {
        req.session.destroy();
        console.log('You successfully logged out!')
        res.status(200).send(req.session);
    },
    deleteBook:(req,res)=>{
        let id = req.params.id
        const dbInstance = req.app.get('db');
        dbInstance.delete_book(id).then(book=>{
            res.sendStatus(200)
        }).catch(err=>{
            console.log(err)
        });
    }
}