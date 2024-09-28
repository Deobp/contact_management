import express from 'express';
import {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} from '../controllers/contactController';

const router = express.Router();

router.post('/', createContact);
router.get('/:id', getContacts);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
