import { useState } from 'react'
import supabase from '../config/supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
//   const [password, setPassword] =useState('')


  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email})
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto text-center w-72">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 >Log in</h1>
        <p className="text-xs text-gray-500 pb-3">Sign in via magic link with your email below</p>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form onSubmit={handleLogin}>
            <input type="email" 
              name="email" 
              placeholder="your@email.com"
              id="website"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              {/* <input type='password'
              name='password'
              placeholder='password'
              id='hidden' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}/> */}

               <button >
               Send magic link
              </button>
            
          </form>
        )}
      </div>
    </div>
  )
}