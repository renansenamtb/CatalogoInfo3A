// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Super Mario World', preco: 'R$ 199,00' },
    { id: 2, nome: 'Donkey Kong', preco: 'R$ 139,00' },
    { id: 3, nome: 'Crazy Taxi', preco: 'R$ 99,00' }
  ]);

  return (
    <div>
         <h1>Games Retrô</h1>
    </div>
   
  );
}
