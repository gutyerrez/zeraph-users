import { IUsersRepository } from 'Storage/Repositories/IUsersRepository'

import {
  FetchUserByDiscordIdDTO,
  FetchUserByEmailDTO,
  FetchUserByIdDTO,
  FetchUserByNameDTO
} from 'Storage/DTO'

import { User } from 'Data/User'
import { DatabaseProvider } from '@vyrnn/zeraph-core'

export class PostgreSQLUsersRepository implements IUsersRepository {
  public fetchAll = async (): Promise<User[]> => {
    const table = DatabaseProvider.Databases.PostgreSQL.MAIN.provide().table<User, unknown>(
      'users'
    )

    return table.orderBy('created_at', 'asc')
  }

  public fetchUserById = async (
    { id }: FetchUserByIdDTO
  ): Promise<User | undefined> => {
    const table = DatabaseProvider.Databases.PostgreSQL.MAIN.provide().table<User, unknown>(
      'users'
    )
    
    return table.where('id', id).first()
  }

  public fetchUserByName = async (
    { name }: FetchUserByNameDTO
  ): Promise<User | undefined> => {
    const table = DatabaseProvider.Databases.PostgreSQL.MAIN.provide().table<User, unknown>(
      'users'
    )

    return table.where('name', name).first()
  }

  public fetchUserByEmail = async (
    { email }: FetchUserByEmailDTO
  ): Promise<User | undefined> => {
    const table = DatabaseProvider.Databases.PostgreSQL.MAIN.provide().table<User, unknown>(
      'users'
    )
    
    return table.where('email', email).first()
  }

  public fetchUserByDiscordId = async (
    { discordId }: FetchUserByDiscordIdDTO
  ): Promise<User | undefined> => {
    const table = DatabaseProvider.Databases.PostgreSQL.MAIN.provide().table<User, unknown>(
      'users'
    )

    return table.where('discord_id', discordId).first()
  }
}
