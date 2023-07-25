import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { url } from 'inspector';
import { DataSource } from 'typeorm';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:123456@localhost:5432/nest?schema=public'
                }
            }
        })
    }
}


