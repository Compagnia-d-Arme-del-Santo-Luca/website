import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import 'components/molecules/EmplyeeCard/index.js'
import EmplyeeStack from './index'

// Mock EmplyeeCard to make click handling deterministic in tests
vi.mock('components/molecules/EmplyeeCard/index.js', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  EmplyeeCard: (props: any) => (
    <div
      data-testid="mock-card"
      onClick={e => props.onClick?.(e, { title: props.name, image: props.image, position: props.position, ...(props.description || {}) })}>
      <img alt={`${props.name} image`} src={props.image} />
      {props.name}
    </div>
  ),
}))

describe('EmplyeeStack', () => {
  const items = [
    { name: 'Alice', image: '/images/alice.jpg', position: 'Armorer' },
    { name: 'Bob', image: '/images/bob.jpg', position: 'Fletcher' },
    { name: 'Charlie', image: '/images/charlie.jpg', position: 'Scribe' },
  ]

  it('renders all provided cards (up to maxVisible)', () => {
    render(<EmplyeeStack items={items} />)

    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(items.length)
    expect(imgs[0]).toHaveAttribute('alt', `${items[0].name} image`)
  })

  it('renders provided cards up to maxVisible', () => {
    render(<EmplyeeStack items={items} maxVisible={2} />)

    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(2)
  })

  it('rotates the top card to the back on click', () => {
    render(<EmplyeeStack items={items} />)

    // initial order: Alice, Bob, Charlie
    let imgs = screen.getAllByRole('img')
    expect(imgs[0]).toHaveAttribute('alt', 'Alice image')

    // clicking the shuffle IconButton rotates the deck
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[buttons.length - 1])

    imgs = screen.getAllByRole('img')
    // after rotation: Bob, Charlie, Alice
    expect(imgs[0]).toHaveAttribute('alt', 'Bob image')
    expect(imgs[1]).toHaveAttribute('alt', 'Charlie image')
    expect(imgs[2]).toHaveAttribute('alt', 'Alice image')
  })

  it('forwards and calls per-card onClick handlers with description payload', () => {
    const handleClick = vi.fn()
    const items = [
      { name: 'Alice', image: '/images/alice.jpg', position: 'Armorer', description: { body: ['A'] } },
      { name: 'Bob', image: '/images/bob.jpg', position: 'Fletcher' },
    ]

    render(<EmplyeeStack items={items} onClick={handleClick} />)

    const alice = screen.getByText('Alice')
    fireEvent.click(alice)

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith(expect.any(Object), {
      title: 'Alice',
      image: '/images/alice.jpg',
      position: 'Armorer',
      body: ['A'],
    })
  })
})
