import Link from 'next/link'

export default function NavMenu() {
  return (
    <div className="py-1">
      <Link
        href="/static-images"
        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
        role="menuitem"
        tabIndex={-1}
      >
        Static Images
      </Link>
      
      <Link
        href="/design-examples"
        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
        role="menuitem"
        tabIndex={-1}
      >
        Design Examples
      </Link>
    </div>
  )
} 