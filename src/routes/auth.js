const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/', authController.protect, (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: req.user,
    },
  });
});

router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.delete('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword,
);

module.exports = router;
