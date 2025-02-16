import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
// import Navbar from "./Components/Navbar"
// import Hero from "./Components/Hero"
// import HomeCards from "./Components/HomeCards";
// import JobListing from "./Components/JobListings";
// import ViewsAllJob from "./Components/ViewsAllJob";
import HomePage from "./Pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobPage from "./Pages/JobPage";
import NotFoundPage from "./Pages/NotFoundPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);


const App = () => {
  return <RouterProvider router={router} />
}

export default App
