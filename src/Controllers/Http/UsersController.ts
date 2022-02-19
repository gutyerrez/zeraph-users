import { ApplicationProvider } from 'ApplicationProvider'

import {
  Request,
  Response,
  InternalServerErrorException
} from '@vyrnn/zeraph-core'

import { AdaptersUtils } from 'Util/AdaptersUtils'

export class UsersController {
  public static index = async (_request: Request, response: Response) => {
    try {
      return response.json(
        await ApplicationProvider.Repositories.PostgreSQL.USERS_REPOSITORY.provide().fetchAll()
      )
    } catch (e: any) {
      throw new InternalServerErrorException(500, e.message)
    }
  }

  public static show = async (request: Request, response: Response) => {
    try {
      const { param } = request.params()

      return AdaptersUtils.fetchUserAdapter(param)?.handle(request, response)
    } catch (e: any) {
      throw new InternalServerErrorException(500, e.message)
    }
  }
}
