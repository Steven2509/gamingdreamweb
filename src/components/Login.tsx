import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const validUsers: Record<string, string> = {
  Thien: "admin",
  Thai: "24242424",
  Chau: "saygex123",
  Phu: "phusigma",
  Duy: "baoduyvip",
  Nghi: "nghibi123",
  Minh: "saygex123",
  Phuc: "ok",
  // Thêm nhiều acc tùy ý
};

const Login = ({ setIsLoggedIn }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validUsers[username] === password) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setError("Sai tài khoản hoặc mật khẩu.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-80 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Đăng nhập</h2>

        {error && <p className="text-red-400 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-300"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
