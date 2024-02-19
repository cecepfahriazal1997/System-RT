<template>
    <div class="bg-overlay"></div>
    <div class="account-pages my-5 pt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-6 col-md-8">
                    <div class="card">
                        <div class="card-body p-4">
                            <div class="">
                                <div class="text-center">
                                    <a href="index.html" class="">
                                        <!-- <img src="@assets/images/logo-dark.png" alt="" height="24" class="auth-logo logo-dark mx-auto">
                                        <img src="@assets/images/logo-light.png" alt="" height="24" class="auth-logo logo-light mx-auto"> -->
                                    </a>
                                </div>
                                <!-- end row -->
                                <h4 class="font-size-18 text-muted mt-2 text-center">Welcome Back !</h4>
                                <p class="mb-5 text-center">Sign in to continue to Upzet.</p>
                                <form class="form-horizontal" action="index.html">

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

                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-check">
                                                        <input type="checkbox" class="form-check-input" id="customControlInline">
                                                        <label class="form-check-label" for="customControlInline">Remember me</label>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="text-md-end mt-3 mt-md-0">
                                                        <a href="auth-recoverpw.html" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password?</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-grid mt-4">
                                                <button class="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <p class="text-white-50">Don't have an account ? <a href="auth-register.html" class="fw-medium text-primary"> Register </a> </p>
                        <p class="text-white-50">© 2024 Upzet. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesdesign</p>
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
        async handleSubmit() {
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