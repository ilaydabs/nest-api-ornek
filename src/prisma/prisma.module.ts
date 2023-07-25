import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';


@Global( )
@Module({
  providers: [PrismaService],
  exports: [PrismaService], 
  /*prisma modulü, auth module içinde import ettik ancak prisma service'e erişmek için 
  bunu diğer sağlayıcılara aktarmamız gerektiği için prisma service'i export ettik*/
})
export class PrismaModule {}
