import Navbar from '../components/Navbar'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import SearchTable, { type Column } from '../components/SearchTable'

interface RandomUserName {
  first: string
  last: string
}

interface RandomUser {
  name: RandomUserName
  email: string
}

export default function Dashboard() {
  const { user } = useAuth()
  const [users, setUsers] = useState<RandomUser[]>([])
  const [loading, setLoading] = useState(true)

  const BASE_URL = 'https://randomuser.me/api/?results=30'

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => setUsers(data.results))
        .finally(() => setLoading(false))
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const columns: Column<RandomUser>[] = [
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
        <SearchTable<RandomUser>
          data={users}
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
