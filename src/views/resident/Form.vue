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
                                <Form :validation-schema="schema" @submit="handleSubmit">
                                    <div class="card custom-rounded-medium">
                                        <div class="card-body">
                                            <h6 class="mb-3">Silahkan lengkapi form dibawah ini dengan benar.</h6>
                                            <div class="spacer-medium"></div>
                                            <div class="form-group mb-3">
                                                <label class="form-label">Nomor Kartu Keluarga <span class="text-danger">(*)</span></label>
                                                <Field type="number" class="form-control custom-rounded-medium" placeholder="Masukan nomor kartu keluarga" name="number" v-model="form.number" />
                                                <ErrorMessage name="number" :class="'text-danger'" />
                                            </div>
                                            <div class="form-group row mb-3">
                                                <div class="col-md-6">
                                                    <label class="form-label">RW <span class="text-danger">(*)</span></label>
                                                    <Field name="rw" as="select" class="form-select select-rounded padding-vertical-10" v-model="form.rw_id">
                                                        <option value="">Pilih RW &nbsp;</option>
                                                        <option v-for="item in listRW" :value="item.id">{{item.name}} &nbsp;</option>
                                                    </Field>
                                                    <ErrorMessage name="rw" :class="'text-danger'" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">RT <span class="text-danger">(*)</span></label>
                                                    <Field name="rt" as="select" class="form-select select-rounded padding-vertical-10" v-model="form.rt_id">
                                                        <option value="">Pilih RT &nbsp;</option>
                                                        <option v-for="item in listRT" :value="item.id">{{item.name}} &nbsp;</option>
                                                    </Field>
                                                    <ErrorMessage name="rt" :class="'text-danger'" />
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <div class="col-md-6">
                                                    <label class="form-label">Provinsi <span class="text-danger">(*)</span></label>
                                                    <Field name="province" as="select" class="form-select select-rounded padding-vertical-10" v-model="form.province.id" @change="fetchCity(); getNameRegion(listProvince, form.province.id, 'province')">
                                                        <option value="">Pilih Provinsi</option>
                                                        <option v-for="item in listProvince" :value="item.id">{{item.name}}</option>
                                                    </Field>
                                                    <ErrorMessage name="province" :class="'text-danger'" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">Kabupaten/Kota <span class="text-danger">(*)</span></label>
                                                    <Field name="city" as="select" class="form-select select-rounded padding-vertical-10" @change="fetchDistrict(); getNameRegion(listCity, form.city.id, 'city')" v-model="form.city.id">
                                                        <option value="">Pilih Kabupaten/Kota</option>
                                                        <option v-for="item in listCity" :value="item.id">{{item.name}}</option>
                                                    </Field>
                                                    <ErrorMessage name="city" :class="'text-danger'" />
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <div class="col-md-6">
                                                    <label class="form-label">Kecamatan <span class="text-danger">(*)</span></label>
                                                    <Field name="district" as="select" class="form-select select-rounded padding-vertical-10" @change="fetchSubDistrict(); getNameRegion(listDistrict, form.district.id, 'district')" v-model="form.district.id">
                                                        <option value="">Pilih Kecamatan</option>
                                                        <option v-for="item in listDistrict" :value="item.id">{{item.name}}</option>
                                                    </Field>
                                                    <ErrorMessage name="district" :class="'text-danger'" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">Kelurahan <span class="text-danger">(*)</span></label>
                                                    <Field name="sub_district" as="select" class="form-select select-rounded padding-vertical-10" v-model="form.sub_district.id" @change="getNameRegion(listSubDistrict, form.sub_district.id, 'subdistrict')">
                                                        <option value="">Pilih Kelurahan</option>
                                                        <option v-for="item in listSubDistrict" :value="item.id">{{item.name}}</option>
                                                        <ErrorMessage name="sub_district" :class="'text-danger'" />
                                                    </Field>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <div class="col-md-6">
                                                    <label class="form-label">Kode Pos</label>
                                                    <Field name="postal_code" type="number" class="form-control custom-rounded-medium" placeholder="Masukan kode pos (opsional)" v-model="form.postal_code" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">Dikeluarkan Pada <span class="text-danger">(*)</span></label>
                                                    <Field class="form-control" type="date" placeholder="dd/mm/yyyy" name="publish_date" v-model="form.publish_date" />
                                                    <ErrorMessage name="publish_date" :class="'text-danger'" />
                                                </div>
                                            </div>
                                            <div class="form-group mb-3">
                                                <label class="form-label">Alamat Lengkap <span class="text-danger">(*)</span></label>
                                                <Field name="address" as="textarea" class="form-control" placeholder="Masukan alamat lengkap ..." rows="5" v-model="form.address" />
                                                <ErrorMessage name="address" :class="'text-danger'" />
                                            </div>
                                            <div class="form-group mb-3">
                                                <label class="form-label">Menerima Bantuan</label>
                                                <Field as="select" name="benefit" class="form-select select-rounded padding-vertical-10" v-model="form.social_assistance_recipients">
                                                    <option v-for="item in listSocialAssistanceRecipients" :value="item.id">{{item.name}}</option>
                                                </Field>
                                            </div>
                                            <div class="spacer-medium"></div>
                                            <h6>Anggota Keluarga ({{ form.list_member.length }} orang)</h6>
                                            <template v-if="form.list_member.length">
                                                <div class="d-block bg-light custom-rounded-medium p-3 mb-2" v-for="item, index in form.list_member">
                                                    <div class="d-flex align-items-end" style="gap: 0.5rem">
                                                        <div class="d-block w-100">
                                                            <h6 class="mb-3">Anggota #{{index + 1}}</h6>
                                                            <input type="text" class="form-control bg-white fw-bold text-primary" readonly v-model="item.name" />
                                                        </div>
                                                        <div class="d-block flex-shrink-0">
                                                            <h6 class="mb-3">Status Kedudukan Keluarga</h6>
                                                            <Field as="select" :name="`status-${index}`" class="form-select select-rounded padding-vertical-10" v-model="item.position">
                                                                <option value="">Pilih Kedudukan Keluarga &nbsp;</option>
                                                                <option value="leader">Kepala Keluarga &nbsp;</option>
                                                                <option value="wife">Istri &nbsp;</option>
                                                                <option value="child">Anak &nbsp;</option>
                                                                <option value="other">Lainnya &nbsp;</option>
                                                            </Field>
                                                        </div>
                                                        <div class="d-flex flex-shrink-0 justify-content-end align-items-center">
                                                            <button type="button" class="btn btn-square border bg-info text-white me-2" data-bs-toggle="modal" data-bs-target=".modal-add-member" @click="editResident(item)"><i class="mdi mdi-circle-edit-outline fs-4"></i></button>
                                                            <button type="button" class="btn btn-square border bg-white me-2" @click="removeMember(index)"><i class="mdi mdi-trash-can-outline fs-4"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                            <div v-else class="d-flex align-items-center justify-content-center bg-light custom-rounded-medium mt-3 text-muted" style="min-height: 150px">
                                                <span class="ri-information-line me-2"></span>Silahkan tambah anggota keluarga
                                            </div>
                                            <div class="spacer-small"></div>
                                            <div class="d-flex justify-content-end">
                                                <button type="button" class="btn border-light bg-white custom-rounded-medium" data-bs-toggle="modal" data-bs-target=".modal-add-member" @click="resetFormResident()"><i class="mdi mdi-plus me-2"></i>Tambah Anggota Keluarga</button>
                                            </div>
                                        </div>
                                        <div class="card-footer card-footer-custom-radius-medium">
                                            <div class="d-flex justify-content-end">
                                                <router-link to="/resident" class="btn border-light bg-white custom-rounded-medium me-2">Kembali</router-link>
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
    <!-- MODAL DETAIL MEMBER OF FAMILY -->
    <div class="modal fade modal-add-member" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <Form :validation-schema="schemaResident" @submit="handleSubmitResident" class="modal-content">
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
                                <label class="form-label">Nomor Induk Kependudukan (NIK) <span class="text-danger">(*)</span></label>
                                <Field name="identity_number" v-model="dataResident.identity_number" type="number" class="form-control custom-rounded-medium" placeholder="Masukan NIK" />
                                <ErrorMessage name="identity_number" :class="'text-danger'" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Nama Lengkap <span class="text-danger">(*)</span></label>
                                <Field name="name" v-model="dataResident.name" type="text" class="form-control custom-rounded-medium" placeholder="Masukan nama lengkap" />
                                <ErrorMessage name="name" :class="'text-danger'" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Jenis Kelamin <span class="text-danger">(*)</span></label>
                                <Field name="gender" as="select" class="form-select select-rounded padding-vertical-10" v-model="dataResident.gender">
                                    <option value="">Pilih Jenis Kelamin &nbsp;</option>
                                    <option value="L">Laki-laki &nbsp;</option>
                                    <option value="P">Perempuan &nbsp;</option>
                                </Field>
                                <ErrorMessage name="gender" :class="'text-danger'" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Agama <span class="text-danger">(*)</span></label>
                                <Field name="religion" as="select" class="form-select select-rounded padding-vertical-10" v-model="dataResident.religion">
                                    <option value="">Pilih Agama &nbsp;</option>
                                    <option value="islam">Islam &nbsp;</option>
                                    <option value="kristen">Kristen &nbsp;</option>
                                    <option value="katolik">Katolik &nbsp;</option>
                                    <option value="hindu">Hindu &nbsp;</option>
                                    <option value="buddha">Buddha &nbsp;</option>
                                    <option value="khonghucu">Khonghucu &nbsp;</option>
                                </Field>
                                <ErrorMessage name="religion" :class="'text-danger'" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Tempat Lahir <span class="text-danger">(*)</span></label>
                                <Field name="placebirth" v-model="dataResident.placebirth" type="text" class="form-control custom-rounded-medium" placeholder="Masukan tempat lahir" />
                                <ErrorMessage name="placebirth" :class="'text-danger'" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Status <span class="text-danger">(*)</span></label>
                                <Field name="status" as="select" class="form-select select-rounded padding-vertical-10" v-model="dataResident.status">
                                    <option value="">Pilih Status &nbsp;</option>
                                    <option value="balita">Balita</option>
                                    <option value="muda">Muda</option>
                                    <option value="lansia">Lansia</option>
                                </Field>
                                <ErrorMessage name="status" :class="'text-danger'" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Tanggal Lahir <span class="text-danger">(*)</span></label>
                                <Field name="datebirth" v-model="dataResident.datebirth" type="date" class="form-control custom-rounded-medium" placeholder="dd/mm/yyyy" @change="calculateAge" />
                                <ErrorMessage name="datebirth" :class="'text-danger'" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Usia</label>
                                <Field name="age" type="text" class="form-control custom-rounded-medium bg-white" placeholder="Kalkulasi dari tanggal lahir" readonly v-model="dataResident.age" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Pendidikan Terakhir</label>
                                <Field name="education_id" as="select" class="form-select select-rounded padding-vertical-10" v-model="dataResident.education_id">
                                    <option value="">Pilih Pendidikan &nbsp;</option>
                                    <option v-for="item in listEducation" :value="item.id">{{item.name}} &nbsp;</option>
                                </Field>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Pekerjaan</label>
                                <Field name="work_id" as="select" class="form-select select-rounded padding-vertical-10" v-model="dataResident.work_id">
                                    <option value="">Pilih Pekerjaan &nbsp;</option>
                                    <option v-for="item in listWork" :value="item.id">{{item.name}} &nbsp;</option>
                                </Field>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Kewarganegaraan</label>
                                <Field name="citizenship" as="select" class="form-select select-rounded padding-vertical-10" v-model="dataResident.citizenship">
                                    <option value="wni">WNI &nbsp;</option>
                                    <option value="wna">WNA &nbsp;</option>
                                </Field>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Golongan Darah</label>
                                <Field name="blood_type" as="select" class="form-select select-rounded padding-vertical-10" v-model="dataResident.blood_type">
                                    <option value="">Pilih Golongan Darah &nbsp;</option>
                                    <option value="a">A &nbsp;</option>
                                    <option value="b">B &nbsp;</option>
                                    <option value="ab">AB &nbsp;</option>
                                    <option value="o">O &nbsp;</option>
                                </Field>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Status Perkawinan</label>
                                <Field name="marriage_status" as="select" class="form-select select-rounded padding-vertical-10" v-model="dataResident.marriage_status">
                                    <option value="0">Belum Kawin &nbsp;</option>
                                    <option value="1">Sudah Kawin &nbsp;</option>
                                </Field>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Tanggal Perkawinan</label>
                                <Field name="marriage_date" type="date" class="form-control custom-rounded-medium" placeholder="dd/mm/yyyy" v-model="dataResident.marriage_date" :disabled="dataResident.marriage_status == 0" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Nama Ayah <span class="text-danger">(*)</span></label>
                                <Field name="father_name" type="text" class="form-control custom-rounded-medium" placeholder="Masukan nama ayah" v-model="dataResident.father_name" />
                                <ErrorMessage name="father_name" :class="'text-danger'" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Nama Ibu <span class="text-danger">(*)</span></label>
                                <Field name="mother_name" type="text" class="form-control custom-rounded-medium" placeholder="Masukan nama ibu" v-model="dataResident.mother_name" />
                                <ErrorMessage name="mother_name" :class="'text-danger'" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Email</label>
                                <Field name="email" type="email" class="form-control custom-rounded-medium" placeholder="Masukan email" v-model="dataResident.email" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Nomor Telepon</label>
                                <Field name="phone" type="text" class="form-control custom-rounded-medium" placeholder="Masukan no. telepon" v-model="dataResident.phone" />
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label">Keterangan</label>
                            <Field as="textarea" name="note" class="form-control" placeholder="Masukan keterangan (opsional)" rows="5" v-model="dataResident.note"></Field>
                        </div>
                        <div class="form-group mb-2">
                            <Field name="have_identity_card" type="checkbox" class="form-check-input me-2" id="identity" true-value="1" false-value="0" v-model="dataResident.have_identity_card" />
                            <label class="form-check-label" for="identity">Sudah memiliki KTP</label>
                        </div>
                        <div class="form-group mb-3">
                            <Field name="status" type="checkbox" class="form-check-input me-2" id="outside" true-value="external" false-value="internal" v-model="dataResident.status" />
                            <label class="form-check-label" for="outside">Penduduk pindahan dari luar daerah ?</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer p-3">
                    <button type="button" class="btn btn-light waves-effect custom-rounded-medium fw-bold px-3" data-bs-dismiss="modal" ref="closemodal">Tutup</button>
                    <button type="submit" class="btn btn-primary waves-effect custom-rounded-medium fw-bold px-3">Simpan</button>
                </div>
            </Form>
        </div>
    </div>
