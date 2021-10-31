import express from 'express'

import {getTrending, getProjectsBySearch, getProjects, getProject, createProject, updateProject, likeProject, deleteProject, getPlayoffs } from '../controllers/projects.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/trending', getTrending)
router.get('/search', getProjectsBySearch)
router.get('/playoffs', getPlayoffs)
router.get('/:id', getProject);
router.get('/', getProjects)

router.post('/', auth, createProject)
router.patch('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);
router.patch('/:id/likeProject', auth, likeProject);

export default router