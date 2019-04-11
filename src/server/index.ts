import Express from 'express'
import next from 'next'
import session from './session'
import * as ENV from '../constants'
// ______________________________________________________
//
const dev = process.env.NODE_ENV !== 'production'
  // ______________________________________________________
  //
;(async () => {
  const app = Express()
  const nextApp = next({ dev, dir: './src/client' })
  const handle = nextApp.getRequestHandler()
  await nextApp.prepare()
  // session middleWare の適用
  session(app)
  //
  // ここに POST/PUT などの Express ルート・ハンドラーを実装していく
  //
  app.use((req, res) => {
    // Next.js を middleWare として利用
    handle(req, res)
  })
  app.listen(ENV.APP_PORT, ENV.APP_HOST, (err: Express.Errback) => {
    if (err) throw err
    console.log(`Running on http://${ENV.APP_HOST}:${ENV.APP_PORT}`)
  })
})()
