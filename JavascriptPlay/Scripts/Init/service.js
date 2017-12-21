scriptPlay.service = (function () {

    function getUsers() {
        return $.get("http://jsonplaceholder.typicode.com/users");
    }

    function getName(name) {
        return name;
    }
    return {
        getUsers: getUsers,
        getName : getName
    }
}(scriptPlay || {}));