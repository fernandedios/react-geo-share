const user = {
    _id: "1",
    name: "Fernan",
    email: "fernandedios@gmail.com",
    picture: "https://cloudinary.com/asdf"
};

module.exports = {
    Query: {
        me: () => user
    }
};
