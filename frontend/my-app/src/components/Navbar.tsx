import { useState } from 'react'
import { Link, NavLink, type NavLinkProps } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import { useAuth } from '../hooks/useAuth'

import Modal from './Modal'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const navLinkClass: NavLinkProps['className'] = ({ isActive }) =>
    `block text-sm p-2 rounded-lg ${
      isActive
        ? 'text-(--color-pill) bg-(--color-pill)/20'
        : 'text-(--color-text)'
    }`

  const handleLogout = () => {
    setShowModal(false)
    setOpen(true)
    logout()
  }

  return (
    <>
      <nav className="relative border-b border-(--color-border) bg-(--color-bg)">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-semibold text-(--color-text)">
              Auth Portal
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {user?.role === 'admin' && (
                <NavLink to="/admin" className={navLinkClass}>
                  Admin
                </NavLink>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            <span className="text-md text-(--color-text)">
              {user?.firstName} {user?.lastName}
            </span>

            <button
              onClick={() => setShowModal(true)}
              className="text-md px-2 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg border border-(--color-border)"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-5 w-5 text-(--color-text)" />
            ) : (
              <Menu className="h-5 w-5 text-(--color-text)" />
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-(--color-border) bg-(--color-bg) px-6 py-4 space-y-3">
            {user?.role === 'admin' && (
              <NavLink
                to="/admin"
                onClick={() => setOpen(false)}
                className={navLinkClass}
              >
                Admin
              </NavLink>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="text-md text-(--color-text)">
                {user?.firstName} {user?.lastName}
              </span>
              <ThemeToggle />
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="w-full text-md px-2 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      <Modal
        open={showModal}
        title="Confirm action"
        description="Are you sure you want to log out?"
        confirmText="Logout"
        onCancel={() => setShowModal(false)}
        onConfirm={handleLogout}
      />
    </>
  )
}
