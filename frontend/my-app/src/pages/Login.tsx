import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

import ThemeToggle from '../components/ThemeToggle'
import { useAuth } from '../hooks/useAuth'
import { getLoginErrorMessage } from '../utils/error-handler'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await login(form)
      navigate('/', { replace: true })
    } catch (err: unknown) {
      setError(getLoginErrorMessage(err))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--color-bg) text-(--color-text)">
      <span style={{ position: 'absolute', top: 10, right: 10 }}>
        <ThemeToggle />
      </span>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 border rounded-lg border-(--color-border) shadow-2xl shadow-(--color-text)/10"
      >
        <h1 className="text-xl font-semibold mb-1">Sign in</h1>
        <p className="text-sm mb-4">Access your workspace</p>

        <label className="block text-sm mb-1">Username</label>
        <input
          id="username"
          className="w-full mb-4 p-2 rounded border border-(--color-border)"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

        <label className="block text-sm mb-1">Password</label>
        <div className="relative w-full mb-4">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            className="w-full p-2 pr-10 rounded border border-(--color-border)"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-(--color-text) transition-colors duration-300 ease-in-out"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 rounded bg-(--color-accent) text-white hover:bg-(--color-accent)/70 transition-colors duration-200"
        >
          Login
        </button>

        <p className="text-xs mt-4">
          Use your assigned credentials to continue.
        </p>
      </form>
    </div>
  )
}
