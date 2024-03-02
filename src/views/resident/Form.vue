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
                                    <h4 class="mb-sm-0">Form Penduduk</h4>
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
                                            <label class="form-label">Nomor Kartu Keluarga</label>
                                            <input type="number" class="form-control custom-rounded-medium" placeholder="Masukan nomor kartu keluarga" />
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-md-6">
                                                <label class="form-label">RT</label>
                                                <input type="text" class="form-control custom-rounded-medium" placeholder="Masukan RT" />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">RW</label>
                                                <input type="text" class="form-control custom-rounded-medium" placeholder="Masukan RW" />
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-md-6">
                                                <label class="form-label">Provinsi</label>
                                                <select class="form-select select-rounded padding-vertical-10">
                                                    <option>Pilih Provinsi &nbsp;</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">Kabupaten/Kota</label>
                                                <select class="form-select select-rounded padding-vertical-10">
                                                    <option>Pilih Kabupaten/Kota &nbsp;</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-md-6">
                                                <label class="form-label">Kecamatan</label>
                                                <select class="form-select select-rounded padding-vertical-10">
                                                    <option>Pilih Provinsi &nbsp;</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">Kelurahan</label>
                                                <select class="form-select select-rounded padding-vertical-10">
                                                    <option>Pilih Kelurahan &nbsp;</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-3">
                                            <div class="col-md-6">
                                                <label class="form-label">Kode Pos</label>
                                                <input type="number" class="form-control custom-rounded-medium" placeholder="Masukan kode pos (opsional)" />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">Kelurahan</label>
                                                <input class="form-control" type="date" placeholder="dd/mm/yyyy" id="example-date-input">
                                            </div>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label class="form-label">Alamat Lengkap</label>
                                            <textarea class="form-control" placeholder="Masukan alamat lengkap ..." rows="5"></textarea>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label class="form-label">Menerima Bantuan</label>
                                            <select class="form-select select-rounded padding-vertical-10">
                                                <option>Pilih Bantuan &nbsp;</option>
                                            </select>
                                        </div>
                                        <div class="spacer-medium"></div>
                                        <h6>Anggota Keluarga (3 orang)</h6>
                                        <div class="d-block bg-light custom-rounded-medium p-3 mb-2" v-for="item in [1,2,3]">
                                            <div class="d-flex align-items-end" style="gap: 0.5rem">
                                                <div class="d-block w-100">
                                                    <h6 class="mb-3">Anggota #{{item}}</h6>
                                                    <input type="text" class="form-control bg-white fw-bold text-primary" readonly value="Agung Sanjaya" />
                                                </div>
                                                <div class="d-block flex-shrink-0">
                                                    <h6 class="mb-3">Status Kedudukan Keluarga</h6>
                                                    <select class="form-select select-rounded padding-vertical-10">
                                                        <option value="">Pilih Kedudukan Keluarga &nbsp;</option>
                                                        <option value="">Kepala Keluarga &nbsp;</option>
                                                        <option value="">Istri &nbsp;</option>
                                                        <option value="">Anak &nbsp;</option>
                                                        <option value="">Lainnya &nbsp;</option>
                                                    </select>
                                                </div>
                                                <div class="d-flex flex-shrink-0 justify-content-end align-items-center">
                                                    <button type="button" class="btn btn-square border bg-info text-white me-2"><i class="mdi mdi-circle-edit-outline fs-4"></i></button>
                                                    <button type="button" class="btn btn-square border bg-white me-2"><i class="mdi mdi-trash-can-outline fs-4"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="spacer-small"></div>
                                        <div class="d-flex justify-content-end">
                                            <button type="button" class="btn border-light bg-white custom-rounded-medium" data-bs-toggle="modal" data-bs-target=".modal-add-member"><i class="mdi mdi-plus me-2"></i>Tambah Anggota Keluarga</button>
                                        </div>
                                    </div>
                                    <div class="card-footer card-footer-custom-radius-medium">
                                        <div class="d-flex justify-content-end">
                                            <router-link to="/resident" class="btn border-light bg-white custom-rounded-medium me-2">Kembali</router-link>
                                            <router-link to="/resident" class="btn btn-primary custom-rounded-medium">Simpan</router-link>
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
    <!-- MODAL DETAIL MEMBER OF FAMILY -->
    <div class="modal fade modal-add-member" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="d-block px-2">
                        <h3 class="modal-title mb-1">Tambah Data Penduduk Baru</h3>
                        <!-- <h5>#01390129301293013</h5> -->
                    </div>
                    <button type="button" class="btn btn-light waves-effect custom-rounded-medium btn-square text-muted" data-bs-dismiss="modal"><i class="mdi mdi-close fs-2"></i></button>
                </div>
                <div class="modal-body">
                    <div class="d-block px-2">
                        <h6 class="mb-3">Silahkan lengkapi form dibawah ini dengan benar.</h6>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Nomor Induk Kependudukan (NIK)</label>
                                <input type="number" class="form-control custom-rounded-medium" placeholder="Masukan NIK" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Nama Lengkap</label>
                                <input type="text" class="form-control custom-rounded-medium" placeholder="Masukan nama lengkap" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Jenis Kelamin</label>
                                <select class="form-select select-rounded padding-vertical-10">
                                    <option>Pilih Jenis Kelamin &nbsp;</option>
                                    <option>Laki-laki &nbsp;</option>
                                    <option>Perempuan &nbsp;</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Agama</label>
                                <select class="form-select select-rounded padding-vertical-10">
                                    <option>Pilih Kelurahan &nbsp;</option>
                                    <option>Islam &nbsp;</option>
                                    <option>Kristen &nbsp;</option>
                                    <option>Katolik &nbsp;</option>
                                    <option>Hindu &nbsp;</option>
                                    <option>Buddha &nbsp;</option>
                                    <option>Khonghucu &nbsp;</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Tempat Lahir</label>
                                <input type="text" class="form-control custom-rounded-medium" placeholder="Masukan tempat lahir" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Status</label>
                                <select class="form-select select-rounded padding-vertical-10">
                                    <option>Pilih Status &nbsp;</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Tanggal Lahir</label>
                                <input type="date" class="form-control custom-rounded-medium" placeholder="dd/mm/yyyy" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Usia</label>
                                <input type="text" class="form-control custom-rounded-medium bg-white" placeholder="Kalkulasi dari tanggal lahir" readonly />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Pendidikan Terakhir</label>
                                <select class="form-select select-rounded padding-vertical-10">
                                    <option>Pilih Pendidikan &nbsp;</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Pekerjaan</label>
                                <select class="form-select select-rounded padding-vertical-10">
                                    <option>Pilih Pekerjaan &nbsp;</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Kewarganegaraan</label>
                                <select class="form-select select-rounded padding-vertical-10">
                                    <option>Pilih Kewarganegaraan &nbsp;</option>
                                    <option>WNI &nbsp;</option>
                                    <option>WNA &nbsp;</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Golongan Darah</label>
                                <select class="form-select select-rounded padding-vertical-10">
                                    <option>Pilih Golongan Darah &nbsp;</option>
                                    <option>A &nbsp;</option>
                                    <option>B &nbsp;</option>
                                    <option>AB &nbsp;</option>
                                    <option>O &nbsp;</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Status Perkawinan</label>
                                <select class="form-select select-rounded padding-vertical-10">
                                    <option>Pilih Status Perkawinan &nbsp;</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Tanggal Perkawinan</label>
                                <input type="date" class="form-control custom-rounded-medium" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Nama Ayah</label>
                                <input type="text" class="form-control custom-rounded-medium" placeholder="Masukan nama ayah" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Nama Ibu</label>
                                <input type="text" class="form-control custom-rounded-medium" placeholder="Masukan nama ibu" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control custom-rounded-medium" placeholder="Masukan email" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Nomor Telepon</label>
                                <input type="text" class="form-control custom-rounded-medium" placeholder="Masukan no. telepon" />
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label">Keterangan</label>
                            <textarea class="form-control" placeholder="Masukan keterangan (opsional)" rows="5"></textarea>
                        </div>
                        <div class="form-group mb-2">
                            <input type="checkbox" class="form-check-input me-2" id="identity" />
                            <label class="form-check-label" for="identity">Sudah memiliki KTP</label>
                        </div>
                        <div class="form-group mb-3">
                            <input type="checkbox" class="form-check-input me-2" id="outside" />
                            <label class="form-check-label" for="outside">Penduduk pindahan dari luar daerah ?</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer p-3">
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