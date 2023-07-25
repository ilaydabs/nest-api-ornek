import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable({})
export class AuthService {
    //test(){}

    constructor (private prisma:PrismaService){} //buna sadece PrismaService ile başvurabiliriz

    signup() {
        return { msg: 'I am signed up' }
    }

    signin() {
        return { msg: 'I am signin in' }
    }
}