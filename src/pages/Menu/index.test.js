import React from "react";
import { render, screen} from "@testing-library/react";
import Menu from ".";

test("Verificando titulo", () =>{
render(<Menu/>)
const titulo = screen.getByText('Comidas Salgadas')
expect(titulo).toBeInTheDocument()
})