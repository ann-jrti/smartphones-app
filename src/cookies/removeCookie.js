import Cookies from 'js-cookie'

export const removeCookie = (cookieName) => {
    return Cookies.remove(cookieName);
}