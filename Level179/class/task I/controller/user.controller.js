export const createUserController = (req, res) => {
  res.status(201).json({
    message: "User Created Successfully",
  });
};