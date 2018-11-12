import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthRoutingMdodule } from "./auth-routing.module";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations:[
        SigninComponent,
        SignupComponent
    ],
    imports:[
        FormsModule,
        AuthRoutingMdodule
    ]
})
export class AuthModule {}