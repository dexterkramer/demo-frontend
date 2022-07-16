import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

export interface AccountInterface{
    id: string;
    email: string;
}

export interface getAccountsResponse {
    accounts: AccountInterface;
}

const GET_ACCOUNTS = gql`
query getAccounts {
    accounts {
        id
        email
    }
}
`;

@Injectable()
export class AccountService{

    constructor(
        private apollo: Apollo
    ){}

    getAccounts = ():Observable<FetchResult<getAccountsResponse>> => {
        return this.apollo.watchQuery<getAccountsResponse>({
            query: GET_ACCOUNTS
        }).valueChanges;
    }
}
