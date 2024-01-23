
let store = {
    _state: {
            posts: [
                { id: 3, message: 'bla bla bla ', likeCount: 12 },
                { id: 4, message: 'Da da da ', likeCount: 1 },
            ]
    },

    getState() {
        return this._state;
    },

}

export default store;
