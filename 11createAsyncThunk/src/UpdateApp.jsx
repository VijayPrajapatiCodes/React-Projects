import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./App/UserSlice";

function UpdateApp() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h2>Users</h2>
  
        {error && (
            <>
              <button onClick={()=>dispatch(fetchUsers())}>Retry </button>
            </>
        )}
    <button onClick={()=>dispatch(fetchUsers())}>Refresh User</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
       
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
    
  );
}

export default App;