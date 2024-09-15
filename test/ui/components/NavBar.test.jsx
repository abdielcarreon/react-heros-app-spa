import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { Navbar } from "../../../src/ui"
import { MemoryRouter, useNavigate } from "react-router-dom"

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Proving <NavBar /> component', () => {
  
    beforeEach(() => jest.clearAllMocks() );

    const contextValue = {
        logged: true,
        user: {
            name: 'Noe'
        },
        logout: jest.fn()
        
    }

    beforeEach(() => jest.clearAllMocks() );

    test('should dsplay the user name', () => {
        
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( screen.getByText( 'Noe' )).toBeTruthy();
    });

    test('should call to logout and navigate when clicking the button', () => {
      
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );
        
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith( "/login", {"replace": true} );
    });
    
    
})
