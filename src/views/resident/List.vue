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
                                    <h4 class="mb-sm-0">Data Penduduk</h4>
                                    <div class="d-flex">
                                        <button class="btn btn-light button-rounded" type="button">Hapus Terpilih</button>
                                        <router-link to="/master-education/form" class="btn btn-primary button-rounded ms-2" type="button">Tambah Baru</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="card card-body custom-rounded-medium">
                                    <ul class="nav nav-pills" role="tablist" style="gap: 0.7rem">
                                        <li class="nav-item waves-effect waves-light" role="presentation">
                                            <a class="nav-link active custom-rounded-medium" data-bs-toggle="tab" href="#home-1" role="tab" aria-selected="true">
                                                <i class="mdi mdi-account-box-multiple me-2 align-middle fs-5"></i> <span class="d-none d-md-inline-block">Semua Penduduk</span> 
                                            </a>
                                        </li>
                                        <li class="nav-item waves-effect waves-light" role="presentation">
                                            <a class="nav-link custom-rounded-medium" data-bs-toggle="tab" href="#profile-1" role="tab" aria-selected="false" tabindex="-1">
                                                <i class="mdi mdi-card-account-details me-2 fs-5 align-middle"></i> <span class="d-none d-md-inline-block">Per Kartu Keluarga</span>
                                            </a>
                                        </li>
                                        <li class="nav-item waves-effect waves-light" role="presentation">
                                            <a class="nav-link custom-rounded-medium" data-bs-toggle="tab" href="#messages-1" role="tab" aria-selected="false" tabindex="-1">
                                                <i class="mdi mdi-account-check me-2 fs-5 align-middle"></i> <span class="d-none d-md-inline-block">17 Tahun Keatas</span>
                                            </a>
                                        </li>
                                        <li class="nav-item waves-effect waves-light" role="presentation">
                                            <a class="nav-link custom-rounded-medium" data-bs-toggle="tab" href="#settings-1" role="tab" aria-selected="false" tabindex="-1">
                                                <i class="mdi mdi-grave-stone me-2 fs-5 align-middle"></i> <span class="d-none d-md-inline-block">Meninggal</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex mb-3" style="gap: 0.5rem">
                            <div class="w-100">
                                <div class="input-group-left">
                                    <i class="mdi mdi-magnify fs-2 input-group-icon"></i>
                                    <input type="text" class="form-control input-group-form" placeholder="Cari data pendidikan disini">
                                </div>
                            </div>
                            <div class="d-flex flex-shrink-0" style="gap: 0.5rem">
                                <div class="flex-shrink-0">
                                    <select class="form-select select-rounded padding-vertical-10">
                                        <option>Status Pindahan &nbsp;</option>
                                    </select>
                                </div>
                                <div class="flex-shrink-0">
                                    <select class="form-select select-rounded padding-vertical-10">
                                        <option>Usia Penduduk &nbsp;</option>
                                    </select>
                                </div>
                                <div class="flex-shrink-0">
                                    <select class="form-select select-rounded padding-vertical-10">
                                        <option>Status &nbsp;</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="spacer-medium"></div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>Menampilkan 100 data penduduk</p>
                                <table class="table table-custom-card">
                                    <thead>
                                        <tr>
                                            <th width="2%"><input type="checkbox" class="form-check-input" /></th>
                                            <th>NIK</th>
                                            <th>Nama</th>
                                            <th>Status</th>
                                            <th>Email</th>
                                            <th>Telepon</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in [1,2,3,4,5]">
                                            <td class="middle-item"><input type="checkbox" class="form-check-input" /></td>
                                            <td class="middle-item">1001910110{{ item }}</td>
                                            <td class="middle-item">
                                                <div>Ahmad Wibowo</div>
                                                <span class="badge badge-soft-primary" v-if="item == 1">Pindahan</span>
                                            </td>
                                            <td class="middle-item">Lansia</td>
                                            <td class="middle-item">test@gmail.com</td>
                                            <td class="middle-item">08981981239</td>
                                            <td class="middle-item" align="right">
                                                <button type="button" class="btn btn-square border bg-info text-white me-2"><i class="mdi mdi-circle-edit-outline fs-4"></i></button>
                                                <button type="button" class="btn btn-square border bg-white me-2"><i class="mdi mdi-trash-can-outline fs-4"></i></button>
                                                <button type="button" class="btn btn-square border bg-white"><i class="mdi mdi-dots-vertical fs-4"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-auto">
                                <Pagination></Pagination>
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