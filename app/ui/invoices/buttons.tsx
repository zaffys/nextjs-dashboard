import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { deleteInvoice } from '@/app/lib/actions'

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="btn btn-primary normal-case"
    >
      <span className="hidden md:block">Create Invoice</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  )
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="btn btn-square btn-sm"
    >
      <PencilIcon className="w-5" />
    </Link>
  )
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id)

  return (
    <form action={deleteInvoiceWithId}>
      <button className="btn btn-square btn-sm btn-warning">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  )
}
