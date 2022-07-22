import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export const configFactory = (configService: ConfigService) => {
    return () => configService.loadConfig();
};

@Injectable({
    providedIn: 'root'
  })
export class ConfigService {
    env: any;

    constructor(private http: HttpClient) {}

    loadConfig() {
        return this.http
        .get<any>('./assets/config.json')
        .toPromise()
        .then(env => {
            this.env = env;
        });
    }
}