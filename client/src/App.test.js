import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Rederiza texto de bienvenida', () => {
  render(<Home />, { wrapper: MemoryRouter })

  expect(screen.getByText('Find any recipe you want!)).toBeInTheDocument()
})
import { MemoryRouter } from 'react-router-dom'
test('renders learn react link', () => {
  render(<Home/>);
  expect(screen.getAllByText('Find any recipe you want!')).toHaveLength(1)


});


