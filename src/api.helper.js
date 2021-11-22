const API_URL = 'http://localhost:4000'

export const get = (path) => {
    return fetch(API_URL + path).then(r => r.json())
}
export const put = (path, body = null) => {
    return fetch(API_URL + path, {
        body: JSON.stringify(body),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}