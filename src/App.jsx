import { Catalog } from "./components/Catalog/Catalog";
import { Navigation } from "./components/Navigation/Navigation";
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation></Navigation>
        <Catalog />
      </main>
      <footer></footer>
    </>
  );
};
