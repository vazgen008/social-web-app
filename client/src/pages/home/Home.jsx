import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <button onClick={()=>{localStorage.setItem('user',null);navigate('/login')}}>logout</button>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home