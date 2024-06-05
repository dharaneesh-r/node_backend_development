import React from 'react'

function App() {

  const slugify = require('slugify')

  console.log(slugify('Fresh Avocados',{lower : true}))
  console.log(slugify)
  return (
    <div>App</div>
  )
}

export default App