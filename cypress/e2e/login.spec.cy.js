import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'


const LoginPageInstance = new LoginPage()


describe('Login Valid',() => {


       it(' Login Valid  ',() => {
  
             
             LoginPageInstance.acessLoginPage()
             LoginPageInstance.loginWithUser(userData.userSucess.email,userData.userSucess.password)

       })
 
       it(' Login Invalid ',() =>{


            LoginPageInstance.acessLoginPage()
            LoginPageInstance.loginWithUser(userData.userFail.email,userData.userFail.password)
            LoginPageInstance.invalidLogin()


       })

})