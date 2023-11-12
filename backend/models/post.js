const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const createPost = async (post) => {
    const { data, error } = await supabase
        .from("posts")
        .upsert([
        {
            userId: post.userId,
            content: post.content,
            createdAt: new Date().toISOString(),
        },
        ]);

    if (error) {
        throw new Error(error.message);
    }

    return data;
    };

    const findPostById = async (postId) => {
    const { data, error } = await supabase
        .from("posts")
        .select()
        .eq("id", postId);

    if (error) {
        throw new Error(error.message);
    }

    return data[0];
};

const Post = { createPost, findPostById };

module.exports = Post;