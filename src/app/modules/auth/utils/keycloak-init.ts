import { ConfigService } from '@app-core/config/config.service';
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService, configService: ConfigService) {
      return () => new Promise((resolve, reject) => {
        configService.config.subscribe((config) => {
          resolve(
            keycloak.init({
              config: {
                url: config.KEYCLOAK_ENDPOINT,
                realm: config.KEYCLOAK_REALM,
                clientId: config.KEYCLOAK_CLIENT_ID
              },
              initOptions: {
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri:
                  window.location.origin + '/assets/silent-check-sso.html'
              }
            })    
          )
        });
      })
  }