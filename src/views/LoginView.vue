<template>
  <div>
    <header class="w-[1440px] h-[68px] bg-white flex flex-row">
      <img src="@/assets/images/bxs-plane-alt.png" alt="plane logo" class="w-6 h-6 my-5 mr-1">
      <h1 class="text-[18px] font-medium tracking-[0.363px] py-[23.5px]">my Dream Place</h1>
    </header>
    <main class="w-[400px] mt-[92px] flex flex-col ml-[420px]">

      <h1 class="h-[32px] text-[28] font-semibold items-center justify-center flex mb-10">Sign in</h1>

      <form @submit.prevent name="login form" class="flex flex-col">

        <label for="Email" class="text-[14px] font-medium tracking-[0.28px] leading[19.6px]">Email address</label>

        <div class="relative w-[400px] mt-1 flex rounded bg-PaleGrey items-center p-3  mb-5">
          <input type="email" id="Email" v-model="email" @input="validateEmail" class="bg-PaleGrey w-full">

        </div>
        <span v-if="!isEmailValid" class="text-[14px] text-red-500 absolute top-[34%] right-[21%] ">
          Please enter a valid email
        </span>

        <label for="Password" class="text-[14px] font-medium tracking-[0.28px] leading[19.6px]">Password</label>

        <div class="relative w-[400px] mt-1 flex rounded bg-PaleGrey items-center p-3 mb-[33px]">
          <input :type="showPassword ? 'text' : 'password'" class="w-[345px] bg-PaleGrey" v-model="password" id="Password"
            @input="validatePassword">
          <img src="@/assets/images/eye.png" alt="eye logo"
            class="w-5 h-5 absolute top-4 right-[10px] text-lightGrey cursor-pointer" @click="togglePasswordVisibility">

        </div>
        <span v-if="!isPasswordValid" class="text-[14px] text-red-500 absolute  top-[46%] right-[9%]  w-[320px]">
          Password must start with a capital letter, contain a special character, and be at least 7 characters long.
        </span>

        <RouterLink to="/home"
          class="h-[43px] rounded-md bg-customBlue text-white text-[15px] font-medium leading-5 tracking-[0.3px] mb-5 flex items-center justify-center">
          <button type="submit" @click="attemptSignIn" :disabled="!isPasswordValid || !isEmailValid">
            Sign in
          </button>
        </RouterLink>


        <p class="text-[16px] font-normal tracking-[0.32px] items-center justify-center flex">
          Don’t have an account?
          <RouterLink to="/"  class="text-customBlue cursor-pointer text-[16px] font-normal tracking-[0.32px] "> Register
          </RouterLink>
        </p>

      </form>

    </main>

  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

export default {
  setup() {
    const showPassword = ref(false);
    const isPasswordValid = ref(true);
    const isEmailValid = ref(true);
    const password = ref('');
    const email = ref('');

    const router = useRouter(); 

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const validatePassword = () => {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*?])(?=.{7,})/;
      isPasswordValid.value = passwordRegex.test(password.value);
    };

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isEmailValid.value = emailRegex.test(email.value);
    };

    const attemptSignIn = () => {
      if (!isPasswordValid.value || !isEmailValid.value) {
        return;
      }
      else {
        router.push('/home');  
      }
    };

    return {
      showPassword,
      isPasswordValid,
      password,
      email,
      isEmailValid,
      togglePasswordVisibility,
      validatePassword,
      attemptSignIn,
      validateEmail
    };
  },
};
</script>
