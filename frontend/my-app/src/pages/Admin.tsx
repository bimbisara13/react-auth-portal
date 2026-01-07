import Navbar from "../components/Navbar";

export default function Admin() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-xl font-semibold mb-2">Admin Panel</h1>

        <p className="mb-1">Restricted access</p>

        <p className="text-(--color-muted)">
          This section is available only to administrators.
        </p>
      </main>
    </>
  );
}
