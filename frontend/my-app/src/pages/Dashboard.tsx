import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from '../components/Navbar'
import SearchTable from '../components/SearchTable'
import { useAuth } from '../hooks/useAuth'
import type { RootState, AppDispatch } from '../store'
import { userDetails } from '../store/users.thunk'
import type { Users, Column } from '../types'

export default function Dashboard() {
  const { user } = useAuth()
  const dispatch = useDispatch<AppDispatch>()

  const { users, loading } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    if (!users || users.length === 0) {
      dispatch(userDetails())
    }
  }, [dispatch, users])

  const columns: Column<Users>[] = [
    {
      key: 'id',
      header: 'ID',
      render: (_, index) => index + 1,
    },
    {
      key: 'name',
      header: 'Name',
      render: (user) => `${user.name.first} ${user.name.last}`,
    },
    {
      key: 'email',
      header: 'Email',
      render: (user) => user.email,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-xl font-semibold mb-2">Dashboard</h1>

        <div className="text-lg my-4">
          <p className="mb-2">Welcome back, {user?.firstName}.</p>
          <p>
            You are logged in as{' '}
            <span className="font-semibold text-sky-500">{user?.role}</span>.
          </p>
        </div>

        <p className="text-3xl font-light my-8 text-center">User data</p>

        <SearchTable<Users>
          data={users || []}
          columns={columns}
          getRowId={(row) => row.email}
          filterFn={(row, search) =>
            `${row.name.first} ${row.name.last}`
              .toLowerCase()
              .includes(search.toLowerCase())
          }
          itemsPerPage={7}
          loading={loading}
        />
      </main>
    </>
  )
}
