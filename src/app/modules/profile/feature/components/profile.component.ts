import { Component } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { AccountService, getAccountsResponse } from '@app-module/account/provider/service/account-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private readonly accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((res:FetchResult<getAccountsResponse>) => {
      console.log(res.data?.accounts);
    })
  }
}
