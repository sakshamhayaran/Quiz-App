import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">

      <nav className="p-5 right-0 bg-white shadow-sm z-20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-semibold">Quiz App</div>
          <div className="flex items-center gap-4">
            <NavLink to="/"
              className={({ isActive }) =>
                `px-3 py-1 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              Quiz
            </NavLink>
            <NavLink to="/result"
              className={({ isActive }) =>
                `px-3 py-1 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              Result
            </NavLink>
          </div>
        </div>
      </nav >

      <main className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Outlet />
        </div>
      </main>


      <footer className="border-t p-5 bottom-3 text-center fixed bottom-0 right-0 left-0 opacity-100">
        <div className="max-w-4xl mx-auto text-sm text-gray-600">-- Developed by Saksham Hayaran --</div>
      </footer>

    </div >
  )
}

export default App