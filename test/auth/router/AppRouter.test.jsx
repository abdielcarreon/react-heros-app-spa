import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../../src/router/AppRouter";

describe('Proving <AppRouter />', () => {

    test('should deploy the "login" if user not authenticated', () => {
        
        const contextValue = {
            logged: false,
        }

        render(

            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={{ contextValue }}>
                    <AppRouter /> 
                </AuthContext.Provider>
            </MemoryRouter>  
        );

        expect( screen.getAllByText('Login').length).toBe(2);
    });

    test('should display the Marvel Component if user authenticated', () => {
      

        const contextVlue2 = {
            logged: true,
            user: {
                id: 'A1B1',
                name: 'Fernando'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={{ contextVlue2 }}>
                    <AppRouter /> 
                </AuthContext.Provider>
            </MemoryRouter>  
        );
        // *******************  ********************
        screen.debug();
        expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
        

    });
    
    
})
