import { User } from 'Data/User'

export interface IUserCache {
  fetchUserById: (id: string) => User | undefined

  fetchUserByName: (name: string) => User | undefined

  fetchUserByEmail: (email: string) => User | undefined
}
