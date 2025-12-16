import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "Este email ya esta en uso prueba con otro",
      });
    }
    const savedData = await newUser.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      res.status(404).json({
        message: "Datos de usuario no encontrado",
      });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(400).json({
        message: "usuario no encontrado",
      });
    }

    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    const updateData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExits = await User.findById(id);

    if (!userExits) {
      return res.status(400).json({
        message: "usuario no encontrado",
      });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
