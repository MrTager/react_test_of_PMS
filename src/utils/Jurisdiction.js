import { getCookies } from './Cookie'

const cookieName = "USERINFORMATION";

export function Jurisdiction(){
    return getCookies(cookieName);
}