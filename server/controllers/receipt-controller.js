// import user model
import Receipt from '../models/Receipt.js';

export const getAllReceipts = async (req, res) => {
    try {
        const receipts = await Receipt.find();

        res.json({ message: 'showing all receipts!', receipts });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createReceipt = async (req, res) => {

    const receipt = await Receipt.create(req.body);

    if (!receipt) {
        return reswstatus(400).json({ Message: "something is wrong!' " });
    }

    return res.json('receipt saved!');
};