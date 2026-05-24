import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'

// Khởi tạo nhanh giao diện để tránh nhấp nháy (Flicker)
const savedTheme = localStorage.getItem('theme') || 'auto';
const rootElement = document.documentElement;
if (savedTheme === 'dark') {
  rootElement.classList.add('dark');
} else if (savedTheme === 'light') {
  rootElement.classList.remove('dark');
} else {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  if (systemTheme === 'dark') {
    rootElement.classList.add('dark');
  } else {
    rootElement.classList.remove('dark');
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

