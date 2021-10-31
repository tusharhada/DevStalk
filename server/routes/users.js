import express from 'express'
import { getLikedProjects, getMyProjects, getUser, signin, signup, updateUser} from '../controllers/users.js'

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/:id/projects', getMyProjects)
router.get('/:id', getUser)
router.patch('/:id', updateUser)
router.get('/:id/likedProjects', getLikedProjects )


export default router