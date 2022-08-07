import rateLimit from 'express-rate-limit'
import slowDown from 'express-slow-down'
import { NextApiRequest, NextApiResponse } from 'next'

// @ts-ignore
const applyMiddleware = middleware => (request, response) =>
  new Promise((resolve, reject) => {
    // @ts-ignore
    middleware(request, response, result =>
      result instanceof Error ? reject(result) : resolve(result)
    )
  })

const getIP = (request: NextApiRequest) =>
// @ts-ignore
  request.ip ||
  request.headers['x-forwarded-for'] ||
  request.headers['x-real-ip'] ||
  request.connection.remoteAddress

export const getRateLimitMiddlewares = ({
  limit = 1,
  windowMs = 1000,
  delayAfter = Math.round(10 / 2),
  delayMs = 500,
} = {}) => [
  slowDown({ keyGenerator: getIP, windowMs, delayAfter, delayMs }),
  rateLimit({ keyGenerator: getIP, windowMs, max: limit }),
]

const middlewares = getRateLimitMiddlewares()

async function applyRateLimit(request: NextApiRequest, response:NextApiResponse) {
  await Promise.all(
    middlewares
      .map(applyMiddleware)
      .map(middleware => middleware(request, response))
  )
}

export default applyRateLimit