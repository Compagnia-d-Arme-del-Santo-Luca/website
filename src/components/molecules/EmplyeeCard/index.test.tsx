import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import EmplyeeCard from './index'

describe('EmplyeeCard', () => {
  const name = 'John Doe'
  const image = '/images/john.jpg'
  const position = 'Blacksmith'

  it('renders name, image and optional position', () => {
    render(<EmplyeeCard name={name} image={image} position={position} />)

    expect(screen.getByText(name)).toBeInTheDocument()
    expect(screen.getByText(position)).toBeInTheDocument()

    const img = screen.getByAltText(`${name} image`) as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain(image)
  })

  it('calls onClick with (event, description) payload', () => {
    const description = { body: ['this is a description for John Doe'] }
    const handleClick = vi.fn()
    render(<EmplyeeCard name={name} image={image} position={position} description={description} onClick={handleClick} />)

    fireEvent.click(screen.getByText(name))

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith(expect.any(Object), {
      title: name,
      image: image,
      position: position,
      ...description,
    })
  })

  it('calls onClick with the fields set in the description', () => {
    const description = {
      title: 'Jane Doe',
      position: 'Barber',
      image: '/images/jane.jpg',
      body: ['this is a description for Jane Doe'],
    }
    const handleClick = vi.fn()
    render(<EmplyeeCard name={name} image={image} position={position} description={description} onClick={handleClick} />)

    fireEvent.click(screen.getByText(name))

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith(expect.any(Object), {
      ...description,
    })
  })
})
