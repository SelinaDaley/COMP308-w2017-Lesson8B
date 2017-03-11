// Display the home page
module.exports.DisplayHome = (req, res) => {
    res.render('content/index', {
    title: 'Home',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}

// Display the contact page
module.exports.DisplayContact = (req, res) => {
    res.render('content/contact', {
    title: 'Contact',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
