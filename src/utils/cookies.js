import nookies from 'nookies'

export const getItem = (key, ctx) => JSON.parse(nookies.get(ctx)[key] || '{}')

export const setItem = (key, value, options = {}) => {
  options = { path: '/', maxAge: 30 * 24 * 60 * 60, ...options };
  nookies.set(null, key, JSON.stringify(value), options)
}

export const destroyItem = (key, ctx) => nookies.destroy(ctx, key)
