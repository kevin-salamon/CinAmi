export const getJWT = () => {
    return localStorage.getItem("ca-jwtSecret");
}
