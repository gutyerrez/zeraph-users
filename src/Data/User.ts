import { Group } from '@vyrnn/zeraph-core'

import { DateTime } from '@vyrnn/zeraph-core'

export class User {
  public id!: string
  public name!: string

  public email?: string

  public discordId?: number

  public createdAt!: DateTime
  public updatedAt?: DateTime

  constructor(
    id: string,
    name: string,
    email: string | undefined,
    discordId: number | undefined,
    createdAt: DateTime,
    updatedAt: DateTime | undefined
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.discordId = discordId
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  public getGroup = (): Group => Group.DEFAULT
}
