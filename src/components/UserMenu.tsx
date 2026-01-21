'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExitIcon, PersonIcon, GearIcon, DashboardIcon, ChevronDownIcon, CubeIcon, PlusIcon } from '@radix-ui/react-icons'
import { AuthState, LinkComponentType } from '../types'

// * This component is now responsible for fetching organizations
// * We can't import from @/lib/api/organization because this is a shared UI library
// * So we will accept orgs and activeOrgId as props, or fetch them if a fetcher is provided

interface UserMenuProps {
  auth: AuthState;
  LinkComponent: LinkComponentType;
  // * Optional props for workspace switching
  orgs?: any[];
  activeOrgId?: string | null;
  onSwitchWorkspace?: (orgId: string) => void;
  // * Optional prop to create new organization
  onCreateOrganization?: () => void;
}

export default function UserMenu({ auth, LinkComponent: Link, orgs = [], activeOrgId = null, onSwitchWorkspace, onCreateOrganization }: UserMenuProps) {
  const { user, loading, logout } = auth
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (loading) {
    return (
      <div className="h-9 w-9 animate-pulse rounded-full bg-neutral-100 dark:bg-neutral-800" />
    )
  }

  if (user) {
    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white p-1 pl-2 pr-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
            <PersonIcon className="h-4 w-4" />
          </div>
          <span className="hidden sm:block max-w-[100px] truncate">{user.email?.split('@')[0]}</span>
          <ChevronDownIcon className={`h-4 w-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="absolute right-0 top-full mt-2 w-64 origin-top-right divide-y divide-neutral-100 rounded-xl border border-neutral-200 bg-white shadow-xl ring-1 ring-black/5 focus:outline-none dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 overflow-hidden"
            >
              <div className="px-1 py-1">
                <div className="px-3 py-2 text-xs text-neutral-500 dark:text-neutral-400">
                  Signed in as <br />
                  <span className="font-medium text-neutral-900 dark:text-white truncate block">{user.email}</span>
                </div>
              </div>
              
              <div className="px-1 py-1">
                {/* Workspace Switcher (Only if orgs are provided) */}
                {orgs.length > 0 && (
                    <div className="border-b border-neutral-100 dark:border-neutral-800 pb-2 mb-2">
                      <div className="px-3 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Workspaces
                      </div>
                      
                      {/* Organization Workspaces */}
                      {orgs.map((org) => (
                        <button
                          key={org.organization_id}
                          onClick={() => onSwitchWorkspace && onSwitchWorkspace(org.organization_id)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors mt-1 ${
                            activeOrgId === org.organization_id ? 'bg-neutral-100 dark:bg-neutral-800' : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                              <CubeIcon className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-neutral-700 dark:text-neutral-300 truncate max-w-[140px]">
                              {org.organization_name}
                            </span>
                          </div>
                        </button>
                      ))}
                      {/* Create New */}
                      {onCreateOrganization && (
                        <button
                            onClick={() => {
                                setIsOpen(false)
                                onCreateOrganization()
                            }}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-md transition-colors mt-1"
                        >
                            <div className="h-5 w-5 rounded border border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center">
                            <PlusIcon className="h-3 w-3" />
                            </div>
                            <span>Create Organization</span>
                        </button>
                      )}
                    </div>
                )}
              </div>
              
              <div className="px-1 py-1">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  <DashboardIcon className="h-4 w-4 text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white" />
                  Dashboard
                </Link>
                {/* Organization Settings Link */}
                {activeOrgId && (
                    <Link
                      href="/settings"
                      onClick={() => setIsOpen(false)}
                      className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                    >
                      <CubeIcon className="h-4 w-4 text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white" />
                      Organization Settings
                    </Link>
                )}
                <Link
                  href="/settings"
                  onClick={() => setIsOpen(false)}
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  <GearIcon className="h-4 w-4 text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white" />
                  Settings
                </Link>
              </div>

              <div className="px-1 py-1">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    logout()
                  }}
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  <ExitIcon className="h-4 w-4 opacity-70" />
                  Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="text-sm font-medium text-neutral-600 hover:text-neutral-900 px-4 py-2 rounded-xl hover:bg-neutral-100/50 transition-all duration-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/50"
      >
        Sign in
      </Link>
      <Link
        href="/signup"
        className="btn-primary text-sm px-5 py-2.5"
      >
        Sign up
      </Link>
    </div>
  )
}
