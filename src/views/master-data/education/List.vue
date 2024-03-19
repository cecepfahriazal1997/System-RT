<template>
    <main>
        <div id="layout-wrapper">
            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
                        <!-- title of page -->
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="page-title-box d-sm-flex align-items-start justify-content-between">
                                    <h4 class="mb-sm-0">Master Data Pendidikan</h4>
                                    <div class="d-flex">
                                        <button class="btn button-rounded" type="button" :class="{'btn-light': selectedData.length <= 0, 'btn-danger': selectedData.length > 0}" :disabled="selectedData.length <= 0" @click="deletedDataBatch()">Hapus Terpilih</button>
                                        <router-link to="/master-education/form" class="btn btn-primary button-rounded ms-2" type="button">Tambah Baru</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <div class="input-group-left">
                                    <i class="mdi mdi-magnify fs-2 input-group-icon"></i>
                                    <input type="text" class="form-control input-group-form" placeholder="Cari data pendidikan disini" v-model="keywords" @input="debouncedHandler">
                                </div>
                            </div>
                        </div>
                        <div class="spacer-medium"></div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>Menampilkan {{pagination.total}} data pendidikan</p>
                                <div class="table-responsive">
                                    <table class="table table-custom-card">
                                        <thead>
                                            <tr>
                                                <th width="2%"><input type="checkbox" class="form-check-input" v-model="isCheckAll" @change="checkAll()" /></th>
                                                <th>Kode</th>
                                                <th>Nama</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template v-if="pagination.total > 0">
                                                <tr v-for="item in list">
                                                    <td class="middle-item"><input type="checkbox" class="form-check-input" v-model="item.checked" /></td>
                                                    <td class="middle-item">{{ item.code }}</td>
                                                    <td class="middle-item">{{ item.name }}</td>
                                                    <td class="middle-item">
                                                        <div class="d-flex justify-content-end align-items-center">
                                                            <router-link :to="`master-education/form/${item.id}`" class="btn btn-square border bg-info text-white me-2"><i class="mdi mdi-circle-edit-outline fs-4"></i></router-link>
                                                            <button type="button" class="btn btn-square border bg-white" @click="deletedData(item)"><i class="mdi mdi-trash-can-outline fs-4"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </template>
                                            <template v-else>
                                                <tr>
                                                    <td colspan="4" class="text-muted">Data tidak ditemukan</td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center" v-if="pagination.total > 0">
                            <div class="col-auto">
                                <Pagination :page="pagination.page" :prev="pagination.prev" :next="pagination.next" v-on:fetchData="fetchData"></Pagination>
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
import apiEnpoint from '@/services/api-endpoint';

import {debounce, filter, map} from 'lodash'

export default {
    name: 'MasterEducation',
    data() {
        return {
            list: [],
            keywords: '',
            isCheckAll: false,
            pagination: {
                prev: false,
                next: false,
                page: 1,
                limit: 10,
                total: 0
            },
        }
    },
    components: {
        simplebar,
    },
    computed: {
        selectedData() {
            return filter(this.list, function(data) { return data.checked; })
        }
    },
    mounted() {
        this.fetchData(this.pagination.page)
    },
    watch: {
        keywords(value) {
            this.keywords=value
        }
    },
    created() {
        this.debouncedHandler = debounce(() => {
            this.pagination.page = 1
            this.fetchData(this.pagination.page)
        }, 500);
    },
    beforeUnmount() {
        this.debouncedHandler.cancel();
    },
    methods: {
        fetchData(page) {
            ApiCore.get(`${apiEnpoint.ADMINISTRATION_MASTER}/education`, {
                keywords: this.keywords,
                page: page,
                limit: this.pagination.limit,
            }, true).then((result) => {
                if (result.status) {
                    this.list = result.data
                }
                this.pagination.prev = result.pagination.prev
                this.pagination.next = result.pagination.next
                this.pagination.page = result.pagination.page
                this.pagination.total = result.pagination.total
            })
        },
        async deletedData(data) {
            this.$swal
                .fire({
                    title: 'Apakah kamu yakin ?',
                    html: `Kamu akan menghapus data dengan kode <b>${data.code}</b>`,
                    icon: 'warning',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Ya',
                    confirmButtonColor: '#159895',
                    denyButtonColor: '#c0c0c0',
                    denyButtonText: 'Tidak',
                })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            this.fetch = true
                            const process = await ApiCore.delete(`${apiEnpoint.ADMINISTRATION_MASTER}/education`, data.id)
                            this.fetch = false
                            if (process.status) {
                                this.$toast.success(process.message);
                                this.fetchData(this.pagination.page);
                            } else {
                                this.$toast.error(process.message);
                            }
                        } catch(error) {
                            this.fetch = false
                            this.$toast.error(error);
                        }
                    }
                });
        },
        async deletedDataBatch() {
            const selectedId = map(this.selectedData, 'id');
            this.$swal
                .fire({
                    title: 'Apakah kamu yakin ?',
                    html: `Kamu akan menghapus <b>${selectedId.length} data</b> data terpilih`,
                    icon: 'warning',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Ya',
                    confirmButtonColor: '#159895',
                    denyButtonColor: '#c0c0c0',
                    denyButtonText: 'Tidak',
                })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            this.fetch = true
                            const process = await ApiCore.bulkDelete(`${apiEnpoint.ADMINISTRATION_MASTER}/education`, selectedId)
                            this.fetch = false
                            if (process.status) {
                                this.$toast.success(process.message);
                                this.fetchData(this.pagination.page);
                            } else {
                                this.$toast.error(process.message);
                            }
                        } catch(error) {
                            this.fetch = false
                            this.$toast.error(error);
                        }
                    }
                });
        },
        checkAll() {
            this.list.forEach(element => {
                element.checked = this.isCheckAll
            });
        }
    }
}
</script>