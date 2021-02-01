import Cookies from 'js-cookie'
/**
 * 设置cookie
 * @param {*} name 键名
 * @param {*} value 值名
 * @param {*} time cookies有效时长
 */
function setCookies (name,value,time){
    if(name !== undefined){
        if(value !== undefined){
            if(time !== undefined){
                return Cookies.set(name,value,{expires:time})
            }else{
                return Cookies.set(name,value)
            }
        }else{
            throw new Error("value must required!") 
        }
    }else{
        throw new Error("name must required!")
    }
}

/**
 * 获取cookie
 * @param {*} name 要获取的cookie的键
 */
function getCookies (name){
    if(name !== undefined){
        return Cookies.get(name);
    }else{
        return Cookies.get();
    }
}
/**
 * 删除cookie
 * @param {*} name 删除cookie的键名
 */
function removeCookies (name){
        if(name !== undefined){
            return Cookies.remove(name);
        }else{
            throw new Error("name must not be undefined!")
        }
}

export { setCookies,getCookies,removeCookies }