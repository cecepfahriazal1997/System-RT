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
                    <select class="form-select select-rounded-primary me-2">
                        <option value="" v-for="item in [1,2,3,4,5,6,7,8,9]" class="bg-white text-dark">RW 0{{item}} &nbsp;</option>
                    </select>
                    <select class="form-select select-rounded-primary">
                        <option value="" v-for="item in [1,2,3,4,5,6,7,8,9]" class="bg-white text-dark">RT 0{{item}} &nbsp;</option>
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
                    <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="rounded-circle header-profile-user" src="https://themesdesign.in/upzet/layouts/assets/images/users/avatar-2.jpg"
                            alt="Header Avatar">
                        <span class="d-none d-xl-inline-block ms-1">Kevin</span>
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
                        <li class="nav-item" :class="{'dropdown': item.child.length}" v-for="item in listMenu">
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
                                <router-link :to="child.url" class="dropdown-item d-flex align-items-center justify-content-between" v-for="child in item.child">{{child.title}} <i class="mdi mdi-arrow-right" v-if="item.child.length"></i></router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import simplebar from 'simplebar-vue';
import 'simplebar-core/dist/simplebar.css';

export default {
    name: 'NavBar',
    data() {
        return {
            listMenu: [
                {
                    title: 'Dashboard',
                    icon: 'mdi mdi-view-dashboard-outline',
                    url: '/',
                    child: []
                },
                {
                    title: 'Data Master',
                    icon: 'mdi mdi-database-outline',
                    url: '',
                    child: [
                        {
                            title: 'Pendidikan',
                            url: '/master-education',
                        },
                        {
                            title: 'Pekerjaan',
                            url: '/work',
                        },
                        {
                            title: 'Organisasi',
                            url: '/signin',
                        }
                    ]
                },
                {
                    title: 'Data Penduduk',
                    icon: 'mdi mdi-card-account-details-outline',
                    url: '/resident',
                    child: []
                },
                {
                    title: 'Jadwal',
                    icon: 'mdi mdi-calendar-month-outline',
                    url: '/signin',
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
            ]
        }
    },
    components: {
        simplebar,
    },
    methods: {
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