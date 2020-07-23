import 'konstellation-web-components/dist/index.css'

import { Button } from 'konstellation-web-components'
import { ErrorMessage } from 'konstellation-web-components'
import React from 'react'

const App = () => {
  return (
    <div>
      <Button label='HOLA' primary />
      <ErrorMessage />
    </div>
  )
}

export default App
