import { ICommand } from "wokcommands";

export default {
    category: 'testing',
    description: 'replies with i love pong',

    slash: true,
    testOnly: true,

    callback: ({ interaction }) => {
        return 'poggers'
    },
} as ICommand