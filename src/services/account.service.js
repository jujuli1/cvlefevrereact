

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let Logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')


    return !!token
}

export const accountService = {
    saveToken, Logout, isLogged
}

