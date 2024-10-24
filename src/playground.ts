/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'testingmail@gmail.com',
        firstName: 'test',
        lastName: 'tester'
    }
})

console.log('updated to db')