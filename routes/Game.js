import express from 'express';
import {
    getAll,
    addOnce,
    getOnce,
    putOnce,
    patchOnce,
    deleteOnce
} from '../controllers/games.js';

const router = express.Router();

router
    .route('/')
    .get(getAll)
    .post(addOnce);

router
    .route('/:id')
    .get(getOnce)
    .put(putOnce)
    .patch(patchOnce)
    .delete(deleteOnce);

export default router;
