export const getJWT = () => {
    return localStorage.getItem("ca-jwtToken");
}

export const getUser = () => {
    return localStorage.getItem("ca-jwtUser");
}
