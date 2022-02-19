import { Router } from '@vyrnn/zeraph-core'

import { UsersController } from 'Controllers/Http/UsersController'

export class RouterProvider {
  public static prepare = async () => {
    /**
     * Users controller
     */
    Router.get('/users', UsersController.index)
    Router.get('/users/:param', UsersController.show)
  }
}
