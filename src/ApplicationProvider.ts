import {
  AbstractApplicationProvider,
  DatabaseProvider,
  Env,
  PostgreSQLDatabaseProvider,
  RedisDatabaseProvider,
  RepositoryProvider
} from '@vyrnn/zeraph-core'
import path = require('path')

import { RouterProvider } from 'Router'
import { PostgreSQLUsersRepository } from 'Storage/Repositories/Implementations/PostgreSQLUsersRepository'
import { IUsersRepository } from 'Storage/Repositories/IUsersRepository'

export  class ApplicationProvider extends AbstractApplicationProvider {
  public static prepare = async (): Promise<void> => {
    Env.prepare('/Users/gutyerrez/Documents/Vyrnn/zeraph/zeraph-users/.env')

    ApplicationProvider.preparePrimaryProviders()

    ApplicationProvider.Repositories.PostgreSQL.USERS_REPOSITORY.prepare()

    RouterProvider.prepare()
  }

  private static preparePrimaryProviders = () => {
    DatabaseProvider.Databases.PostgreSQL.MAIN = new PostgreSQLDatabaseProvider(
      Env.getString('POSTGRESQL_HOST'),
      Env.getInt('POSTGRESQL_PORT'),
      Env.getString('POSTGRESQL_USERNAME'),
      Env.getString('POSTGRESQL_PASSWORD'),
      Env.getString('POSTGRESQL_DATABASE'),
      Env.getString('POSTGRESQL_SCHEMA')
    )

    DatabaseProvider.Databases.Redis.MAIN = new RedisDatabaseProvider(
      Env.getString('REDIS_HOST'),
      Env.getInt('REDIS_PORT'),
      Env.getString('REDIS_USERNAME'),
      Env.getString('REDIS_PASSWORD'),
      Env.getInt('REDIS_DATABASE')
    )

    DatabaseProvider.prepare()
  }

  public static Repositories = class {
    public static PostgreSQL = class {
      public static USERS_REPOSITORY = new RepositoryProvider<IUsersRepository>(
        PostgreSQLUsersRepository
      )
    }
  }
}
