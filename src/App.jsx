import React from 'react'
import List from '@/components/Listquotes'
import Addquotes from '@/components/Addquotes'
import Singlequotes from '@/components/Singlequotes'

function App() {
  return (
    <div>
      <List />
      <Addquotes />
      <Singlequotes />
      <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white"></div>
    </div>
  )
}

export default App