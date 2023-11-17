/* const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const createPin = async (pin) => {
    const { data, error } = await supabase
        .from("pins")
        .upsert([
        {
            userId: pin.userId,
            photoUrl: pin.photoUrl,
            description: pin.description,
            createdAt: new Date().toISOString(),
        },
    ])

    if (error) {
        throw new Error(error.message)
    }

    return data
};

const findPinById = async (pinId) => {
    const { data, error } = await supabase
        .from("pins")
        .select()
        .eq("id", pinId)

    if (error) {
        throw new Error(error.message)
    }

    return data[0];
}

const Pin = { createPin, findPinById }

module.exports = Pin */