</template>
<script>
import simplebar from 'simplebar-vue';
import 'simplebar-core/dist/simplebar.css';

import { ApiCore } from '@/services/core';
import apiEndpoint from '@/services/api-endpoint';

import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

import { find } from 'lodash'

export default {
    name: 'MasterResident',
    data() {
        return {
            form: {
                number: '',
                address: '',
                rt_id: JSON.parse(localStorage.getItem('rt'))?.id,
                rw_id: JSON.parse(localStorage.getItem('rw')).id,
                province: {id: '', name: ''},
                city: {id: '', name: ''},
                district: {id: '', name: ''},
                sub_district: {id: '', name: ''},
                postal_code: '',
                publish_date: '',
                address: '',
                social_assistance_recipients: '',
                list_member: [],
            },
            listRW: [],
            listProvince: [],
            listCity: [],
            listDistrict: [],
            listSubDistrict: [],
            dataResident: {},
            listSocialAssistanceRecipients: [
                {
                    id: '',
                    name: 'Tidak Menerima Bantuan'
                },
                {
                    id: 'prakerja',
                    name: 'Kartu Prakerja'
                },
                {
                    id: 'blt',
                    name: 'BLT'
                },
                {
                    id: 'pkh',
                    name: 'PKH'
                },
                {
                    id: 'pbin',
                    name: 'PBIN'
                },
                {
                    id: 'bpnt',
                    name: 'BPNT'
                },
                {
                    id: 'bst',
                    name: 'BST'
                },
                {
                    id: 'kip',
                    name: 'KIP'
                },
            ],
            listEducation: [],
            listWork: [],
        }
    },
    components: {
        simplebar, Field, Form, ErrorMessage
    },
    computed: {
        listRT() {
            const tmpListRT = find(this.listRW, {'id': this.form.rw_id})?.rt

            return tmpListRT
        },
    },
    setup() {
        const schema = yup.object({
            number: yup.string().required('Masukan nomor kartu keluarga'),
            rt: yup.string().required('Masukan RT'),
            rw: yup.string().required('Masukan RW'),
            province: yup.string().required('Pilih provinsi terlebih dahulu'),
            city: yup.string().required('Pilih kota terlebih dahulu'),
            district: yup.string().required('Pilih kecamatan terlebih dahulu'),
            sub_district: yup.string().required('Pilih kelurahan terlebih dahulu'),
            publish_date: yup.string().required('Masukan tanggal pengeluaran Kartu Keluarga'),
            address: yup.string().required('Masukan alamat lengkap'),
        });

        const schemaResident = yup.object({
            identity_number: yup.string().required('Masukan nomor induk kependudukan'),
            name: yup.string().required('Masukan nama lengkap'),
            gender: yup.string().required('Pilih jenis kelamin'),
            religion: yup.string().required('Pilih agama'),
            placebirth: yup.string().required('Masukan tempat lahir'),
            datebirth: yup.string().required('Pilih tanggal lahir'),
            status: yup.string().required('Pilih status'),
            education_id: yup.string().required('Pilih pendidikan terakhir'),
            work_id: yup.string().required('Pilih pekerjaan'),
            citizenship: yup.string().required('Pilih kewarganegaraan'),
            marriage_status: yup.string().required('Pilih status perkawinan'),
            father_name: yup.string().required('Masukan nama ayah'),
            mother_name: yup.string().required('Masukan nama ibu'),
        });

        return {
            schema, schemaResident
        }
    },
    mounted() {
        this.fetchListRW()
        this.fetchProvince()
        this.fetchEducation()
        this.fetchWork()

        if (this.$route.params.id)
            this.fetchData()
    },
    methods: {
        fetchListRW() {
            ApiCore.get(`${apiEndpoint.GENERAL}/rw`, {}, true).then((result) => {
                if (result.status) {
                    this.listRW = result.data
                    // if (!this.rwId)
                        this.form.rw_id = result.data[0].id
                    // this.listRT = result.data[0].rt;
                }
            })
        },
        fetchData() {
            ApiCore.get(`${apiEndpoint.ADMINISTRATION_MASTER}/education/${this.$route.params.id}`).then((result) => {
                if (result.status) {
                    this.form = result.data
                }
            })
        },
        fetchEducation() {
            this.listEducation = [];
            ApiCore.get(`${apiEndpoint.ADMINISTRATION_MASTER}/education`, {}, true).then((result) => {
                if (result.status) {
                    this.listEducation = result.data
                }
            })
        },
        fetchWork() {
            this.listWork = [];
            ApiCore.get(`${apiEndpoint.ADMINISTRATION_MASTER}/work`, {}, true).then((result) => {
                if (result.status) {
                    this.listWork = result.data
                }
            })
        },
        fetchProvince: function () {
            ApiCore.get(`${apiEndpoint.REGION}/province`, {}, true).then(res => {
                this.listProvince = res.data;
            });
        },
        fetchCity: function() {
            this.form.city.id = ''
            this.listCity = [];
            
            if(this.form.province.id) {
                ApiCore.get(`${apiEndpoint.REGION}/province_detail`, {
                    type: 'city',
                    id_province : this.form.province.id
                }, false).then(res => {
                    this.listCity = res.data;
                });
            }
        },
        fetchDistrict: function() {
            this.form.district.id = ''
            this.listDistrict = [];
            
            if(this.form.province.id && this.form.city.id) {
                ApiCore.get(`${apiEndpoint.REGION}/province_detail`, {
                    type: 'district',
                    id_city : this.form.city.id,
                    id_province : this.form.province.id
                }, false).then(res => {
                    this.listDistrict = res.data;
                });
            }
        },
        fetchSubDistrict: function() {
            this.form.sub_district.id = ''
            this.listSubDistrict = [];
            
            if(this.form.province.id && this.form.city.id) {
                ApiCore.get(`${apiEndpoint.REGION}/province_detail`, {
                    type: 'subdistrict',
                    id_district : this.form.district.id,
                    id_city : this.form.city.id,
                    id_province : this.form.province.id
                }, false).then(res => {
                    this.listSubDistrict = res.data;
                });
            }
        },
        handleSubmitResident() {
            if ('tmp_id' in this.dataResident) {
                console.log(this.dataResident);
                this.form.list_member.splice(this.dataResident.tmp_id, 1, {...this.dataResident})
            } else {
                this.form.list_member.push({...this.dataResident, position: '', tmp_id: this.form.list_member.length})
            }
            this.$refs.closemodal.click()
        },
        async handleSubmit() {
            try {
                this.fetch = true
                const result = await ApiCore.store(`${apiEndpoint.ADNUBUSTRATION_RESIDENT}/save`, this.form)
                this.fetch = false
                if (result.status) {
                    this.$router.push({name: 'resident'})
                    this.$toast.success(result.message);
                } else {
                    this.$toast.error(result.message);
                }
            } catch(error) {
                this.fetch = false
                this.$toast.error(error.message);
            }
        },
        calculateAge() {
            let year = 0
            if (this.dataResident.datebirth) {
                var now = this.$moment(new Date(), "YYYY-MM-DD");
                var end = this.$moment(this.dataResident.datebirth, "YYYY-MM-DD");
                var duration = this.$moment.duration(now.diff(end));
                year = parseInt(duration.asYears());
            }

            this.dataResident.age = year + ' Tahun'
        },
        resetFormResident() {
            this.dataResident = { "identity_number": 1012931023, "name": "Cecep Rokani", "email": "ceceprokani@gmail.com", "phone": "0897817283743", "gender": "L", "placebirth": "Bandung", "datebirth": "1997-12-27", "religion": "islam", "education_id": 6, "work_id": 3, "blood_type": "a", "marriage_status": "1", "marriage_date": "2020-08-01", "citizenship": "wni", "imigran_number_paspor": "", "imigran_number_kitap": "", "father_name": "Ari Suprianto", "mother_name": "Titi Sutiarsih", "status": "muda", "type": "internal", "note": "-", "age": "" }
            // this.dataResident = {
            //     identity_number: '',
            //     name: '',
            //     email: '',
            //     phone: '',
            //     gender: '',
            //     placebirth: '',
            //     datebirth: '',
            //     religion: '',
            //     education_id: '',
            //     work_id: '',
            //     blood_type: '',
            //     marriage_status: '0',
            //     marriage_date: '',
            //     citizenship: 'wni',
            //     imigran_number_paspor: '',
            //     imigran_number_kitap: '',
            //     father_name: '',
            //     mother_name: '',
            //     status: '',
            //     have_identity_card: 0,
            //     type: 'internal',
            //     note: '',
            //     age: '',
            //     email: '',
            //     phone: ''
            // }
        },
        editResident(data) {
            this.dataResident = data
        },
        getNameRegion(data, id, type) {
            const result = find(data, {'id': id})

            switch (type) {
                case 'province':
                    this.form.province.name = result.name
                    break;
                case 'city':
                    this.form.city.name = result.name
                    break;
                case 'district':
                    this.form.district.name = result.name
                    break;
                case 'subdistrict':
                    this.form.sub_district.name = result.name
                    break;
            
                default:
                    break;
            }
        },
        removeMember(index) {
            this.form.list_member.splice(index, 1)
        }
    }
}
</script>