import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
// import { meQuery, MeQueryResponse } from '../../gql/account.gql';
@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    // animations: zoomInOut,
    host: {
        // '[@zoomInOut]': 'true',
    },
})
export class LoginPageComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    private formSubscription: Subscription | null = null;
    public loading = false;
    // public registrationLink = environment.registrationLink;
    // @Input() linkedinUrl;

    public get username(): AbstractControl | null{
        return this.form.get('username');
    }

    public get password(): AbstractControl | null {
        return this.form.get('password');
    }

    constructor(
        private fb: FormBuilder,
        // private oauthService: OAuthService,
        // private stateService: StateService,
        // private networkLoaderService: NetworkLoaderService,
        private apollo: Apollo
    ) {
        this.form = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }

    check = () => {
        this.form.markAsDirty();
    };

    ngOnInit() {
        this.formSubscription = this.form.valueChanges.subscribe((data) => {
            if (this.form.errors && this.form.errors["invalidPassword"]) {
                this.form.errors["invalidPassword"] = false;
            }
        });
    }

    ngOnDestroy() {
        if (this.formSubscription) {
            this.formSubscription.unsubscribe();
        }
    }

    // linkedinConnection = () => {
    //     window.open(this.linkedinUrl, '_self');
    // };

    submit = (): void => {
        if (this.form.valid) {
            // this.networkLoaderService.addLoad();
            this.loading = true;
        }
    };
}
