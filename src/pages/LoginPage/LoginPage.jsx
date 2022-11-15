import { useState } from "react";

export default function LoginPage({login}) {
    const [userName, setUserName] = useState("")

    const handleChange = (evt) => {
        setUserName(evt.target.value)
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        login(userName)
        setUserName("")
    }
    return (
      <main className="LoginPage">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userName}
                onChange={handleChange}
                name="username"
                id="username"
                placeholder="Enter username"
                required
                autoComplete="off"
            />
            <button className="" type="submit">Submit</button>
        </form>
      </main>
    );
}