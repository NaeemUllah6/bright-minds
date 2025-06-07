import { AuthProvider } from './context/AuthContext'
import Routers from './router/index'

function App() {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  )
}

export default App