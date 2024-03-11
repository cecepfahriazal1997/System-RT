<template>
    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box text-center">
                    <a href="index.html" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="@/assets/images/logo/logo.svg" alt="logo-sm-dark" height="22">
                        </span>
                        <span class="logo-lg">
                            <img src="@/assets/images/logo/logo.svg" alt="logo-dark" height="50">
                        </span>
                    </a>
                </div>

                <button type="button" class="btn btn-sm px-3 font-size-24 d-lg-none header-item" data-bs-toggle="collapse"
                    data-bs-target="#topnav-menu-content">
                    <i class="ri-menu-2-line align-middle"></i>
                </button>

                <!-- App Search-->
                <div class="d-flex align-items-center">
                    <select class="form-select select-rounded-primary me-2" style="width: 100px;" v-model="rwId" @change="changeArea()">
                        <option v-for="item in listRW" class="bg-white text-dark" :value="item.id">{{item.name}}</option>
                    </select>
                    <select class="form-select select-rounded-primary" style="width: 100px;" v-model="rtId" @change="changeArea()">
                        <option v-for="item in listRT" class="bg-white text-dark" :value="item.id">{{item.name}}</option>
                    </select>
                </div>
            </div>

            <div class="d-flex">
                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item noti-icon waves-effect"
                        id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-notification-3-line"></i>
                        <span class="noti-dot"></span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                        aria-labelledby="page-header-notifications-dropdown">
                        <div class="p-3">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6 class="m-0"> Notifications </h6>
                                </div>
                                <div class="col-auto">
                                    <a href="#!" class="small"> View All</a>
                                </div>
                            </div>
                        </div>
                        <simplebar data-simplebar style="max-height: 230px;">
                            <a href="" class="text-reset notification-item">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-xs">
                                            <span class="avatar-title bg-primary rounded-circle font-size-16">
                                                <i class="ri-shopping-cart-line"></i>
                                            </span>
                                        </div>
                                    </div>                                
                                    <div class="flex-grow-1">
                                        <h6 class="mb-1">Your order is placed</h6>
                                        <div class="font-size-12 text-muted">
                                            <p class="mb-1">If several languages coalesce the grammar</p>
                                            <p class="mb-0"><i class="mdi mdi-clock-outline"></i> 3 min ago</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </simplebar>
                        <div class="p-2 border-top">
                            <div class="d-grid">
                                <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                                    <i class="mdi mdi-arrow-right-circle me-1"></i> View More..
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown d-inline-block user-dropdown">
                    <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="rounded-circle header-profile-user" :src="$store.state.user.picture" alt="Header Avatar" v-if="$store.state.user.picture">
                        <img class="rounded-circle header-profile-user" src="@/assets/images/default-avatar.png" alt="Header Avatar" v-else>
                        <span class="d-none d-xl-inline-block ms-1">{{$store.state.user.fullname}}</span>
                        <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                        <!-- item-->
                        <a class="dropdown-item" href="#"><i class="ri-user-line align-middle me-1"></i> Profil</a>
                        <a class="dropdown-item" href="#"><i class="ri-lock-line align-middle me-1"></i> Ubah Password</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-danger" href="#" @click="logout()"><i class="ri-shut-down-line align-middle me-1 text-danger"></i> Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="topnav">
        <div class="container-fluid">
            <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
                <div class="collapse navbar-collapse" id="topnav-menu-content">
                    <ul class="navbar-nav">
                        <template v-for="item in listMenu">
                            <li class="nav-item" :class="{'dropdown': item.child.length}" v-if="item.role.indexOf($store.state.user.role) != -1 || item.role == 'all'">
                                <router-link v-if="item.url" :to="item.url" class="nav-link" :class="{'dropdown-toggle arrow-none': item.child.length}">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <i class="me-2 font-size-20" :class="item.icon"></i> {{item.title}} <div class="arrow-down" v-if="item.child.length"></div>
                                    </div>
                                </router-link>
                                <a href="javascript:void(0)" v-else class="nav-link" :class="{'dropdown-toggle arrow-none': item.child.length}">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <i class="me-2 font-size-20" :class="item.icon"></i> {{item.title}} <div class="arrow-down" v-if="item.child.length"></div>
                                    </div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-apps" v-if="item.child.length">
                                    <template v-for="child in item.child">
                                        <router-link :to="child.url" class="dropdown-item d-flex align-items-center justify-content-between" v-if="child.role.indexOf($store.state.user.role) != -1 || child.role == 'all'">{{child.title}} <i class="mdi mdi-arrow-right" v-if="item.child.length"></i></router-link>
                                    </template>
                                </div>
                            </li>
                        </template>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import simplebar from 'simplebar-vue';
