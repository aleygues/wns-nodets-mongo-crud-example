import express from 'express';
import {create, read, update} from "../controllers/Wilders";
import {handleAsyncError} from "../helpers";

const router = express.Router();

router.post('/', handleAsyncError(create));
router.get('/', handleAsyncError(read));
// router.get('/:wilderId', handleAsyncError(readOne));
router.patch('/:wilderId', handleAsyncError(update));
// router.put('/:wilderId', handleAsyncError(updateWhole));
// router.delete('/:wilderId', handleAsyncError(delete));

// router.get('/search/', handleAsyncError(search));
// router.post('/searches/', handleAsyncError(search));

export default router;