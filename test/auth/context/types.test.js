import { types } from "../../../src/auth/types/types"


describe('Proving on "Types.js', () => {
  

    test('should return the correct types back', () => {
      expect(types).toEqual({
        login:'[Auth] Login',
        logout:'[Auth] Logout'
      })
    })
    
})
