
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmaks/Bookmarks'
import Header from './components/header/Header'

function App() {
 

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
