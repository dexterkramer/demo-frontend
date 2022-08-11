import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { BehaviorSubject, skip } from "rxjs";

export const configFactory = (configService: ConfigService) => {
    return () => configService.loadConfig();
};

export interface LocalConfig
{
    GRAPHQL_API_ENDPOINT: string;
    KEYCLOAK_ENDPOINT: string;
    KEYCLOAK_REALM: string;
    KEYCLOAK_CLIENT_ID: string;
}

// Since this service is used in APP_INITIALIZER token, application will not start until the Promise is resolved.
// Use config.value in the app.
// For other APP_INITIALIZER tokens, as they are all launched in parallel, use config.subscribe((config) => {}) to wait for config to be retrieved
// default value of the behaviorSubject will be ignored by skip( 1 ) 
@Injectable({
    providedIn: 'root'
  })
export class ConfigService {

    config: BehaviorSubject<LocalConfig> = new BehaviorSubject<LocalConfig>({
        GRAPHQL_API_ENDPOINT: "",
        KEYCLOAK_ENDPOINT: "",
        KEYCLOAK_REALM: "",
        KEYCLOAK_CLIENT_ID: ""
    }).pipe( skip( 1 ) ) as BehaviorSubject<LocalConfig>;

    constructor() {}

    loadConfig(): any {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', environment.configFilePath);
        
            xhr.addEventListener('readystatechange', () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    this.config.next(JSON.parse(xhr.responseText));
                    this.config.complete();
                    resolve(this.config);
                } else if (xhr.readyState === XMLHttpRequest.DONE) {
                    reject();
                }
            });
        
            xhr.send(null);
        });
    }
}