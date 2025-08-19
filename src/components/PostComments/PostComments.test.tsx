import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
     it('Deve renderizar o componente corretamente', () => {
          render(<PostComment />);
          expect(screen.getByText('Comentar')).toBeInTheDocument();
     });

     test('Deve adicionar dois comentários', () => {
          render(<PostComment />);
          const input = screen.getByTestId('comment-input');
          const button = screen.getByText('Comentar');

          fireEvent.change(input, { target: { value: 'Comentario1' } });
          fireEvent.click(button);
          expect(screen.getByText('Comentario1')).toBeInTheDocument();

          fireEvent.change(input, { target: { value: 'Comentario2' } });
          fireEvent.click(button);
          expect(screen.getByText('Comentario2')).toBeInTheDocument();

          const comentarios = screen.getAllByRole('listitem');
          expect(comentarios).toHaveLength(2);
          expect(comentarios[0]).toHaveTextContent('Comentario1');
          expect(comentarios[1]).toHaveTextContent('Comentario2');
     });
});
