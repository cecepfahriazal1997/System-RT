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
                                <div class="card custom-rounded-medium">
                                    <div class="card-body">
                                        <h6 class="mb-3">Silahkan lengkapi form dibawah ini dengan benar.</h6>
                                        <div class="spacer-medium"></div>
                                        <div class="form-group mb-3">
                                            <label class="form-label">Kode</label>
                                            <input type="text" class="form-control custom-rounded-medium" placeholder="Masukan Kode" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label class="form-label">Nama</label>
                                            <input type="text" class="form-control custom-rounded-medium" placeholder="Masukan Kode" />
                                        </div>
                                    </div>
                                    <div class="card-footer card-footer-custom-radius-medium">
                                        <div class="d-flex justify-content-end">
                                            <router-link to="/master-education" class="btn border-light bg-white custom-rounded-medium me-2">Kembali</router-link>
                                            <router-link to="/master-education" class="btn btn-primary custom-rounded-medium">Simpan</router-link>
                                        </div>
                                    </div>
                                </div>
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
// import apiEnpoint from '@/services/api-endpoint';
export default {
    name: 'MasterEducation',
    data() {
        return {
            list: [],
            pagination: {
                prev: false,
                next: false,
                page: 1,
                limit: 15,
                total: 0
            },
        }
    },
    components: {
        simplebar,
    },
    mounted() {
        // this.fetchDataAnnouncement(this.pagination.page)
    },
    methods: {
        fetchDataAnnouncement(page) {
            ApiCore.get(`payment-arrears`, {
                page: page,
                limit: this.pagination.limit,
            }).then((result) => {
                if (result.status) {
                    this.list = result.data.data
                }
                this.pagination.prev = result.pagination.prev
                this.pagination.next = result.pagination.next
                this.pagination.page = result.pagination.page
                this.pagination.total = result.pagination.total
            })
        }
    }
}
</script>