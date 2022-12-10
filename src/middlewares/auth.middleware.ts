import { ProxyEvent, Middleware } from '@src/utils/interface'

export const authMiddleware: <T extends ProxyEvent>() => Middleware<T> = () => {
  return (e, next) => {
    const token = e?.headers?.authorization

    if (!token) {
      throw new Error('Not Exists Token')
    }

    // Auth Check

    e._body = {
      ...JSON.parse(e.body as string),
      user_device_key: '',
    }

    return next(e)
  }
}
