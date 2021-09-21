import { Request, Response } from 'express';
import WilderModel from "../models/Wilder";

export const create = async (req: Request, res: Response): Promise<void> => {
    await WilderModel.init();

    if (!req.body.name || req.body.name.length > 30) {
        res.json({ success: false, message: 'Name is required and must shorted than 30 chars' });
        return;
    } if (!req.body.city) {
        res.json({ success: false, message: 'City is required' });
        return;
    }

    const wilder = new WilderModel(req.body);
    await wilder.save();
    res.json({ success: true });
};

export const read = async (req: Request, res: Response): Promise<void> => {
    res.json(await WilderModel.find());
};

export const update = async (req: Request, res: Response): Promise<void> => {
    const wilder = await WilderModel.findById(req.params.wilderId);

    if (wilder) {
        Object.assign(wilder, req.body);
        wilder.save().then(() => {
            res.json({ success: true });
        }).catch(err => {
            console.error(err);
            res.status(500).json({ error: err });
        });
    } else {
        res.status(404).json({ error: 'notfound' });
    }
};