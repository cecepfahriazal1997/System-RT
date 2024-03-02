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
                                    <h4 class="mb-sm-0">Data Penduduk</h4>
                                    <div class="d-flex">
                                        <button class="btn btn-light button-rounded" type="button">Hapus Terpilih</button>
                                        <router-link to="/resident/form" class="btn btn-primary button-rounded ms-2">Tambah Penduduk Baru</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="card card-body custom-rounded-medium">
                                    <ul class="nav nav-pills" role="tablist" style="gap: 0.7rem">
                                        <li class="nav-item waves-effect waves-light" role="presentation">
                                            <a class="nav-link active custom-rounded-medium" data-bs-toggle="tab" role="tab" aria-selected="true" @click="changeTab('all')">
                                                <i class="mdi mdi-account-box-multiple me-2 align-middle fs-5"></i> <span class="d-none d-md-inline-block">Semua Penduduk</span> 
                                            </a>
                                        </li>
                                        <li class="nav-item waves-effect waves-light" role="presentation">
                                            <a class="nav-link custom-rounded-medium" data-bs-toggle="tab" role="tab" aria-selected="false" tabindex="-1" @click="changeTab('card')">
                                                <i class="mdi mdi-card-account-details me-2 fs-5 align-middle"></i> <span class="d-none d-md-inline-block">Per Kartu Keluarga</span>
                                            </a>
                                        </li>
                                        <li class="nav-item waves-effect waves-light" role="presentation">
                                            <a class="nav-link custom-rounded-medium" data-bs-toggle="tab" role="tab" aria-selected="false" tabindex="-1" @click="changeTab('seventeen')">
                                                <i class="mdi mdi-account-check me-2 fs-5 align-middle"></i> <span class="d-none d-md-inline-block">17 Tahun Keatas</span>
                                            </a>
                                        </li>
                                        <li class="nav-item waves-effect waves-light" role="presentation">
                                            <a class="nav-link custom-rounded-medium" data-bs-toggle="tab" role="tab" aria-selected="false" tabindex="-1" @click="changeTab('dead')">
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
                            <div class="d-flex flex-shrink-0" style="gap: 0.5rem" v-if="currTab == 'card'">
                                <div class="flex-shrink-0">
                                    <select class="form-select select-rounded padding-vertical-10">
                                        <option>Penerima Bantuan &nbsp;</option>
                                    </select>
                                </div>
                            </div>
                            <div class="d-flex flex-shrink-0" style="gap: 0.5rem" v-else>
                                <div class="flex-shrink-0">
                                    <select class="form-select select-rounded padding-vertical-10">
                                        <option>Status Pindahan &nbsp;</option>
                                    </select>
                                </div>
                                <div class="flex-shrink-0" v-if="currTab != 'seventeen'">
                                    <select class="form-select select-rounded padding-vertical-10">
                                        <option>Usia Penduduk &nbsp;</option>
                                    </select>
                                </div>
                                <div class="flex-shrink-0" v-if="currTab != 'seventeen'">
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
                                <!-- IF TAB IS CARD FAMILY -->
                                <div class="table-responsive-lg" v-if="currTab == 'card'">
                                    <table class="table table-custom-card">
                                        <thead>
                                            <tr>
                                                <th width="2%"><input type="checkbox" class="form-check-input" /></th>
                                                <th>No. KK</th>
                                                <th>Kepala Keluarga</th>
                                                <th>Anggota Keluarga</th>
                                                <th>Email</th>
                                                <th>Telepon</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in [1,2,3,4,5]">
                                                <td class="middle-item"><input type="checkbox" class="form-check-input" /></td>
                                                <td class="middle-item">
                                                    <div>1019202934{{ item }}</div>
                                                    <span class="badge badge-soft-primary" v-if="item == 1">Pindahan</span>
                                                </td>
                                                <td class="middle-item">
                                                    <div class="fw-bold mb-1">Ahmad Wibowo</div>
                                                    <div>20030192000{{ item }}</div>
                                                </td>
                                                <td class="middle-item">
                                                    <div class="mb-1">2 Orang</div>
                                                    <a href="javascript:void(0)" class="text-primary fw-bold text-decoration-underline waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".modal-member">Lihat Anggota</a>
                                                </td>
                                                <td class="middle-item">test@gmail.com</td>
                                                <td class="middle-item">08981981239</td>
                                                <td class="middle-item">
                                                    <div class="d-flex justify-content-end align-items-center">
                                                        <button type="button" class="btn btn-square border bg-info text-white me-2"><i class="mdi mdi-circle-edit-outline fs-4"></i></button>
                                                        <button type="button" class="btn btn-square border bg-white me-2"><i class="mdi mdi-trash-can-outline fs-4"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- IF TAB NOT CARD FAMILY -->
                                <div class="table-responsive-md" v-else>
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
                                                <td class="middle-item">
                                                    <div class="d-flex justify-content-end align-items-center">
                                                        <button type="button" class="btn btn-square border bg-info text-white me-2"><i class="mdi mdi-circle-edit-outline fs-4"></i></button>
                                                        <button type="button" class="btn btn-square border bg-white me-2"><i class="mdi mdi-trash-can-outline fs-4"></i></button>
                                                        <div class="dropdown dropstart">
                                                            <button class="btn btn-square border bg-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                                <i class="mdi mdi-dots-vertical fs-4"></i>
                                                            </button>
                                                            <div class="dropdown-menu custom-rounded-medium" data-popper-placement="top-end">
                                                                <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target=".modal-member">Lihat Detail Keluarga</a>
                                                                <div class="dropdown-divider" v-if="currTab == 'all'"></div>
                                                                <a class="dropdown-item py-2" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target=".modal-dead" v-if="currTab == 'all'">Ubah Menjadi Meninggal</a>
                                                                <a class="dropdown-item py-2" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target=".modal-kick" v-if="currTab == 'all'">Pindahkan Penduduk</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
    <!-- MODAL DETAIL MEMBER OF FAMILY -->
    <div class="modal fade modal-member custom-rounded-medium" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content custom-rounded-medium">
                <div class="modal-header border-0">
                    <div class="d-block px-2">
                        <p class="modal-title mb-1">Detail Anggota Keluarga</p>
                        <h5>#01390129301293013</h5>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="d-block px-2">
                        <div class="container mb-3">
                            <div class="row bg-light custom-rounded-medium p-2">
                                <div class="col-md-6 mb-2 mt-2">
                                    <p class="mb-1 font-size-12">Nama Kepala Keluarga</p>
                                    <h6>Agung Sanjaya</h6>
                                </div>
                                <div class="col-md-6 mb-2 mt-2">
                                    <p class="mb-1 font-size-12">Desa/Kelurahan</p>
                                    <h6>Cimerang</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">RT/RW</p>
                                    <h6>003/004</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Kecamatan</p>
                                    <h6>Padalarang</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Kode Pos</p>
                                    <h6>40192</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Kabupaten/Kota</p>
                                    <h6>Bandung Barat</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Alamat</p>
                                    <h6>Jl. Cimerang</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Provinsi</p>
                                    <h6>Jawa Barat</h6>
                                </div>
                            </div>
                        </div>
                        <h6>Daftar Anggota (3 orang)</h6>
                        <div class="d-block">
                            <table class="table table-custom-card">
                                <thead>
                                    <tr>
                                        <th>NIK</th>
                                        <th>Nama</th>
                                        <th>Status Kedudukan Keluarga</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in [1,2,3]">
                                        <td class="middle-item">1001910110{{ item }}</td>
                                        <td class="middle-item"><div>Ahmad Wibowo</div></td>
                                        <td class="middle-item">Kepala Keluarga</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 p-3">
                    <button type="button" class="btn btn-light waves-effect custom-rounded-medium fw-bold px-3" data-bs-dismiss="modal">Tutup</button>
                </div>
            </div>
        </div>
    </div>
    <!-- MODAL DEAD OF RESIDENT -->
    <div class="modal fade modal-dead custom-rounded-medium" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content custom-rounded-medium">
                <div class="modal-header border-0">
                    <div class="d-block px-2">
                        <p class="modal-title mb-1">Tambahkan penduduk telah meninggal dunia</p>
                        <h5>#01390129301293013 - Agung Sudrajat</h5>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="d-block px-2">
                        <div class="container mb-3">
                            <div class="row bg-light custom-rounded-medium p-2">
                                <div class="col-md-6 mb-2 mt-2">
                                    <p class="mb-1 font-size-12">Nama Kepala Keluarga</p>
                                    <h6>Agung Sanjaya</h6>
                                </div>
                                <div class="col-md-6 mb-2 mt-2">
                                    <p class="mb-1 font-size-12">Desa/Kelurahan</p>
                                    <h6>Cimerang</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">RT/RW</p>
                                    <h6>003/004</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Kecamatan</p>
                                    <h6>Padalarang</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Kode Pos</p>
                                    <h6>40192</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Kabupaten/Kota</p>
                                    <h6>Bandung Barat</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Alamat</p>
                                    <h6>Jl. Cimerang</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Provinsi</p>
                                    <h6>Jawa Barat</h6>
                                </div>
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label">Tanggal Meninggal</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-control" type="date" value="2019-08-19" id="example-date-input">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Keterangan</label>
                            <textarea class="form-control" placeholder="Masukan keterangan / penyebab meninggal dunia ..." rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 p-3">
                    <button type="button" class="btn btn-light waves-effect custom-rounded-medium fw-bold px-3" data-bs-dismiss="modal">Tutup</button>
                    <button type="button" class="btn btn-primary waves-effect custom-rounded-medium fw-bold px-3" data-bs-dismiss="modal">Simpan</button>
                </div>
            </div>
        </div>
    </div>
    <!-- MODAL KICK OF RESIDENT -->
    <div class="modal fade modal-kick custom-rounded-medium" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content custom-rounded-medium">
                <div class="modal-header border-0">
                    <div class="d-block px-2">
                        <p class="modal-title mb-1">Mengeluarkan penduduk</p>
                        <h5>#01390129301293013 - Agung Sudrajat</h5>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="d-block px-2">
                        <div class="container mb-3">
                            <div class="row bg-light custom-rounded-medium p-2">
                                <div class="col-md-6 mb-2 mt-2">
                                    <p class="mb-1 font-size-12">No. Kartu Keluarga</p>
                                    <h6>01390129301293013</h6>
                                </div>
                                <div class="col-md-6 mb-2 mt-2">
                                    <p class="mb-1 font-size-12">Desa/Kelurahan</p>
                                    <h6>Cimerang</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">RT/RW</p>
                                    <h6>003/004</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Kecamatan</p>
                                    <h6>Padalarang</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Kode Pos</p>
                                    <h6>40192</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Kabupaten/Kota</p>
                                    <h6>Bandung Barat</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Alamat</p>
                                    <h6>Jl. Cimerang</h6>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <p class="mb-1 font-size-12">Provinsi</p>
                                    <h6>Jawa Barat</h6>
                                </div>
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label">Tanggal Pindah</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-control" type="date" value="2019-08-19" id="example-date-input">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Keterangan</label>
                            <textarea class="form-control" placeholder="Masukan keterangan (opsional)" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 p-3">
                    <button type="button" class="btn btn-light waves-effect custom-rounded-medium fw-bold px-3" data-bs-dismiss="modal">Tutup</button>
                    <button type="button" class="btn btn-primary waves-effect custom-rounded-medium fw-bold px-3" data-bs-dismiss="modal">Simpan</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import simplebar from 'simplebar-vue';
import 'simplebar-core/dist/simplebar.css';

import { ApiCore } from '@/services/core';
// import apiEnpoint from '@/services/api-endpoint';
export default {
    name: 'Resident',
    data() {
        return {
            currTab: 'all',
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
        },
        changeTab(tab) {
            this.currTab = tab
        }
    }
}
</script>