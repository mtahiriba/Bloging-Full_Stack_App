import axios from "axios";
const baseURL = "http://localhost:4000";

const createBlog = async (data, token) => {
    let headersList = {
        Accept: "*/*",
        "Authorization": token
    };

    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.description);
    formData.append("file", data.image);

    let bodyContent = formData;

    let reqOptions = {
        url: baseURL + "/api/blogs",
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }

    return axios.request(reqOptions);
};

const updateBlog = async (data, id, token) => {
    let headersList = {
        Accept: "*/*",
        "Authorization": token
    };

    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.description);
    formData.append("file", data.image);

    let bodyContent = formData;

    let reqOptions = {
        url: baseURL + "/api/blogs/" + id,
        method: "PUT",
        headers: headersList,
        data: bodyContent,
    }

    return axios.request(reqOptions);
};

const deleteBlog = async (id, token) => {
    let headersList = {
        Accept: "*/*",
        "Authorization": token
    };

    let reqOptions = {
        url: baseURL + "/api/blogs/" + id,
        method: "DELETE",
        headers: headersList
    }

    return axios.request(reqOptions);
};

const getBlogs = async () => {
    let headersList = {
        Accept: "*/*",
    };

    let reqOptions = {
        url: baseURL + "/api/blogs",
        method: "GET",
        headers: headersList
    }

    return axios.request(reqOptions);
};

const getBlog = async (id) => {
    let headersList = {
        Accept: "*/*",
    };

    let reqOptions = {
        url: baseURL + "/api/blogs/" + id,
        method: "GET",
        headers: headersList
    }

    return axios.request(reqOptions);
};

const ratingBlog = async (rating, id, token) => {
    let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Authorization": token
    };

    let bodyContent = JSON.stringify({
        rating: rating
    });

    let reqOptions = {
        url: baseURL + "/api/blogs/" + id + "/star",
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }

    return axios.request(reqOptions);
}

const getBlogsByUser = async (token) => {
    let headersList = {
        Accept: "*/*",
        "Authorization": token
    };

    let reqOptions = {
        url: baseURL + "/api/blogs/user",
        method: "GET",
        headers: headersList
    }

    return axios.request(reqOptions);
};

export { createBlog, updateBlog, deleteBlog, getBlogs, getBlog, ratingBlog, getBlogsByUser };