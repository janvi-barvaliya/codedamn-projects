import React, { useState } from 'react'
import styled from 'styled-components'

const SignUpForm = () => {
  //  input values
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  //  errors
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [submitted, setSubmitted] = useState(false)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    const { firstName, lastName, email, password, confirmPassword } = values
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    let hasErrors = false

    // First Name
    if (!firstName.trim()) {
      newErrors.firstName = 'First name cannot be empty'
      hasErrors = true
    }

    // Last Name
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name cannot be empty'
      hasErrors = true
    }

    // Email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = 'Invalid email address'
      hasErrors = true
    }

    // Password
    if (!password || password.length < 8) {
      newErrors.password = 'Password must be greater than 7 characters'
      hasErrors = true
    }

    // Confirm Password
    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match'
      hasErrors = true
    }

    setErrors(newErrors)

    if (!hasErrors) {
      console.log('Form submitted successfully')
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleChange}
        />
        <p data-testid="first-name-error-id" className="error">
          {submitted && errors.firstName}
        </p>

        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleChange}
        />
        <p data-testid="last-name-error-id" className="error">
          {submitted && errors.lastName}
        </p>

        <input
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
          value={values.email}
          onChange={handleChange}
        />
        <p data-testid="email-error-id" className="error">
          {submitted && errors.email}
        </p>

        <input
          data-testid="password-id"
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <p data-testid="password-error-id" className="error">
          {submitted && errors.password}
        </p>

        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <p data-testid="confirm-password-error-id" className="error">
          {submitted && errors.confirmPassword}
        </p>

        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  )
}

export default SignUpForm

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(135deg, #1e024d, #350b64, #4b1d80);
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

	form {
		background: linear-gradient(135deg, #1a1a40, #2e1a47);
		padding: 40px 30px;
		border-radius: 16px;
		box-shadow: 0 0 20px rgba(124, 92, 255, 0.4);
		display: flex;
		flex-direction: column;
		align-items: center;
		width: clamp(300px, 90%, 400px);
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	input {
		padding: 10px 14px;
		font-size: 16px;
		border: 1px solid #888;
		border-radius: 8px;
		margin-bottom: 10px;
		width: 100%;
		background-color: #1f1f3d;
		color: #fff;
		transition: border-color 0.3s, color 0.3s, background-color 0.3s;

		&::placeholder {
			color: #bbb;
			transition: opacity 0.3s;
		}

		&:hover {
			color: #e0d7ff;
		}

		&:hover::placeholder,
		&:focus::placeholder {
			opacity: 0.5;
		}

		&:focus {
			border-color: #a084e8;
			outline: none;
			background-color: #26264d;
			color: #f8f8ff;
		}
	}

	button {
		padding: 12px 20px;
		font-size: 16px;
		border: none;
		border-radius: 8px;
		background: linear-gradient(to right, #6a5acd, #7b68ee);
		color: #fff;
		cursor: pointer;
		margin-top: 20px;
		width: 100%;
		transition: transform 0.3s ease, box-shadow 0.3s ease;

		&:hover {
			transform: scale(1.03);
			box-shadow: 0 0 10px #a084e8;
		}
	}

	.error {
		margin: 0 0 12px 0;
		color: #ff6b81;
		font-size: 14px;
		width: 100%;
		text-align: left;
	}
`