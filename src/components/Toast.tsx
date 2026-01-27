'use client'

import { toast as sonnerToast, type ExternalToast } from 'sonner'
import { CheckCircleIcon, AlertTriangleIcon, XIcon } from '../icons/generated'
import { ReactNode } from 'react'

export interface ToastProps {
  t: string | number
  title: string | ReactNode | (() => ReactNode)
  description?: string | ReactNode | (() => ReactNode)
  type?: 'success' | 'error' | 'info' | 'warning' | 'loading'
}

export function Toast({ t, title, description, type = 'info' }: ToastProps) {
  const renderedTitle = typeof title === 'function' ? (title as () => ReactNode)() : title
  const renderedDescription = typeof description === 'function' ? (description as () => ReactNode)() : description

  return (
    <div className="w-full max-w-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-lg p-4 flex items-start gap-3 pointer-events-auto">
      <div className={`mt-0.5 shrink-0 ${
        type === 'success' ? 'text-green-500' :
        type === 'error' ? 'text-red-500' :
        type === 'warning' ? 'text-amber-500' :
        type === 'loading' ? 'text-neutral-500' :
        'text-blue-500'
      }`}>
        {type === 'success' && <CheckCircleIcon className="w-5 h-5" />}
        {(type === 'error' || type === 'warning') && <AlertTriangleIcon className="w-5 h-5" />}
        {type === 'info' && <CheckCircleIcon className="w-5 h-5" />}
        {type === 'loading' && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-200 border-t-brand-orange dark:border-neutral-800 dark:border-t-brand-orange" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
          {renderedTitle}
        </div>
        {renderedDescription && (
          <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {renderedDescription}
          </div>
        )}
      </div>

      <button 
        onClick={() => sonnerToast.dismiss(t)}
        className="shrink-0 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
      >
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  )
}

const toastFn = (message: string | ReactNode | (() => ReactNode), options?: ExternalToast) => {
  return sonnerToast.custom((t) => (
    <Toast t={t} title={message} description={options?.description} type="info" />
  ), options)
}

export const toast = Object.assign(toastFn, {
  success: (message: string | ReactNode | (() => ReactNode), options?: ExternalToast) => {
    return sonnerToast.custom((t) => (
      <Toast t={t} title={message} description={options?.description} type="success" />
    ), options)
  },
  error: (message: string | ReactNode | (() => ReactNode), options?: ExternalToast) => {
    return sonnerToast.custom((t) => (
      <Toast t={t} title={message} description={options?.description} type="error" />
    ), options)
  },
  warning: (message: string | ReactNode | (() => ReactNode), options?: ExternalToast) => {
    return sonnerToast.custom((t) => (
      <Toast t={t} title={message} description={options?.description} type="warning" />
    ), options)
  },
  info: (message: string | ReactNode | (() => ReactNode), options?: ExternalToast) => {
    return sonnerToast.custom((t) => (
      <Toast t={t} title={message} description={options?.description} type="info" />
    ), options)
  },
  loading: (message: string | ReactNode | (() => ReactNode), options?: ExternalToast) => {
    return sonnerToast.custom((t) => (
      <Toast t={t} title={message} description={options?.description} type="loading" />
    ), options)
  },
  message: (message: string | ReactNode | (() => ReactNode), options?: ExternalToast) => {
    return sonnerToast.custom((t) => (
      <Toast t={t} title={message} description={options?.description} type="info" />
    ), options)
  },
  promise: <T,>(promise: Promise<T> | (() => Promise<T>), data?: { 
    loading?: string | ReactNode; 
    success?: string | ReactNode | ((data: T) => ReactNode | string); 
    error?: string | ReactNode | ((error: any) => ReactNode | string); 
    description?: string | ReactNode | ((data: any) => ReactNode | string);
    finally?: () => void | Promise<void>;
  } & ExternalToast) => {
    const id = sonnerToast.custom((t) => (
      <Toast t={t} title={data?.loading || 'Loading...'} description={data?.description as ReactNode} type="loading" />
    ), { ...data, duration: Infinity });

    const p = typeof promise === 'function' ? promise() : promise;

    p.then((result) => {
      const successMessage = typeof data?.success === 'function' ? data.success(result) : data?.success || 'Success';
      const description = typeof data?.description === 'function' ? data.description(result) : data?.description;
      
      sonnerToast.custom((t) => (
        <Toast t={t} title={successMessage} description={description as ReactNode} type="success" />
      ), { id, duration: 4000 });
      return result;
    }).catch((error) => {
      const errorMessage = typeof data?.error === 'function' ? data.error(error) : data?.error || 'Error';
      const description = typeof data?.description === 'function' ? data.description(error) : data?.description;

      sonnerToast.custom((t) => (
        <Toast t={t} title={errorMessage} description={description as ReactNode} type="error" />
      ), { id, duration: 4000 });
      throw error;
    }).finally(() => {
        if (data?.finally) data.finally();
    });

    return id;
  },
  dismiss: sonnerToast.dismiss,
  custom: sonnerToast.custom,
})
