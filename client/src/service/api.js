const fetch = require("node-fetch");
const baseURL = 'http://localhost:3000'

export async function loginUser(data) {
    const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}
export async function registerUser(data) {
    const response = await fetch(`${baseURL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}