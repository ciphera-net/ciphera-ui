'use client'

import React, { useState } from 'react'
import { PlusIcon, PersonIcon, CubeIcon, CheckIcon } from '@radix-ui/react-icons'

export interface WorkspaceSwitcherProps {
  orgs: any[]
  activeOrgId: string | null
  onSwitch: (orgId: string | null) => void
  onCreate?: () => void
  createHref?: string
  allowPersonalWorkspace?: boolean
}

export default function WorkspaceSwitcher({ 
  orgs, 
  activeOrgId, 
  onSwitch, 
  onCreate, 
  createHref,
  allowPersonalWorkspace = true 
}: WorkspaceSwitcherProps) {
  const [switching, setSwitching] = useState<string | null>(null)
  
  const handleSwitch = async (orgId: string | null) => {
    setSwitching(orgId || 'personal')
    try {
      await onSwitch(orgId)
    } catch (err) {
      console.error('Failed to switch workspace', err)
    } finally {
        // We don't clear switching state immediately because page reload usually happens
        // But if it fails, we should clear it
        setTimeout(() => setSwitching(null), 1000)
    }
  }

  return (
    <div className="border-b border-neutral-100 dark:border-neutral-800 pb-2 mb-2">
      <div className="px-3 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
        Workspaces
      </div>
      
      {/* Personal Workspace */}
      {allowPersonalWorkspace && (
        <button
            onClick={() => handleSwitch(null)}
            className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors group ${
                !activeOrgId ? 'bg-neutral-100 dark:bg-neutral-800' : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
            }`}
        >
            <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                <PersonIcon className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
            </div>
            <span className="text-neutral-700 dark:text-neutral-300">Personal</span>
            </div>
            <div className="flex items-center gap-2">
                {switching === 'personal' && <span className="text-xs text-neutral-400">Loading...</span>}
                {!activeOrgId && !switching && <CheckIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />}
            </div>
        </button>
      )}
      
      {/* Organization Workspaces */}
      {orgs.map((org) => (
        <button
          key={org.organization_id}
          onClick={() => handleSwitch(org.organization_id)}
          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors mt-1 ${
            activeOrgId === org.organization_id ? 'bg-neutral-100 dark:bg-neutral-800' : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-brand-orange/10 flex items-center justify-center">
              <CubeIcon className="h-3 w-3 text-brand-orange" />
            </div>
            <span className="text-neutral-700 dark:text-neutral-300 truncate max-w-[140px]">
              {org.organization_name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {switching === org.organization_id && <span className="text-xs text-neutral-400">Loading...</span>}
            {activeOrgId === org.organization_id && !switching && <CheckIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />}
          </div>
        </button>
      ))}

      {/* Create New */}
      {(onCreate || createHref) && (
        createHref ? (
            <a
                href={createHref}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-neutral-500 hover:text-brand-orange dark:text-neutral-400 dark:hover:text-brand-orange hover:bg-brand-orange/10 rounded-md transition-colors mt-1"
            >
                <div className="h-5 w-5 rounded border border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center">
                <PlusIcon className="h-3 w-3" />
                </div>
                <span>Create Organization</span>
            </a>
        ) : (
            <button
                onClick={onCreate}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-neutral-500 hover:text-brand-orange dark:text-neutral-400 dark:hover:text-brand-orange hover:bg-brand-orange/10 rounded-md transition-colors mt-1"
            >
                <div className="h-5 w-5 rounded border border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center">
                <PlusIcon className="h-3 w-3" />
                </div>
                <span>Create Organization</span>
            </button>
        )
      )}
    </div>
  )
}
