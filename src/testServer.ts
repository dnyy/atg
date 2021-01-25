import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/products/V75', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ 
        betType: "V75",
        upcoming: [],
        results: []
      }
    ))
  }),
  rest.get('*', (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: "Add request handler"})
    )
  })
)
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest }