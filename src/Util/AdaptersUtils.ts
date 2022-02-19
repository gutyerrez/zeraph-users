import { AbstractAdapter } from '@vyrnn/zeraph-core'

import {
  ShowUserByIdAdapter,
  ShowUserByNameAdapter,
  ShowUserByEmailAdapter,
  ShowUserByDiscordIdAdapter
} from 'Controllers/Http/Adapter/UsersAdapter'

export class AdaptersUtils {
  public static fetchUserAdapter = (
    param: string | undefined
  ): AbstractAdapter | undefined  => {
    if (param?.match(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)) {
      return new ShowUserByIdAdapter()
    } else if (param?.match(/^[a-zA-Z0-9]{3,16}$/)) {
      return new ShowUserByNameAdapter()
    } else if (param?.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return new ShowUserByEmailAdapter()
    } else if (param?.match(/^[0-9]{18}$/)) {
      return new ShowUserByDiscordIdAdapter()
    }

    return undefined
  }
}
