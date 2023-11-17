const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const createUser = async (user) => {
  const { data, error } = await supabase
    .from("users")
    .update([
      {
        username: user.username,
        name: user.name,
        passwordHash: user.passwordHash,
        savedPins: user.savedPins || [],
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const findUserByUsername = async (username) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("username", username);

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
};

const findUserById = async (userId) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
};

const User = { createUser, findUserByUsername, findUserById };

module.exports = User;
