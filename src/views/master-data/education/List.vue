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
                                    <h4 class="mb-sm-0">Master Data Pendidikan</h4>
                                    <div class="d-flex">
                                        <button class="btn btn-secondary button-rounded" type="button">Hapus Terpilih</button>
                                        <button class="btn btn-primary button-rounded ms-2" type="button">Tambah</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <div class="input-group-left">
                                    <i class="mdi mdi-magnify fs-2 input-group-icon"></i>
                                    <input type="text" class="form-control input-group-form" placeholder="Cari data pendidikan disini">
                                </div>
                            </div>
                        </div>
                        <div class="spacer-medium"></div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>Menampilkan 100 data pendidikan</p>
                                <table class="table table-custom-card">
                                    <thead>
                                        <tr>
                                            <th>Kode</th>
                                            <th>Nama</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in [1,2,3,4,5]">
                                            <td class="middle-item">0000{{ item }}</td>
                                            <td class="middle-item">Master Data {{ item }}</td>
                                            <td class="middle-item" align="right">
                                                <button type="button" class="btn btn-square border bg-info text-white me-2"><i class="mdi mdi-circle-edit-outline fs-4"></i></button>
                                                <button type="button" class="btn btn-square border bg-white"><i class="mdi mdi-trash-can-outline fs-4"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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