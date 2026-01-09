import { useState, useMemo, useRef, useCallback, type ReactNode } from 'react'

export interface Column<T> {
  key: string
  header: string
  render: (row: T, index: number) => ReactNode
}

export interface SearchTableProps<T> {
  data: T[]
  columns: Column<T>[]
  getRowId: (row: T, index: number) => string | number
  filterFn?: (row: T, search: string) => boolean
  itemsPerPage?: number
  loading?: boolean
}

export default function PaginatedSearchTable<T>({
  data,
  columns,
  getRowId,
  filterFn,
  itemsPerPage = 7,
  loading,
}: SearchTableProps<T>) {
  const [search, setSearch] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const debounceRef = useRef<number | undefined>(undefined)

  const handleSearch = useCallback((val: string) => {
    setInputValue(val)

    if (debounceRef.current !== undefined) {
      window.clearTimeout(debounceRef.current)
    }

    debounceRef.current = window.setTimeout(() => {
      setSearch(val)
      setCurrentPage(1)
    }, 500)
  }, [])

  const filteredData = useMemo<T[]>(() => {
    return filterFn ? data.filter((item) => filterFn(item, search)) : data
  }, [data, search, filterFn])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const pageData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="space-y-4">
      <input
        disabled={loading}
        value={inputValue}
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        className={`w-[250px] rounded border px-3 py-2 text-base outline-none transition border-(--color-border) bg-(--color-bg) text-(--color-text) focus:border-(--color-accent) focus:shadow-[0_0_5px_var(--color-accent)]  ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      />

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-(--color-table-header) text-(--color-bg)">
            {columns.map((col) => (
              <th
                key={col.key}
                className="border border-(--color-border) px-3 py-2"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: itemsPerPage }).map((_, i) => (
              <tr key={i} className="animate-pulse">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="border border-(--color-border) px-3 py-3"
                  >
                    <div className="h-4 w-full rounded bg-slate-700 animate-pulse" />
                  </td>
                ))}
              </tr>
            ))
          ) : pageData.length ? (
            pageData.map((row, i) => (
              <tr
                key={getRowId(row, startIndex + i)}
                className="odd:bg-transparent even:bg-black/5 dark:even:bg-white/5"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="border border-(--color-border) px-3 py-2"
                  >
                    {col.render(row, startIndex + i)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="border border-(--color-border) px-3 py-6 opacity-60"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {!loading && (
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, i) => {
            const active = currentPage === i + 1
            return (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`rounded px-3 py-1.5 transition
                ${
                  active
                    ? 'bg-(--color-accent) text-(--color-bg)'
                    : 'border border-(--color-border) bg-(--color-bg) text-(--color-text) hover:bg-(--color-table-header) hover:text-(--color-bg)'
                }`}
              >
                {i + 1}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
