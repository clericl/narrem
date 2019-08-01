import Cookies from 'js-cookie';

export const loginUser = user => {
    return fetch("api/session", {
        method: "POST",
        credentials: "include",
        mode: "same-origin",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
        },
        body: JSON.stringify(user),
    })
};

export const logoutUser = () => {
    return $.ajax({
        method: "DELETE",
        url: "api/session",
    });
};