import { Route, Routes } from "react-router-dom"
// import PostList from "./components/blog/PostList";
// import AddPost from "./components/blog/AddPost";

import NavigationView from "./components/header/NavigationView"
import HomeView from "./components/home/HomeView"
import AboutUs from "./components/about/AboutUs"
import StudentView from "./components/student/StudentView"
import BlogView from "./components/blog/BlogView"
import ContactUs from "./components/contact/ContactUs"
import ProfileList from "./components/profile/ProfileList"
import AddPost from "./components/blog/AddPost"


const App = () => {
  return (
    <>
      {/* header view */}

      <NavigationView />

      {/* define routes */}

      <Routes>

        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/student" element={<StudentView />} />
        <Route path="/profile" element={<ProfileList />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/add-post" element={<AddPost />} />

      </Routes>






    </>
  )
}

export default App