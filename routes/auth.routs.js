const { Router } = require('express');
const router = Router();
const User = require('../models/User');

//  /api/auth/register
router.post('/register', async (req, res) => {
try {
    const {email, password} = req.body;

} catch (e) {
    res.status(500).json({message: "/register :: error"})
}
});

module.exports = router;