import clsx from 'clsx'
import { useFormStatus } from 'react-dom'
import {
  ArrowRightIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: 'plus' | 'pencil' | 'trash' | 'right' | 'power'
  children: React.ReactNode
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 space-x-4',
        className
      )}
    >
      {children}
    </button>
  )
}

export function DaisyButton({
  children,
  className,
  icon,
  ...rest
}: ButtonProps) {
  const { pending } = useFormStatus()
  const Icon = () =>
    icon === 'plus' ? (
      <PlusIcon className="w-5 h-5" />
    ) : icon === 'pencil' ? (
      <PencilIcon className="w-5 h-5" />
    ) : icon === 'right' ? (
      <ArrowRightIcon className="w-5 h-5" />
    ) : icon === 'trash' ? (
      <TrashIcon className="w-5 h-5" />
    ) : null
  return (
    <button
      className={`btn btn-primary normal-case ${className}`}
      {...rest}
      disabled={pending}
    >
      {children}
      {pending ? <span className="loading loading-spinner"></span> : <Icon />}
    </button>
  )
}
