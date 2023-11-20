import Avatar from "./Avatar"
import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider"
import supabase from "../config/supabaseClient"
import { useState, useEffect } from "react"

const Account = ({ session }) => {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    const getProfile = async() => {
        try {
            setLoading(true)
            const user = supabase.auth.user()
            

            let { data, error, status} = await supabase
            .from('profiles')
            .select('username, website, avatar_url')
            .eq('id', user.id)
            .single()

            if(data){
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }

        } catch (error) {
            alert(error.message)
        }finally{
            setLoading(false)
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault();
    
        try {
            setLoading(true);
            const user = supabase.auth.user();
    
            const updates = {
                id: user.id,
                username,
                website,
                avatar_url,
                update_at: new Date(),
            };
    
            let { error } = await supabase.from('profiles').upsert(updates, { returning: 'minimal' });
            
            if (error) {
                throw error;
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div>
            {loading ? (
                'Saving ...'
            ) : (
                <form onSubmit={updateProfile}>
                    <Avatar
                    url={avatar_url}
                    size={150}
                    onUpload={(url) => {
                        setAvatarUrl(url)
                        updateProfile({ username, website, avatar_url: url})
                    }}
                    />
                    <div>
                        <input type="email"
                        name="email"
                        id="username"
                        placeholder="Your Name"
                        value={username ||''}
                        onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input type="website"
                        name="website"
                        placeholder="your@website"
                        id="website" 
                        value={website || ''}
                        onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>
                    <div>
                        <button>
                            updateProfile
                            </button>
                    </div>
                    <div>
                        <button type="button" onClick={() => supabase.auth.signOut()}>
                            Sign Out
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default Account