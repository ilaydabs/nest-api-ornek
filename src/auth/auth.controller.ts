import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    //authService: AuthService;
    constructor(private authService: AuthService) {
        //this.authService = authService  -> bu kullanımda üst satırdaki 'private' özelliğini kullanmamıza gerek kalmıyor.
        //Yani bunu yapmak yerine 'private' anahtar kelimesini kullanırız. BU bir kısaltma.

        /*this.authService.test()
        ->AuthService klasöründe oluşturduğumuz fonksiyonu burada kullanabiliyoruz.
        ->Kısaca bağımlılık enjeksiyonu budur diyebiliriz.*/
    }
    //POST auth/signup
    @Post('signup')
    /*signup(@Req() req:Request) {    //istek tipini belirtiyoruz-> Request ve bu request express'ten geliyor. Buna dikkat etmemiz lazım.
        console.log(req.body); //Burada 'req' birçok özelliğe sahip ve bunların hepsi express'ten geliyor.

        //return {msg1:"Hello", msg2:"I am signed up"};
        //Bu şekilde metin yerine bir dizi de döndürebiliriz.

        return this.authService.signup();
    }*/
    signup(@Body() dto:AuthDto){ //burada tipi 'any' olarak belirtirsek, istek gövdesinin şeklini bilmiyoruzdur.
        // Auth için bir dto dosyası oluşturup interfaces (AuthDto) tanımladıktan sonra otomatik belirtebiliyoruz.
        //@Body dekoratörü sadece isteğin gövdesini almamızı sağlar

        console.log({
            dto,
        });
        return this.authService.signup();

    }



    //POST auth/signin
    @Post('signin')
    signin() {
        //return "I am signin in";

        return this.authService.signin()
        //Eğer mesajı service dosyasında belirttiysek bu şekilde çağırıyoruz.

    }
}
