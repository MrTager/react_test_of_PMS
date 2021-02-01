import { setCookies,getCookies,removeCookies } from './Cookie'

const cookieName = "USERINFORMATION";

export function isCookie(){
    return getCookies(cookieName);
}