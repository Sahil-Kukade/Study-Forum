import axios from "axios";

// 🟢 Use your actual backend Render URL
const BACKEND_URL = "https://study-forum.onrender.com/api/v1";

export const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true, // required for sending cookies (auth)
});

export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method: method,
        url: url,             // e.g., "/auth/login"
        data: bodyData || null,
        headers: headers || null,
        params: params || null,
    });
};
