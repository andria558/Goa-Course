// Import default and named exports
import createUser from './userService.js';
import deleteUser from './userService.js';

// Use the functions
createUser('Andria');       // Output: User "Andria" has been created.
deleteUser(101);            // Output: User with ID 101 has been deleted.
