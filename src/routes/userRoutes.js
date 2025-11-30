const express = require("express");
const userController = require("../controllers/userController");

// Create an Express Router instance
const router = express.Router();

// NOTE: In a real app, you would add middleware (e.g., `protect`, `admin`)
// before the controller functions for authentication and authorization.

// --- CRUD Operations ---
router.post("/create-user", userController.createUser);
router.get("/read-user", userController.readUser); // General Read
router.put("/update-user", userController.updateUser);
router.delete("/delete-user", userController.deleteUser);

// --- Fetching and Queries ---
router.get("/all-users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.get("/search", userController.searchUsers);
router.get("/filter", userController.filterUsers);

// --- Authentication and Profile ---
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.put("/change-password", userController.changePassword);
router.put("/update-profile", userController.updateProfile);
router.delete("/delete-account", userController.deleteAccount);

// --- Administrative Actions (Requires Admin Middleware) ---
router.put("/make-admin/:id", userController.makeAdmin);
router.put("/remove-admin/:id", userController.removeAdmin);
router.patch("/block-user/:id", userController.blockUser);
router.patch("/unblock-user/:id", userController.unblockUser);

// --- Account Verification and Assets ---
router.post("/verify-email", userController.verifyEmail);
router.post("/resend-verification", userController.resendVerification);
router.post("/upload-profile-picture", userController.uploadProfilePicture);


module.exports = router;