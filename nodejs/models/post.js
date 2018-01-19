var mongodb = require('./db');

    function Post(title, details, status) {
        this.title = title;
        this.details = details;
        this.status = status;
    }

    module.exports = Post;
    