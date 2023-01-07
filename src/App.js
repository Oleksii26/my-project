import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser } from "./redux/auth/authOperation";
import { useEffect } from "react";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer";

function App() {
// const isLoading = true
const isLoading = useSelector(state => state.auth.isLoggedin)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      {isLoading ? <Menu /> : <Home />}
      <Footer />
    </div>
  );
}

export default App;
