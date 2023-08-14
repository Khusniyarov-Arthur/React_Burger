import { Catalog } from "./components/Catalog/Catalog";
import { Navigation } from "./components/Navigation/Navigation";
import { Container } from "./components/container/container";
import { Header } from "./components/header/header";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation>
          <Container className="navigation__container"></Container>
        </Navigation>
        <Catalog />
      </main>
      <footer></footer>
    </>
  );
};
