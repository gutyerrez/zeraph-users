import { DatabaseProvider } from '@vyrnn/zeraph-core'

import { IUserCache } from 'Controllers/Cache/IUserCache'

import { User } from 'Data/User'

export class RedisUserCache implements IUserCache {
  private key = (id: string) => `users:${id}`

  public fetchUserById = (
    id: string
  ): User | undefined => {
    const key = this.key(id)

    if (DatabaseProvider.Databases.Redis.MAIN.provide().exists(key)) {
      const user = DatabaseProvider.Databases.Redis.MAIN.provide().hgetAll(key)

      console.log(user)
    }

    return undefined
  }

  public fetchUserByName = (name: string): User | undefined => {
    return undefined
  }

  public fetchUserByEmail = (email: string): User | undefined => {
    return undefined
  }
}