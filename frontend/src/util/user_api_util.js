import Cookies from 'js-cookie';

export const createUser = user => {
    return fetch("api/users", {
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

export const editUser = user => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`,
        data: {
            user: {
            },
        },
    });
};

export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
    });
};
