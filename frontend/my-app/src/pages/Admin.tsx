import Navbar from '../components/Navbar'

export default function Admin() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <p className="text-xl font-semibold mb-2">Admin Panel</p>

        <p className="text-lg">
          This is a{' '}
          <span className="font-semibold text-teal-500">protected</span> route
          and is available only to administrators.
        </p>
      </main>
    </>
  )
}
