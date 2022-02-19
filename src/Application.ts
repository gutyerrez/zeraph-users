import { HttpServer } from '@vyrnn/zeraph-core'

import { Env } from '@vyrnn/zeraph-core'

import { ApplicationProvider } from 'ApplicationProvider'

(() => {
  const server = new HttpServer()

  ApplicationProvider.prepare()

  server.listen(Env.getInt('PORT'))
})()
