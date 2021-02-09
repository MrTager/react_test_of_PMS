import { getCookies } from './Cookie'

export function Jurisdiction(){
    return getCookies(process.env.REACT_APP_TOKEN_NAME);
}