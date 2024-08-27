
export type Question = {
    id: number,
    question: string,
    options: string[] ,
    correctAnswer: string
}

export type Quiz = {
    title: string,
    question: Question[]
}