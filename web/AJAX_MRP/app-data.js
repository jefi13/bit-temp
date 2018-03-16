const dataModule = (() => {
    class User {
        constructor(id, username, avatar) {
            this.id = id;
            this.username = username;
            this.avatar = avatar;
        }
        
        getData() {
            return `${this.id}, ${this.username}`;
        }
    }


    const adaptData = (users) => {
        return users.map((user) => {
            return new User(user.id, user.username, user.avatar_url);
        })
    }

    return {
        adaptData
    }
})();