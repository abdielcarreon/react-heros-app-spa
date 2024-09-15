import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import PrivateRoute from "../../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Proving <PrivateRoute />', () => {
  
    test('should show children if user authenticated', () => {
      
        Storage.prototype.setItem =jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Abraham',
                id: 'A1B2'
            }
        }

        render( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <PrivateRoute>    
                    <h1>Private Route</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>
        );

        expect( screen.getByText('Private Route')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    });
    
})

