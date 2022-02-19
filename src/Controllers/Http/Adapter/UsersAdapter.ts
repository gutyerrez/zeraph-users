import {
  AbstractAdapter,
  InternalServerErrorException,
  Request,
  Response
} from '@vyrnn/zeraph-core'

import { ApplicationProvider } from 'ApplicationProvider'

export class ShowUserByIdAdapter extends AbstractAdapter {
  public override handle = async (request: Request, response: Response) => {
    try {
      const { param: id } = request.params()

      const user = await ApplicationProvider.Repositories.PostgreSQL.USERS_REPOSITORY.provide().fetchUserById({
        id
      })

      if (!user) {
        return response.status(404).json({
          message: 'user not found'
        })
      }

      return response.json(user)
    } catch (e: any) {
      throw new InternalServerErrorException(500, e.message)
    }
  }
}

export class ShowUserByNameAdapter extends AbstractAdapter {
  public override handle = async (request: Request, response: Response) => {
    try {
      const { param: name } = request.params()

      const user = await ApplicationProvider.Repositories.PostgreSQL.USERS_REPOSITORY.provide().fetchUserByName({
        name
      })

      if (!user) {
        return response.status(404).json({
          message: 'user not found'
        })
      }

      return response.json(user)
    } catch (e: any) {
      throw new InternalServerErrorException(500, e.message)
    }
  }
}

export class ShowUserByEmailAdapter extends AbstractAdapter {
  public override handle = async (request: Request, response: Response) => {
    try {
      const { param: email } = request.params()

      const user = await ApplicationProvider.Repositories.PostgreSQL.USERS_REPOSITORY.provide().fetchUserByEmail({
        email
      })

      if (!user) {
        return response.status(404).json({
          message: 'user not found'
        })
      }

      return response.json(user)
    } catch (e: any) {
      throw new InternalServerErrorException(500, e.message)
    }
  }
}

export class ShowUserByDiscordIdAdapter extends AbstractAdapter {
  public override handle = async (request: Request, response: Response) => {
    try {
      const { param: discordId } = request.params()

      const user = await ApplicationProvider.Repositories.PostgreSQL.USERS_REPOSITORY.provide().fetchUserByDiscordId({
        discordId
      })

      if (!user) {
        return response.status(404).json({
          message: 'user not found'
        })
      }

      return response.json(user)
    } catch (e: any) {
      throw new InternalServerErrorException(500, e.message)
    }
  }
}
