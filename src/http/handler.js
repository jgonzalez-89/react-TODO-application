export class HttpHandler {
    constructor() {
        this.url = "http://localhost:3000/posts"
    }

    async get() {
        const response = await fetch(this.url, {
            method: "GET",
        })
        return await response.json()
    }

    async post(payload) {
        const response = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    }
}