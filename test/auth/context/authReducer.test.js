import { authReducer, types } from "../../../src/auth"



describe('Proving authReducer', () => {
    
    test('should return default state', () => {
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false })
        
  });

  test('should (login) call the login authenticate and set the user', () => {
    const action = {
        type: types.login,
        payload: {
            name: 'Juan',
            id: '123'
        }
    }

    const state = authReducer({ logged: false }, action);

    expect( state ).toEqual({
        logged: true,
        user: action.payload
    })
        
  });

  test('should (logout) delete user and turn logged from true to false', () => {
    const state = {
        logged: true,
        user: { id: '123', name: 'Juan' }
    }

    const action = {
        type: types.logout
    }

    const newState = authReducer( state, action );

    expect( newState ).toEqual({ logged: false })
        
  })
  
})
