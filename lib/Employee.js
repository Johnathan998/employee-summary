class Employee {
    //Constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        //this.title = title;
    };
    //returns name
    getName() {
        return this.name;
    };
    //returns id
    getId() {
        return this.id;
    };
    //returns email
    getEmail() {
        return this.email;
    };
    //returns title
    getRole() {
        return this.title;
    };

};
//Export to other files
module.exports = Employee;