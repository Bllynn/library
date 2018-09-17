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
        dbInstance.get_book_details(+req.params.id)
    },
    logout: (req, res) => {
        req.session.destroy();
        console.log('You successfully logged out!')
        res.status(200).send(req.session);
    }
}