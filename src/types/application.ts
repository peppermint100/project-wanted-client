import { PostProps } from './post';
import { Role } from './../../../server/src/types/role';

export interface MyApplication {
    applicationId: number;
    isAccepted: boolean;
    ownerId: number;
    postId: number;
    role: Role
    post: PostProps[]
}

export interface Application {
    applicationId: number
    isAccepted: boolean
    ownerId: number
    postId: number
    role: Role
}