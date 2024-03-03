<template>
    <main>
        <div id="layout-wrapper">
            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
                        <!-- title of page -->
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 class="mb-sm-0">Form Master Data Pendidikan</h4>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <Form :validation-schema="schema" @submit="handleSubmit">
                                    <div class="card custom-rounded-medium">
                                        <div class="card-body">
                                            <h6 class="mb-3">Silahkan lengkapi form dibawah ini dengan benar.</h6>
                                            <div class="spacer-medium"></div>
                                            <div class="form-group mb-3">
                                                <label class="form-label">Kode</label>
                                                <Field type="text" name="code" class="form-control custom-rounded-medium" placeholder="Masukan kode pendidikan (opsional)" v-model="form.code" />
                                            </div>
                                            <div class="form-group mb-3">
                                                <label class="form-label">Nama</label>
                                                <Field type="text" name="name" class="form-control custom-rounded-medium" placeholder="Masukan nama pendidikan" v-model="form.name" />
                                                <ErrorMessage name="name" :class="'text-danger'" />
                                            </div>
                                        </div>
                                        <div class="card-footer card-footer-custom-radius-medium">
                                            <div class="d-flex justify-content-end">
                                                <router-link to="/master-education" class="btn border-light bg-white custom-rounded-medium me-2">Kembali</router-link>
                                                <button type="submit" class="btn btn-primary custom-rounded-medium">Simpan</button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import simplebar from 'simplebar-vue';
import 'simplebar-core/dist/simplebar.css';

import { ApiCore } from '@/services/core';
import apiEndpoint from '@/services/api-endpoint';

import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
    name: 'MasterEducation',
    data() {
        return {
            form: {
                code: '',
                name: ''
            },
        }
    },
    components: {
        simplebar, Field, Form, ErrorMessage
    },
    setup() {
        const schema = yup.object({
            name: yup.string().required('Masukan nama'),
        });

        return {
            schema
        }
    },
    mounted() {
        if (this.$route.params.id)
            this.fetchData()
    },
    methods: {
        fetchData() {
            ApiCore.get(`${apiEndpoint.ADMINISTRATION_MASTER}/education/${this.$route.params.id}`).then((result) => {
                if (result.status) {
                    this.form = result.data
                }
            })
        },
        async handleSubmit() {
            try {
                this.fetch = true
                const result = await ApiCore.store(`${apiEndpoint.ADMINISTRATION_MASTER}/education/save`, this.form)
                this.fetch = false
                if (result.status) {
                    this.$router.push({name: 'education'})
                    this.$toast.success(result.message);
                } else {
                    this.$toast.error(result.message);
                }
            } catch(error) {
                this.fetch = false
                this.$toast.error(error.message);
            }
        }
    }
}
</script>