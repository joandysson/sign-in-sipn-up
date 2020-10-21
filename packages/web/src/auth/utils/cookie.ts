export const getCookies = () => {
    var pairs = document.cookie.split(";");
    var cookies:any = {};
    for (var i=0; i<pairs.length; i++){
        var pair = pairs[i].split("=");
        cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
}

export const saveCookie = (name: string, coockie: string) => {
    document.cookie = `${name}=${coockie}`;
}