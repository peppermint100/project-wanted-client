import { Application } from './application';

export interface PostProps {
    postId: number
    title: string
    content: string
    devNeeded: number;
    pmNeeded: number;
    designNeeded: number;
    devRecruited: number;
    pmRecruited: number;
    designRecruited: number;
    isDone: boolean;
    wantedSkills: string[];
    ownerId: number
    applications?: Application[]
    createdAt: any
}