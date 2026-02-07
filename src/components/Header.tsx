'use client'

import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import UserMenu from './UserMenu'
import { LinkComponentType, AuthState } from '../types'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'

export interface HeaderProps {
  auth: AuthState;
  LinkComponent: LinkComponentType;
  logoSrc?: string;
  appName?: string | React.ReactNode;
  // * Optional props for workspace switching
  orgs?: any[];
  activeOrgId?: string | null;
  onSwitchWorkspace?: (orgId: string | null) => void;
  // * Optional prop to create new organization
  onCreateOrganization?: () => void;
  allowPersonalWorkspace?: boolean;
  /** Dashboard link in user menu (e.g. "/dashboard"). Defaults to "/". */
  dashboardHref?: string;
  /** Whether to show the FAQ link in the navigation. Defaults to true. */
  showFaq?: boolean;
  /** Whether to show the Pricing link in the navigation. Defaults to false. */
  showPricing?: boolean;
  /** Whether to show the Security link in the navigation. Defaults to true. */
  showSecurity?: boolean;
  /** Optional content rendered below the main header row (e.g. offline banner). */
  bottomContent?: React.ReactNode;
  /** Optional top offset (e.g. "2.5rem") when a fixed bar sits above the header. */
  topOffset?: string;
  /** Custom items to render in the user menu before the sign out button */
  userMenuCustomItems?: React.ReactNode;
  /** Custom navigation items to render in the header bar (e.g. "Tools") */
  customNavItems?: React.ReactNode;
}

export default function Header({ 
  auth, 
  LinkComponent: Link, 
  logoSrc = "/drop_icon_no_margins.png",
  appName = "Drop",
  orgs = [],
  activeOrgId = null,
  onSwitchWorkspace,
  onCreateOrganization,
  allowPersonalWorkspace = true,
  dashboardHref,
  showFaq = true,
  showPricing = false,
  showSecurity = true,
  bottomContent,
  topOffset,
  userMenuCustomItems,
  customNavItems
}: HeaderProps) {
  const { user, loading } = auth
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header 
      className="fixed left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 transition-transform duration-300 translate-y-0"
      style={topOffset ? { top: topOffset } : { top: 0 }}
    >
      <div className="flex w-full max-w-6xl flex-col gap-0">
        <div className={`flex w-full items-center justify-between border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 px-4 sm:px-8 py-3.5 shadow-xl shadow-neutral-500/10 dark:shadow-black/20 backdrop-blur-2xl transition-all duration-300 supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-900/50 hover:shadow-2xl hover:shadow-neutral-500/15 dark:hover:shadow-black/30 ${bottomContent ? 'rounded-t-2xl border-b-0' : 'rounded-2xl'}`}>
        {/* Logo Section */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group relative"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
            <img 
              src={logoSrc}
              alt={`${appName} Logo`}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 transform-gpu will-change-transform [backface-visibility:hidden]"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-brand-orange transition-colors duration-300">
            {appName}
          </span>
        </Link>

        {/* Navigation Links - Hidden on mobile and for logged-in users */}
        {(!loading && !user || customNavItems) && (
          <nav className="hidden md:flex items-center gap-1">
            {!loading && !user && (
              <>
                <Link
                  href="/about"
                  className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200"
                >
                  Why {appName}
                </Link>
                {showPricing && (
                  <Link
                    href="/pricing"
                    className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200"
                  >
                    Pricing
                  </Link>
                )}
                {showFaq && (
                  <Link
                    href="/faq"
                    className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200"
                  >
                    FAQ
                  </Link>
                )}
                {showSecurity && (
                  <Link
                    href="/security"
                    className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200"
                  >
                    Security
                  </Link>
                )}
              </>
            )}
            {customNavItems}
          </nav>
        )}

        {/* User Menu */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserMenu 
            auth={auth} 
            LinkComponent={Link} 
            orgs={orgs}
            activeOrgId={activeOrgId}
            onSwitchWorkspace={onSwitchWorkspace}
            onCreateOrganization={onCreateOrganization}
            allowPersonalWorkspace={allowPersonalWorkspace}
            dashboardHref={dashboardHref}
            customItems={userMenuCustomItems}
          />
          
          {/* Mobile Menu Toggle */}
          {!loading && !user && (
            <button
              className="md:hidden p-2 -mr-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <Cross1Icon className="w-5 h-5" /> : <HamburgerMenuIcon className="w-5 h-5" />}
            </button>
          )}
        </div>
        </div>
        {bottomContent && (
          <div className="overflow-hidden rounded-b-2xl border border-t-0 border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 shadow-xl shadow-neutral-500/10 dark:shadow-black/20 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-900/50 py-2">
            {bottomContent}
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && !loading && !user && (
        <div className="absolute top-full left-0 right-0 p-4 md:hidden animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl p-2 flex flex-col gap-1">
            <Link
              href="/about"
              className="px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why {appName}
            </Link>
            {showPricing && (
              <Link
                href="/pricing"
                className="px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            )}
            {showFaq && (
              <Link
                href="/faq"
                className="px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            )}
            {showSecurity && (
              <Link
                href="/security"
                className="px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Security
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
