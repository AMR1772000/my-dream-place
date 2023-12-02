import { defineStore } from 'pinia'; 

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    showPassword: false,
    isPasswordValid: true,
    isEmailValid: true,
    password: '',
    email: '',
    islogged: false
  }),
  actions: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*?])(?=.{7,})/;
      this.isPasswordValid = passwordRegex.test(this.password);
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isEmailValid = emailRegex.test(this.email);
    },
    attemptSignIn(router) {
      if (this.isPasswordValid && this.isEmailValid) {
        router.push('/');
      }
    },
    isFormValide(){
      const validEmail = this.isEmailValid && this.email;
      const validPassword = this.isPasswordValid && this.password;
      const valide = validEmail && validPassword;
      return valide;
    },
    login(){
      this.islogged = true;
      console.log('islogged after login:', this.islogged);
    },
    logout(){
      this.islogged =false ;
    }
  },
});