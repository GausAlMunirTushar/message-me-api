const Message = require('../models/message.model');

const createMessage = async (req, res) => {
        try {
            const { name, email, message } = req.body;
            const newMessage = new Message({ name, email, message });
            await newMessage.save();
            res.status(201).json({ message: 'Message sent successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to send message', details: err });
        }
    };

const getAllMessage = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json({
            status: 'success',
            data: {
                messages,
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to get messages', details: err });
    }
}
module.exports = { createMessage, getAllMessage };