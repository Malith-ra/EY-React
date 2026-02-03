import { useState } from "react"

export default function LoginForm() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })




    const handleSubmit = (e) => {
        const { email, password } = formData


        if (!email || !password) {
            console.log("empty fields")
        }



        console.log("formData", formData);




        // submit function
    }

    const handleChange = (e) => {
        const { name, value } = e.target.value

        setFormData((prev) => ({
            ...prev, [name]: value
        }))


    }


    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email ID</label>
                    <input onChange={handleChange} type="email" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={handleChange} type="password" name="password" />
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}