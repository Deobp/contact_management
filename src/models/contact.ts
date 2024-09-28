import mongoose from 'mongoose';

interface interfaceContact {
    name: string;
    phone: string;
    email: string;
    avatar?: string;
};

const contactSchema = new mongoose.Schema<interfaceContact>({
    name: { type: String, required: true },
    phone: { type: String, required: true,  unique: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
});

const Contact = mongoose.model<interfaceContact>('Contact', contactSchema);
export default Contact;
