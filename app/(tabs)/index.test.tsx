// import { cleanup, fireEvent, render } from '@testing-library/react-native'
// import React from 'react'
// import LoginScreen from './index'

// // Robust navigation mock
// const mockNavigate = jest.fn()
// jest.mock('@react-navigation/native', () => ({
//   useNavigation: () => ({ navigate: mockNavigate }),
// }))

// describe('LoginScreen', () => {
//   beforeEach(() => {
//     mockNavigate.mockClear()
//     cleanup()
//   })

//   it('renders all UI elements', () => {
//     const { getByPlaceholderText, getByText } = render(<LoginScreen />)
//     expect(getByText('Login')).toBeTruthy() // Title
//     expect(getByPlaceholderText('Email')).toBeTruthy()
//     expect(getByPlaceholderText('Password')).toBeTruthy()
//     expect(getByText('Forgot Password?')).toBeTruthy()
//     expect(getByText('Register')).toBeTruthy()
//     expect(getByText('Or login with')).toBeTruthy()
//     expect(getByText('Continue with Google')).toBeTruthy()
//     expect(getByText('Continue with Facebook')).toBeTruthy()
//     expect(getByText('Continue with Apple')).toBeTruthy()
//   })

//   it('allows typing in email and password fields', () => {
//     const { getByPlaceholderText } = render(<LoginScreen />)
//     const emailInput = getByPlaceholderText('Email')
//     const passwordInput = getByPlaceholderText('Password')
//     fireEvent.changeText(emailInput, 'test@example.com')
//     fireEvent.changeText(passwordInput, 'password123')
//     expect(emailInput.props.value).toBe('test@example.com')
//     expect(passwordInput.props.value).toBe('password123')
//   })

//   it('navigates to ForgotPassword screen on button press', () => {
//     const { getByText } = render(<LoginScreen />)
//     fireEvent.press(getByText('Forgot Password?'))
//     expect(mockNavigate).toHaveBeenCalledWith('ForgotPassword')
//   })

//   it('navigates to Register screen on button press', () => {
//     const { getByText } = render(<LoginScreen />)
//     fireEvent.press(getByText('Register'))
//     expect(mockNavigate).toHaveBeenCalledWith('Register')
//   })

//   it('calls login handler on Login button press', () => {
//     const { getAllByText } = render(<LoginScreen />)
//     // There are two 'Login' texts: title and button, get the button (second occurrence)
//     fireEvent.press(getAllByText('Login')[1])
//     // The login handler does not navigate by default, so just check no navigation
//     expect(mockNavigate).not.toHaveBeenCalled()
//   })

//   it('renders all social login buttons', () => {
//     const { getByText } = render(<LoginScreen />)
//     expect(getByText('Continue with Google')).toBeTruthy()
//     expect(getByText('Continue with Facebook')).toBeTruthy()
//     expect(getByText('Continue with Apple')).toBeTruthy()
//   })
// })
