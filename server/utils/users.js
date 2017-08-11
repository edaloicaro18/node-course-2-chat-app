class Users {
    constructor() {
        this.users = [];
    }
    addUser(id, name, room) {
        const user = { id, name, room };
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        const removeUser = this.getUser(id);
        if (removeUser) {
            this.users = this.users.filter(user => user.id !== id);
        }
        return removeUser;
    }
    getUser(id) {
        return this.users.find(user => user.id === id);
    }
    getUserList(room) {
        return this.users
            .filter(user => user.room === room)
            .map(user => user.name);
    }
}

module.exports = { Users };