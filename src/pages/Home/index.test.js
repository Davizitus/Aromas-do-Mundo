import React from "react";
import { render, screen} from "@testing-library/react";
import Home from ".";

test("Verificando titulo", () =>{
render(
<Home/>
)
const titulos = screen.getByText('Aromas do Mundo')
expect(titulos).toBeInTheDocument()
})