import { Footer } from "./Common/Footer/Footer";
import { Header } from "./Common/Header";
import { Menu } from "./Common/Menu/Menu";
import { AppRouter } from "./Router/AppRouter";
import { ScrollToTop } from "./Router/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Menu />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
