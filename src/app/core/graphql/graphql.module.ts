import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { ConfigService } from '@app-core/config/config.service';

@NgModule({
  imports: [
    ApolloModule
  ],
  exports: [
    ApolloModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink, configService: ConfigService) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: configService.config.value.GRAPHQL_API_ENDPOINT,
          }),
        };
      },
      deps: [
        HttpLink,
        ConfigService
      ],
    },
  ],
})
export class GraphQLModule {}
