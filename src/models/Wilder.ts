import { Schema, model } from 'mongoose';

interface Skill {
    name: string;
    votes: number;
}

export interface Wilder {
    name: string;
    city: string;
    skills: Skill[];
}

// interface
const WilderSchema = new Schema({
    name: String,
    city: String,
    skills: [{ name: String, votes: Number }]
});

export default model<Wilder>('wilder', WilderSchema);