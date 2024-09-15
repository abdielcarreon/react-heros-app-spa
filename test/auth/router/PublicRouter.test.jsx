const { render, screen } = require("@testing-library/react")
const { PublicRoute } = require("../../../src/router/PublicRoute")
const { AuthContext } = require("../../../src/auth");
const { MemoryRouter, Route, Routes } = require("react-router-dom");

describe('Proving <PublicRouter />', () => {
  
    test('should show the children if user not authenticated', () => {
      

        const contextValue = {
            logged: false
        }

        render( 
        <AuthContext.Provider value={ contextValue }>
            <PublicRoute>
                <h1>Public Route</h1>
            </PublicRoute>
        </AuthContext.Provider>
    );

    expect( screen.getByText('Public Route')).toBeTruthy()
    });
    
    test('should  navigate if authenticated', () => {
      
        const contextValue = {
            logged: true,
            user: {
                name: 'Abraham',
                id: 'A1B2'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                         } /> 
                        <Route path='marvel' 
                        element={ <h1>Marvel Page</h1> } /> 

                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Marvel Page' )).toBeTruthy();
    });
    
})
