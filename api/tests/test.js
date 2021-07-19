//rutas

let type = { name: 'TestType'}
describe('Types routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Type.sync({ force: true })
    .then(() => Type.create(type)));
  describe('GET /Types', () => {
    it('should get 200', () =>
      agent.get('/types')
      .expect(200)

    );
  });
});

//DB
describe('Pokemon routes', () => {
    before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    beforeEach(() => Pokemon.sync({ force: true
   })
      .then(() => Pokemon.create(pokemon)));
    describe('GET /pokemons', () => {
      it('should get 200', () =>
        agent.get('/pokemons?name=Pikach')
        .expect(200)
  
      );
    });
  });

  //front
  test('Rederiza texto de bienvenida', () => {
    render(<Home />, { wrapper: MemoryRouter })
  
    expect(screen.getByText('Find any recipe you want!)).toBeInTheDocument()
  })
  import { MemoryRouter } from 'react-router-dom'
  test('renders learn react link', () => {
    render(<Home/>);
    expect(screen.getAllByText('Find any recipe you want!')).toHaveLength(1)
  
  
  });