import 'simplebar-core/dist/simplebar.css';

import { ApiCore } from '@/services/core';
import apiEndpoint from '@/services/api-endpoint';

import { find } from 'lodash'

export default {
    name: 'NavBar',
    data() {
        return {
            listMenu: [
                {
                    title: 'Dashboard',
                    icon: 'mdi mdi-view-dashboard-outline',
                    url: '/',
                    role: 'all',
                    child: []
                },
                {
                    title: 'Data Master',
                    icon: 'mdi mdi-database-outline',
                    url: '',
                    role: ['superadmin', 'admin'],
                    child: [
                        {
                            title: 'Pendidikan',
                            url: '/master-education',
                            role: ['superadmin']
                        },
                        {
                            title: 'Pekerjaan',
                            url: '/work',
                            role: ['superadmin']
                        },
                        {
                            title: 'Data RW',
                            url: '/master-rw',
                            role: ['superadmin']
                        },
                        {
                            title: 'Data RT',
                            url: '/master-rt',
                            role: ['superadmin']
                        },
                        {
                            title: 'Organisasi',
                            url: '/signin',
                            role: ['admin']
                        }
                    ]
                },
                {
                    title: 'Data Penduduk',
                    icon: 'mdi mdi-card-account-details-outline',
                    url: '/resident',
                    role: ['superadmin', 'admin', 'rt'],
                    child: []
                },
                {
                    title: 'Jadwal',
                    icon: 'mdi mdi-calendar-month-outline',
                    url: '/signin',
                    role: ['rt'],
                    child: []
                },
                // {
                //     title: 'Keuangan',
                //     icon: 'mdi mdi-clipboard-check-outline',
                //     url: '/signin',
                //     child: [
                //         {
                //             title: 'Transaksi Iuran',
                //             url: '/signin',
                //         },
                //         {
                //             title: 'Laporan Keuangan',
                //             url: '/signin',
                //         }
                //     ]
                // }
            ],
            rwId: '',
            rtId: '',
            listRW: [],
        }
    },
    components: {
        simplebar,
    },
    computed: {
        listRT() {
            const tmpListRT = find(this.listRW, {'id': this.rwId})?.rt
            if (tmpListRT) {
                if (!this.rtId)
                    this.rtId = tmpListRT[0].id
            }

            return tmpListRT
        },
    },
    mounted() {
        this.fetchListRW()
        this.rwId = localStorage.getItem('rwId')
        this.rtId = localStorage.getItem('rtId')
    },
    methods: {
        fetchListRW() {
            ApiCore.get(`${apiEndpoint.GENERAL}/rw`).then((result) => {
                if (result.status) {
                    this.listRW = result.data
                    // if (!this.rwId)
                        this.rwId = result.data[0].id
                    // this.listRT = result.data[0].rt;
                }
            })
        },
        changeArea() {
            this.$store.commit('setrwId', this.rwId)
            this.$store.commit('setrtId', this.rtId)
            this.$router.go(0);
        },
        async logout() {
            this.$swal
                .fire({
                    title: 'Apakah kamu yakin ?',
                    text: 'Kamu akan keluar dari aplikasi',
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
                        this.$store.getters.logout
                        window.location.href='/'
                    }
                });
        }
    }
}
</script>