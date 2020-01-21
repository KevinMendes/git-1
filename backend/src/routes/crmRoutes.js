const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
        //     //middleware
        //     console.log(` request de ${req.originalUrl}`)
        //     console.log(` request type : ${req.method}`)
        //     next()
        // }, (req, res, next) => {
            res.send('Le GET est fait');
        })
            
        .post((req, res) =>
            res.send('Le POST est fait'))
            
    app.route('/contact/:contactId')
        .put((req, res) =>
            res.send('Le PUT est fait'))
        .delete((req, res) =>
            res.send('Le DELETE est fait'))
}

export default routes;