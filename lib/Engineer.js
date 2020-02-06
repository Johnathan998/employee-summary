const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubProfile) {

        super(name, id, email);

        this.gitHub = gitHubProfile;
    };

    getGitHub() {
        return this.gitHub;
    };

    getRole() {
        return "Engineer";
    };
};

module.exports = Engineer;
