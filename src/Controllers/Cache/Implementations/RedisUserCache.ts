import { IUserCache } from 'Controllers/Cache/IUserCache'

import { User } from 'Data/User'

export class RedisUserCache implements IUserCache {
  public fetchUserById = (
    id: string
  ): User | undefined => {
    return undefined
  }

  public fetchUserByName = (name: string): User | undefined => {
    return undefined
  }

  public fetchUserByEmail = (email: string): User | undefined => {
    return undefined
  }
}