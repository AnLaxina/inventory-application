const BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL;

async function _fetch(endpoint, method, body = undefined) {
    try {
        const fullUrl = `${BACKEND_URL}${endpoint}`;
        const config = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        const response = await fetch(fullUrl, config);

        if (!response.ok) {
            throw new Error("Uh oh! Error status: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const api = {
    get: async (endpoint) => await _fetch(endpoint, "GET"),
    post: async (endpoint, body) => await _fetch(endpoint, "POST", body),
};

export default api;
