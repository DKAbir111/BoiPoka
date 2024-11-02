import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import ListedBook from './components/ListedBooks/ListedBook';

import PaagesToRead from './components/PagesToRead/PaagesToRead';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      }, {
        path: '/listedbook',
        element: <ListedBook />
      },
      {
        path: "/pagestoread",
        element: <PaagesToRead />
      },
      {
        path: '/books/:id',
        element: <BookDetails />,
        loader: () => fetch('/booksData.json')
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
