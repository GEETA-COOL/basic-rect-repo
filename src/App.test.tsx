import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders the heading', () => {
    render(<App />)

    const heading = screen.getByText(/hello world!/i)

    expect(heading).toBeInTheDocument()
  })

  it('renders the paragraph text', () => {
    render(<App />)

    const paragraph = screen.getByText(/dcjdscnjdsncjdsncjds/i)

    expect(paragraph).toBeInTheDocument()
  })

  it('renders the button', () => {
    render(<App />)

    const button = screen.getByRole('button', {
      name: /click me/i,
    })

    expect(button).toBeInTheDocument()
  })
})
