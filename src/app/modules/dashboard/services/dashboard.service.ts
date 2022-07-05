import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';


@Injectable()
export class DashboardService{

    constructor(
        private apollo: Apollo
    ){}
}
