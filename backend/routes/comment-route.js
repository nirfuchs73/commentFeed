const commentService = require('../services/comment-service.js');
// const reviewService = require('../services/review-service.js')

// function checkAdmin(req, res, next) {
//     console.log('INSIDE MIDDLEWARE: ', req.session.user);
//     if (!req.session.user || !req.session.user.isAdmin) {
//         res.status(401).end('Unauthorized');
//         return;
//     }
//     next();
// }

function addCommentRoutes(app) {
    // COMMENTS REST API:

    // LIST
    app.get('/comment', (req, res) => {
        const filterBy = req.query;
        // console.log('FILTER BY', filterBy);
        commentService.query(filterBy)
            .then(comments => res.json(comments));
    })

    // SINGLE - GET Full details
    app.get('/comment/:commentId', (req, res) => {
        const commentId = req.params.commentId;
        commentService.getById(commentId)
            .then(comment => res.json(comment))
            .catch(err => {
                console.error('Problems:', err);
                res.status(500).send('Comment not Found');
            });
    })

    // DELETE
    // app.delete('/comment/:commentId', checkAdmin, (req, res) => {
    //     const commentId = req.params.commentId;
    //     commentService.remove(commentId)
    //         .then(() => res.end())
    //         .catch(err => {
    //             res.end('Not able to remove comment');
    //         })
    // })

    // CREATE
    // app.post('/comment', checkAdmin, (req, res) => {
    app.post('/comment', (req, res) => {
        const comment = req.body;
        commentService.add(comment)
            .then(comment => res.json(comment))
            .catch(err => {
                res.end('Not able to create comment');
            })
    })

    // UPDATE
    // app.put('/comment/:commentId', checkAdmin, (req, res) => {
    //     const comment = req.body;
    //     commentService.update(comment)
    //         .then(comment => res.json(comment))
    //         .catch(err => {
    //             res.end('Not able to update comment');
    //         });
    // })
}

module.exports = addCommentRoutes;