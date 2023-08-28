const express = require('express');
const Friendship = require('../models/friendship')
const router = express.Router();
const token = require('../token');


const secret = token.secret

// router.get('/', async (req, res) => {
//     let users = await User.find()
//     res.send(users)
//     res.end()
// })

// router.get('/:id', async (req, res) => {
//     try {
//         const user = await User.findOne({ _id: req.params.id });
//         if (user) {
//             let data = {
//                 _id: user._id,
//                 userName: user.userName,
//                 fullName: user.fullName,
//                 email: user.email,
//                 avatarFileName: user.avatarFileName,
//                 friends: user.friends,
//                 gameStats: user.gameStats
//             };
//             res.send(data);
//         } else {
//             res.status(404).send('User not found');
//         }
//     } catch (error) {
//         res.status(500).send('An error occurred');
//     }
//     finally {
//         res.end()
//     }
// });


// router.post('/regis', async (req, res) => {
//     const { userName, email } = req.body;

//     try {
//         const userNameExists = await User.findOne({ $or: [{ userName }] });
//         const emailExists = await User.findOne({ $or: [{ email }] });

//         if (userNameExists && emailExists) {
//             res.status(400).json({ error: 'Username and Email already exists' });
//         } else if (userNameExists) {
//             res.status(400).json({ error: 'Username already exists' });
//         } else if (emailExists) {
//             res.status(400).json({ error: 'Email already exists' });
//         } else {
//             bcrypt.hash(req.body.password, 10).then(async (hashedPassword) => {
//                 const user = new User({
//                     userName: req.body.userName,
//                     password: hashedPassword,
//                     email: req.body.email,
//                     fullName: req.body.fullName,
//                     avatarFileName: req.body.avatarFileName,
//                     friends: req.body.friends,
//                     gameStats: req.body.gameStats
//                 });
//                 try {
//                     await user.save();
//                     const _user = await User.findOne({ userName: req.body.userName });

//                     const friendship = new Friendship({
//                         userId: _user._id,
//                         friends: []
//                     })
//                     await friendship.save();
//                     res.status(201).json(user);
//                 } catch (err) {
//                     res.status(500).json({ error: 'Failed to save user' });
//                 }
//             });

//         }
//     } catch (error) {
//         res.status(500).json({ error: 'An error occurred' });
//     }
// });



// router.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne({ userName: req.body.userName });
//         if (user) {
//             bcrypt.compare(req.body.password, user.password).then((result) => {
//                 if (result) {

//                     const token = jwt.sign({
//                         _id: user._id,
//                         username: user.username,
//                         fullName: user.fullName,
//                         email: user.email,
//                         avatarFileName: user.avatarFileName,
//                         friends: user.friends,
//                         gameStats: user.gameStats
//                     }, secret)
//                     res.send({
//                         token: token,
//                         id: user._id,
//                         userName: user.userName,
//                         fullName: user.fullName,
//                         email: user.email,
//                         avatarFileName: user.avatarFileName,
//                         friends: user.friends,
//                         gameStats: user.gameStats
//                     })
//                     res.end()
//                     return;
//                 } else {
//                     res.status(404);
//                     res.send('Incorrect password');
//                     res.end()
//                     return;
//                 }
//             });
//         } else {
//             res.status(404);
//             res.send('Invalid user name or password');
//             res.end()
//             return;
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).send('An error occurred during login');
//     }
// });


// router.delete('/:id', async (req, res) => {
//     try {
//         await User.deleteOne({
//             _id: req.params.id
//         })
//         res.status(200)
//         res.send(await User.find())
//         res.end()
//     }
//     catch (err) {
//         res.status(500)
//         res.send(err)
//         res.end()
//     }
// })

// router.put('/:id', async (req, res) => {
//     const id = req.params.id
//     const user = await User.findOne({ _id: id })

//     if (user) {
//         user.userName = req.body.userName,
//             user.password = req.body.password,
//             user.email = req.body.email,
//             user.fullName = req.body.fullName,
//             user.avatarFileName = req.body.avatarFileName,
//             user.friends = req.body.friends,
//             user.gameStats = req.body.gameStats
//     }
//     try {
//         await user.save()
//         res.send(user)
//         res.end()
//     }
//     catch (err) {
//         res.status(505)
//         res.send(err)
//         res.end()
//     }
// })


module.exports = router