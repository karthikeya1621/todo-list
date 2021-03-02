export interface ToDo {

    id: string;
    title:string;
    isDone: boolean;
    createdAt: number;
    completedAt?: number;
    userId: string;
}

