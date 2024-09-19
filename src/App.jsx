import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage';
import Mainlayout from './layouts/Mainlayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };
  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

const router= createBrowserRouter(
  createRoutesFromElements(<Route path = '/' element={<Mainlayout></Mainlayout>}> 
  <Route index element={<HomePage></HomePage>}></Route>
  <Route path = 'jobs1' element={<JobsPage></JobsPage>}></Route>
  <Route path = 'jobs1/:id' element={<JobPage deleteJob={deleteJob}></JobPage>} loader={jobLoader}></Route>
  <Route path = 'edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}></EditJobPage>} loader={jobLoader}></Route>
  <Route path = 'add-job' element={<AddJobPage addJobSubmit={addJob} />}></Route>
  <Route path = '*' element={<NotFoundPage></NotFoundPage>}></Route>
  </Route>)
);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App