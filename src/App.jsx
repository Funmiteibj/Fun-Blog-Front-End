import { Route, Routes } from "react-router-dom"
// import PostList from "./components/blog/PostList";
// import AddPost from "./components/blog/AddPost";
import { useState } from "react"

import NavigationView from "./components/header/NavigationView"
import HomeView from "./components/home/HomeView"
import AboutUs from "./components/about/AboutUs"
import StudentView from "./components/student/StudentView"
import BlogView from "./components/blog/BlogView"
import ContactUs from "./components/contact/ContactUs"
import ProfileList from "./components/profile/ProfileList"
import AddPost from "./components/blog/AddPost"
import PostDetails from "./components/blog/PostDetails"
import PageNotFound from "./components/notfound/PageNotFound"
import JobBoard from "./components/job/JobBoard"
import ContactView from "./components/contact/ContactView"



const App = () => {

  const[username, setUsername] = useState("User");
  const[isLogin, setIsLogin] = useState(false);


  return (
    <>
      {/* header view */}

      <NavigationView loginUser={username}/>

      {/* define routes */}

      <Routes>

        <Route path="/" element={<HomeView isLogin={isLogin}/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/student" element={<StudentView />} />
        <Route path="/profile" element={<ProfileList />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactView />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/jobs" element={<JobBoard />} />



      </Routes>






    </>
  )
}

export default App