import { ModuleWithProviders, NgModule } from '@angular/core';
import { AccountService } from './service/account-service';

@NgModule({
    imports: [

    ],
    providers: [

    ],
    declarations: [
        
    ],
    exports : [
        
    ]
})
export class AccountProviderModule {
    static forRoot(): ModuleWithProviders<AccountProviderModule> {
        return {
          ngModule: AccountProviderModule,
          providers: [
            AccountService
          ]
        };
    }
    static forChild(): ModuleWithProviders<AccountProviderModule> {

        return{
            ngModule: AccountProviderModule,
            providers: [
                AccountService
            ]
        };
    }
}