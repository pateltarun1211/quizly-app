module.exports = async(res, req) => {
    res.render('submissions', { user : req.verifiedUser.user })
}