import { useState, useEffect } from "react";
import userService, { User } from "../services/user-service";

const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const request = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
