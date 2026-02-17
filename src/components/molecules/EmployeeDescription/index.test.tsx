import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import EmployeeDescriptionDialog, { EmployeeDescription } from './index'

describe('EmployeeDescriptionDialog', () => {
  const base: EmployeeDescription = {
    title: 'Sir Tester',
    position: 'Tester General',
    image: '/images/tester.jpg',
    body: ['First paragraph', 'Second paragraph'],
    captions: ['Caption A', 'Caption B'],
  }

  it('renders title, position, image and body paragraphs', () => {
    render(<EmployeeDescriptionDialog open description={base} />)

    expect(screen.getByText(base.title)).toBeInTheDocument()
    expect(screen.getByText(base.position!)).toBeInTheDocument()
    const img = screen.getByAltText(base.title) as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain(base.image)
    expect(screen.getByText('First paragraph')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph')).toBeInTheDocument()
  })

  it('renders captions when provided', () => {
    render(<EmployeeDescriptionDialog open description={base} />)

    expect(screen.getByText('Caption A')).toBeInTheDocument()
    expect(screen.getByText('Caption B')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn()
    render(<EmployeeDescriptionDialog open description={base} onClose={handleClose} />)

    const button = screen.getByLabelText('close')
    fireEvent.click(button)

    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
