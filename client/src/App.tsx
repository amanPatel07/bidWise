import { RouterProvider } from 'react-router-dom'
import './App.css'
import appRouter from './App.routing'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
