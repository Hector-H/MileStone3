const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const createUser = async (user) => {
  const { data, error } = await supabase
    .from("users")
    .upsert([
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

  return data[0]; // Assuming username is unique, return the first result
};

const User = { createUser, findUserByUsername };

module.exports = User;
