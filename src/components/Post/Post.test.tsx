import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente Post', () => {
     it('Deve renderizar o componente corretamente', () => {
          render(
               <Post imageUrl="https://limahobbies.vteximg.com.br/arquivos/ids/223092/Miniatura-Carro-Batmovel-2022-c--Figura-Batman-DC-1-32.jpg?v=638372881995100000">
                    Olha só que legal minha miniatura do Batmóvel.
               </Post>,
          );

          expect(
               screen.getByText(/Olha só que legal minha miniatura do Batmóvel/i),
          ).toBeInTheDocument();
     });
});
