import React from 'react'
import Checklist from '../views/Checklist/'
import { render, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { act } from 'react-dom/test-utils'
import axios from 'axios'

jest.mock('axios')
describe('interface is operating correctly', () => {
  const component = (
    <Router history={createMemoryHistory()}>
      <Checklist />
    </Router>
  )

  it('typing into the textfield changes input value', async () => {
    axios.mockImplementationOnce(() => Promise.resolve({ data: { items: [] } }))

    const { getByTestId, debug } = render(component)
    const topic = getByTestId('topic')
    const contents = getByTestId('contents')

    expect(topic.value).toBe('')
    userEvent.type(topic, 'item topic')
    await waitFor(() => expect(topic.value).toBe('item topic'))
  })
})
