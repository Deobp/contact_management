import { Request, Response } from 'express';
import Contact from './../models/contact';

export const createContact = async (req: Request, res: Response) => {
  const { name, phone, email, avatar } = req.body;
  const contact = new Contact({ name, phone, email, avatar });

  try {
    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error.message);
        res.status(400).json({ message: error.message });
      }
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
  }
};

export const updateContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;
  
    try {
      const updatedContact = await Contact.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedContact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(200).json(updatedContact);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
    }
  };

  export const deleteContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const deletedContact = await Contact.findByIdAndDelete(id);
      if (!deleteContact) {
        return res.status(404).json({message: 'Contact not found'});
      }
      res.status(200).json({message: `Contact deleted succesfully ${deletedContact}`})
    } catch (error: unknown) {
      if(error instanceof Error) {
        res.status(500).json({message: error.message})
      }
    }

  }
