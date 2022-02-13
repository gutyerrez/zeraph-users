import { HttpServer, Router, Request, Response } from '@vyrnn/zeraph-core'

import { Env } from '@vyrnn/zeraph-core'

import { ApplicationProvider } from './ApplicationProvider'

(() => {
  const server = new HttpServer()

  ApplicationProvider.prepare()

  Router.get('/', async (_request: Request, response: Response) => {
    response.json({
      'API Version': '0.0.1-ALPHA'
    })
  })

  server.listen(
    Env.getInt('PORT'),
    () => console.log(`Rodando na porta ${Env.getInt('PORT')}!`)
  )
})()
