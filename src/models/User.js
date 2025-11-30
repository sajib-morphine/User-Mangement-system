// This file represents the data model (schema) for a User,
// typically created using Mongoose (for MongoDB) or Sequelize (for SQL).

class User {
  constructor(name, email, role = 'user') {
    this.id = Math.random().toString(36).substring(2, 9);
    this.name = name;
    this.email = email;
    this.role = role; // 'user' or 'admin'
    this.isBlocked = false;
    this.isVerified = false;
  }

  static find() {
    // Mocking a database query
    return [];
  }

  static findById(id) {
    // Mocking a database query
    return { id, name: 'Mock User', email: 'mock@example.com' };
  }
}

// In a real Express app, this would be `module.exports = mongoose.model('User', userSchema);`
module.exports = User;