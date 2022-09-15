import Cookies from 'js-cookie'

export const setCookie = (cookieName, usrin) => {
    const COOKIE_EXPIRATION_TIME =  new Date(new Date().getTime() + 60 * 60 * 1000)
    Cookies.set(
        cookieName,
        usrin,
        {
          expires: COOKIE_EXPIRATION_TIME,
          sameSite: 'strict',
          path: '/'
        },
    )
}