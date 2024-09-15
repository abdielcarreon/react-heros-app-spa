import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { SearchHero } from "../../../src/heros/pages";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('Proving <SearchPage />', () => {
  

    beforeEach(() => jest.clearAllMocks() );

    test('should display the screen by default', () => {
      
        const { container } = render(
            <MemoryRouter>
                <SearchHero />
            </MemoryRouter>
        );

        screen.debug();

        expect( container ).toMatchSnapshot();
    });

    test('should display Batman and input whit queryString value', () => {
      
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchHero />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman')

        const img = screen.getByRole('img').src
        expect(img).toContain( "/assets/heros/dc-batman.jpg" );

        //screen.debug();

        const alert = screen.getByLabelText('alert-danger')

        expect(alert.style.display).toBe('none')
    });

    test('should display an error if hero not found', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman2']}>
                <SearchHero />
            </MemoryRouter>
        );

    
        const notAlert = screen.getByLabelText( 'alert-danger' );
        expect(notAlert.className).not.toContain('display: none');

    });
    

    test('should display the "navigate" in the new screen', () => {
      
        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchHero />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: 'superman'} })

        const form = screen.getByRole('form');
        fireEvent.submit( form )

        expect( mockedUseNavigate ).toHaveBeenCalledWith( `?q=${ inputValue }` )
    });
    
    
})
