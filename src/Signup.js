import React from 'react'
import useForm from './useForm'
import validate from './FormValidation'
import './Form.css'

const Signup = ({ App }) => {
    const { values, handleChange, handleSubmit, errors } = useForm(App, validate)
    return (
        <div className="right">
            <form className="forminputs" onSubmit={handleSubmit}>
                <h1>
                    MyForm
                </h1>
                <div className="inputform">
                    <label className="formlabel"
                        htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="forminput"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange} />
                    {errors.username && <h5>{errors.username}</h5>}
                </div>
                <div className='inputform'>
                    <label className='formlabel'
                        htmlfor='email'
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="forminput"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <h5>{errors.email}</h5>}
                </div>
                <div className='inputform'>
                    <label className='formlabel'
                        htmlfor='password'
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="forminput"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <h5>{errors.password}</h5>}
                </div>
                <div className='inputform'>
                    <label className='formlabel'
                        htmlfor='confirmpassword'
                    >
                        Confirm Password
                    </label>
                    <input
                        id="confirmpassword"
                        type="password"
                        name="confirmpassword"
                        className="forminput"
                        placeholder="confirm password"
                        value={values.confirmpassword}
                        onChange={handleChange} />
                    {errors.confirmpassword && <h5>{errors.confirmpassword}</h5>}
                </div>
                <button className="btn"
                    type='submit'>
                    Sign up
                </button>
                <span className='inputlogin'>
                    Already have an account? Login <a href='#'><u>here</u></a>
                </span>
            </form>
        </div>
    )
}

export default Signup

