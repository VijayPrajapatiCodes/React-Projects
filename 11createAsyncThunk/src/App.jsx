import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./App/UserSlice";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">

      <div className="w-full max-w-5xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            User Name
          </h2>

          <button
            onClick={() => dispatch(fetchUsers())}
            className="px-6 py-3 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            🔄 Refresh
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-500/20 backdrop-blur-lg border border-red-300 text-white p-6 rounded-xl mb-6 shadow-lg">
            <p className="text-lg font-semibold mb-4">{error}</p>

            <button
              onClick={() => dispatch(fetchUsers())}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300"
            >
              Retry
            </button>
          </div>
        )}

        {/* User List */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((user) => (
            <div
              key={user.id}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-md">
                  {user.name.charAt(0)}
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {user.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;