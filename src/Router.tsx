import { createHashRouter } from 'react-router-dom'

export default createHashRouter([
  {
    path: '/home',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/hello-world',
    element: <HelloWorld />
  },
  {
    path: '/survey',
    element: <Survey />
  },
  {
    path: '/finish',
    element: <FinishPage />
  },
  {
    path: '/about-us',
    element: <AboutPage />
  }
]
  // , {
  //   basename: import.meta.env.BASE_URL.slice(0, -1)
  // }
)
