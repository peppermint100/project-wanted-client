import { Role } from '../types/role';

export interface User {
    userId: number;
    skills?: string[];
    username: string;
    description: string;
    role: Role
}