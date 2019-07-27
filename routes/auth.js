const router = require('express').Router();

router.post('/login', (req, res) => {
    res.send('login');
});

module.exports = router;