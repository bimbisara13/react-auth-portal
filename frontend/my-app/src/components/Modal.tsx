import type { ModalProps } from '../types'

/**
 * Generic Modal
 *
 * A reusable modal dialog for confirming actions.
 * Responsibilities:
 *  - Displays a modal overlay with a title, description, and confirm/cancel buttons
 *  - Handles visibility based on `open` prop
 *  - Calls `onConfirm` and `onCancel` callbacks for the respective button actions
 *
 * Props:
 *  - `open`: Boolean to control visibility.
 *  - `title`: Title of the modal (default: 'Confirm action')
 *  - `description`: Optional description text to provide more context
 *  - `confirmText`: Text for the confirm button (default: 'Confirm')
 *  - `cancelText`: Text for the cancel button (default: 'Cancel')
 *  - `onConfirm`: Callback function when the confirm button is clicked
 *  - `onCancel`: Callback function when the cancel button is clicked or overlay is clicked
 */
export default function Modal({
  open,
  title = 'Confirm action',
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />

      <div className="relative w-full max-w-sm rounded-xl bg-(--color-bg) border border-(--color-border) p-6 space-y-4">
        <h2 className="text-lg font-semibold text-(--color-text)">{title}</h2>

        {description && (
          <div className="text-sm text-(--color-text)/80">{description}</div>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onCancel}
            className="px-3 py-1 rounded-lg border border-(--color-border) text-(--color-text)"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}
