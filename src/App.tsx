import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ModalProvider } from './context/ModalContext'
import { AppShell } from './components/layout/AppShell'
import { BookPage } from './pages/BookPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="book" element={<BookPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  )
}
