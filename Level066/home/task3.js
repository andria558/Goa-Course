
function User(username, email, password) {

  this.username = username;
  this.email = email;
  this.password = password;

  this.changePassword = function(newPassword) {
    this.password = newPassword;
  };

  this.getDetails = function() {
    return "Username: " + this.username + ", Email: " + this.email;
  };
}

var user1 = new User("johnDoe", "john@example.com", "password123");

console.log("Initial usre object:", user1);

console.log("User details:", user1.getDetails());

user1.changePassword("newSecurePassword456");

console.log("Updated user object after password change:", user1);

console.log("User details after password update:", user1.getDetails());
