const key = "token";

export function getAuthToken() {
    return window.sessionStorage.getItem("token");
}

export function storeAuthToken(token: string){
    window.sessionStorage.setItem(key, token);
}

export function deleteAuthToken(){
    window.sessionStorage.removeItem(key);
}