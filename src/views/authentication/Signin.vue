<template>
    <div class="bg-overlay"></div>
    <div class="account-pages my-5 pt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-6 col-md-8">
                    <div class="card custom-rounded">
                        <div class="card-body p-4">
                            <div class="">
                                <div class="text-center mb-3">
                                    <a href="index.html" class="">
                                        <img src="@/assets/images/logo/logo.svg" alt="" height="60" class="auth-logo logo-dark mx-auto">
                                    </a>
                                </div>
                                <!-- end row -->
                                <h4 class="font-size-20 mt-2 text-center text-black">Login</h4>
                                <p class="mb-5 text-center">Silahkan masukan username dan password.</p>
                                <form class="form-horizontal">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-4">
                                                <label class="form-label" for="username">Username</label>
                                                <input type="text" class="form-control" id="username" placeholder="Enter username">
                                            </div>
                                            <div class="mb-4">
                                                <label class="form-label" for="userpassword">Password</label>
                                                <input type="password" class="form-control" id="userpassword" placeholder="Enter password">
                                            </div>

                                            <div class="mt-3 mt-md-0">
                                                <a href="auth-recoverpw.html" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password?</a>
                                            </div>
                                            <div class="d-grid mt-4">
                                                <button @click="handleSubmit" class="btn btn-primary button-rounded waves-effect waves-light" type="submit">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->
        </div>
    </div>
</template>
<script>
import apiEndpoint from '@/services/api-endpoint'
import {ApiCore} from '@/services/core'

import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
    name: 'Signin',
    data() {
        return {
            loader: null,
            email: '',
            password: '',
            role: this.$route.params.role,
            fetch: false,
        }
    },
    setup() {
        const schema = yup.object({
            email: yup.string().email('Masukan email yang valid').required('Masukan email'),
            password: yup.string().required('Masukan password'),
        });

        return {
            schema
        }
    },
    components: {Field, Form, ErrorMessage},
    methods: {
        handleSubmit() {
            localStorage.setItem('token', '123123123')
            localStorage.setItem('role', 'ketua')

            this.$router.push({ name: 'home' })
        },
        async handleSubmitBack() {
            try {
                this.fetch = true
                const signin = await ApiCore.store(`${apiEndpoint.AUTHENTICATION}/signin`, {email: this.email, password: this.password, role: this.role})
                this.fetch = false
                if (signin.status) {
                    this.$toast.success(signin.message);
                    localStorage.removeItem('token')
                    localStorage.removeItem('role')
                    localStorage.setItem('token', signin.user.key)
                    localStorage.setItem('role', this.role)
                    setTimeout(() => {
                        window.location.href = '/'
                    }, 1000);
                } else {
                    this.$toast.error(signin.message);
                }
            } catch(error) {
                this.fetch = false
                this.$toast.error(error);
            }
        }
    }
}
</script>