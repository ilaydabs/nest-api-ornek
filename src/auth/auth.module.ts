import { Module } from "@nestjs/common";
//import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
   // imports:[PrismaModule], 
   /*prismaya erişmek için import ettik. 
   Bunu her seferinde her dosyaya ayrı yapmak yerine 
   prisma modulü global dekaratörü ile dışarı aktarmaya açık hale getiriyorum*/

    controllers:[AuthController],
    providers: [AuthService],
})
export class AuthModule {}