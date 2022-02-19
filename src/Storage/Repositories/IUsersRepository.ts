import { IRepository } from '@vyrnn/zeraph-core'

import {
  FetchUserByEmailDTO,
  FetchUserByIdDTO,
  FetchUserByNameDTO,
  FetchUserByDiscordIdDTO
} from 'Storage/DTO'

import { User } from 'Data/User'

export interface IUsersRepository extends IRepository {
  fetchAll: () => Promise<User[]>

  fetchUserById: (
    fetchUserByIdDTO: FetchUserByIdDTO
  ) => Promise<User | undefined>

  fetchUserByName: (
    fetchUserByNameDTO: FetchUserByNameDTO
  ) => Promise<User | undefined>

  fetchUserByEmail: (
    fetchUserByEmailDTO: FetchUserByEmailDTO
  ) => Promise<User | undefined>

  fetchUserByDiscordId: (
    fetchUserByDiscordIdDTO: FetchUserByDiscordIdDTO
  ) => Promise<User | undefined>
}
