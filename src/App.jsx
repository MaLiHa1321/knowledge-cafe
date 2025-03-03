
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmaks/Bookmarks'
import Header from './components/header/Header'

function App() {
 

  return (
    <>
     <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
