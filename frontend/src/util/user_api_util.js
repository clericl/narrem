export const createUser = user => {
    return $.ajax({
        method: "POST",
        url: "api/users",
        data: {
            user: {
            },
        },
    });
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
