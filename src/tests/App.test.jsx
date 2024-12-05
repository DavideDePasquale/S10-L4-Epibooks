import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";
import BookList from "../components/BookList";
import CommentArea from "../components/CommentArea";
import SingleBook from "../components/SingleBook";

describe("App", () => {
  it("esegue il rendering del componente App", () => {
    render(<App />);

    screen.debug(); // stampa il jsx nel componente App sulla riga di comando
  });

  it("esegue il rendering del component Welcome", () => {
    render(<Welcome />);
    screen.debug();
  });

  it("esegue il rendering del component CommentArea", () => {
    render(<CommentArea />);
    screen.debug();
  });
  it("esegue il cambio di colore dopo il click", () => {
    render(<SingleBook />);
    const card = screen.getAllByTestId(Ciao);
    fireEvent.click(card);
  });
});
