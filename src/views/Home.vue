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
                                    <h4 class="mb-sm-0">Dashboard</h4>

                                    <!-- <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Horizontal</a></li>
                                            <li class="breadcrumb-item active">Default</li>
                                        </ol>
                                    </div> -->

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div id="carouselExampleCaption" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                            <div style="background-image: url('https://themesdesign.in/upzet/layouts/assets/images/small/img-7.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center; width: 100%; min-height: 500px;" class="custom-rounded-medium"></div>
                                            <div class="carousel-caption d-none d-md-block text-white-50">
                                                <h5 class="text-white">First slide label</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div style="background-image: url('https://themesdesign.in/upzet/layouts/assets/images/small/img-5.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center; width: 100%; min-height: 500px;" class="custom-rounded-medium"></div>
                                            <div class="carousel-caption d-none d-md-block text-white-50">
                                                <h5 class="text-white">Second slide label</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleCaption" role="button" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleCaption" role="button" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="spacer-medium"></div>
                        <!-- statistic resident -->
                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <div class="card custom-rounded-medium">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="avatar-md">
                                                <span class="avatar-title rounded-circle bg-info h1">
                                                    <i class="mdi mdi-account-group-outline text-white"></i>
                                                </span>
                                            </div>
                                            <div class="d-block ms-3">
                                                <p class="mb-1 text-dark">Jumlah Penduduk</p>
                                                <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-info">{{statistic.resident_total_all}}</h1> <span class="font-size-12 mb-1">orang</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card -->
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="card custom-rounded-medium">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="avatar-md">
                                                <span class="avatar-title rounded-circle bg-warning h1">
                                                    <i class="mdi mdi-gender-male text-white"></i>
                                                </span>
                                            </div>
                                            <div class="d-block ms-3">
                                                <p class="mb-1 text-dark">Jumlah Pria</p>
                                                <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-warning">{{statistic.resident_total_male}}</h1> <span class="font-size-12 mb-1">orang</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card -->
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="card custom-rounded-medium">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="avatar-md">
                                                <span class="avatar-title rounded-circle bg-success h1">
                                                    <i class="mdi mdi-gender-female text-white"></i>
                                                </span>
                                            </div>
                                            <div class="d-block ms-3">
                                                <p class="mb-1 text-dark">Jumlah Wanita</p>
                                                <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-success">{{statistic.resident_total_female}}</h1> <span class="font-size-12 mb-1">orang</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card -->
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- statistic resident by card -->
                        <div class="row">
                            <div class="col-xl-12 col-sm-6">
                                <div class="card custom-rounded-medium">
                                    <div class="card-header bg-white custom-rounded-medium">
                                        <h6 class="mt-2 mb-0 fw-bold">Jumlah Penduduk Berdasarkan Kartu Keluarga</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="d-flex">
                                                    <div class="avatar-md">
                                                        <span class="avatar-title rounded-circle bg-info h1">
                                                            <i class="mdi mdi-card-account-details-outline text-white"></i>
                                                        </span>
                                                    </div>
                                                    <div class="d-block ms-3">
                                                        <p class="mb-1 text-dark">Jumlah Kartu Keluarga</p>
                                                        <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-info">{{statistic.card_family_total_all}}</h1> <span class="font-size-12 mb-1">keluarga</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 ps-3 pe-3 border-start border-end">
                                                <div class="d-flex">
                                                    <div class="avatar-md">
                                                        <span class="avatar-title rounded-circle bg-warning h1">
                                                            <i class="mdi mdi-gender-male text-white"></i>
                                                        </span>
                                                    </div>
                                                    <div class="d-block ms-3">
                                                        <p class="mb-1 text-dark">Kepala Keluarga Pria</p>
                                                        <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-warning">{{statistic.card_family_total_male}}</h1> <span class="font-size-12 mb-1">keluarga</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 ps-3">
                                                <div class="d-flex">
                                                    <div class="avatar-md">
                                                        <span class="avatar-title rounded-circle bg-success h1">
                                                            <i class="mdi mdi-gender-female text-white"></i>
                                                        </span>
                                                    </div>
                                                    <div class="d-block ms-3">
                                                        <p class="mb-1 text-dark">Kepala Keluarga Wanita</p>
                                                        <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-success">{{statistic.card_family_total_female}}</h1> <span class="font-size-12 mb-1">keluarga</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card -->
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- resident growth -->
                        <div class="row">
                            <div class="col-xl-12 col-sm-6">
                                <div class="card custom-rounded-medium">
                                    <div class="card-header bg-white custom-rounded-medium">
                                        <h6 class="mt-2 mb-0 fw-bold">Pertumbuhan Penduduk</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="d-block border-end">
                                                    <div class="d-flex mb-3 align-items-center">
                                                        <div class="avatar-sm">
                                                            <span class="avatar-title rounded-circle bg-danger h3">
                                                                <i class="mdi mdi-skull-outline text-white"></i>
                                                            </span>
                                                        </div>
                                                        <div class="d-block ms-3">
                                                            <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-danger">{{statistic.growth_total_dead}}</h1> <span class="font-size-12 mb-1">orang</span></div>
                                                        </div>
                                                    </div>
                                                    <p class="mb-1 text-black">Penduduk Meninggal</p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="d-block border-end">
                                                    <div class="d-flex mb-3 align-items-center">
                                                        <div class="avatar-sm">
                                                            <span class="avatar-title rounded-circle bg-success h3">
                                                                <i class="mdi mdi-rotate-left text-white"></i>
                                                            </span>
                                                        </div>
                                                        <div class="d-block ms-3">
                                                            <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-success">{{statistic.growth_total_enter}}</h1> <span class="font-size-12 mb-1">orang</span></div>
                                                        </div>
                                                    </div>
                                                    <p class="mb-1 text-black">Penduduk Masuk</p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="d-block border-end">
                                                    <div class="d-flex mb-3 align-items-center">
                                                        <div class="avatar-sm">
                                                            <span class="avatar-title rounded-circle bg-warning h3">
                                                                <i class="mdi mdi-rotate-right text-white"></i>
                                                            </span>
                                                        </div>
                                                        <div class="d-block ms-3">
                                                            <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-warning">{{statistic.growth_total_out}}</h1> <span class="font-size-12 mb-1">orang</span></div>
                                                        </div>
                                                    </div>
                                                    <p class="mb-1 text-black">Penduduk Keluar</p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="d-block">
                                                    <div class="d-flex mb-3 align-items-center">
                                                        <div class="avatar-sm">
                                                            <span class="avatar-title rounded-circle bg-info h3">
                                                                <i class="mdi mdi-human-female-boy text-white"></i>
                                                            </span>
                                                        </div>
                                                        <div class="d-block ms-3">
                                                            <div class="d-flex align-items-end"><h1 class="mb-0 me-2 fw-bold text-info">{{statistic.growth_total_born}}</h1> <span class="font-size-12 mb-1">orang</span></div>
                                                        </div>
                                                    </div>
                                                    <p class="mb-1 text-black">Penduduk Lahir</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card -->
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- statistic of finance -->
                        <div class="row d-none">
                            <div class="col-md-4 col-sm-6">
                                <div class="card custom-rounded-medium bg-success">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="avatar-md">
                                                <span class="avatar-title rounded-circle bg-white h1">
                                                    <i class="mdi mdi-clipboard-plus-outline text-success"></i>
                                                </span>
                                            </div>
                                            <div class="d-block ms-3 text-white">
                                                <p class="mb-1">Jumlah Uang Kas</p>
                                                <div class="d-flex align-items-end mb-2"><span class="font-size-16 fw-bold mb-1">Rp. </span><h2 class="mb-0 ms-2 fw-bold text-white">{{statistic.finance_balance}}</h2></div>
                                                <button class="btn btn-sm btn-light custom-rounded-medium btn-white text-success fw-bold">Lihat Rincian</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card -->
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="card custom-rounded-medium bg-info">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="avatar-md">
                                                <span class="avatar-title rounded-circle bg-white h1">
                                                    <i class="mdi mdi-clipboard-check-outline text-info"></i>
                                                </span>
                                            </div>
                                            <div class="d-block ms-3 text-white">
                                                <p class="mb-1">Jumlah Uang Iuran</p>
                                                <div class="d-flex align-items-end mb-2"><span class="font-size-16 fw-bold mb-1">Rp. </span><h2 class="mb-0 ms-2 fw-bold text-white">{{statistic.finance_income}}</h2></div>
                                                <button class="btn btn-sm btn-light custom-rounded-medium btn-white text-info fw-bold">Lihat Rincian</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card -->
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="card custom-rounded-medium bg-danger">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="avatar-md">
                                                <span class="avatar-title rounded-circle bg-white h1">
                                                    <i class="mdi mdi-clipboard-minus-outline text-danger"></i>
                                                </span>
                                            </div>
                                            <div class="d-block ms-3 text-white">
                                                <p class="mb-1">Jumlah Pengeluaran</p>
                                                <div class="d-flex align-items-end mb-2"><span class="font-size-16 fw-bold mb-1">Rp. </span><h2 class="mb-0 ms-2 fw-bold text-white">{{statistic.finance_outcome}}</h2></div>
                                                <button class="btn btn-sm btn-light custom-rounded-medium btn-white text-danger fw-bold">Lihat Rincian</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card -->
                            </div>
                        </div>
                        <!-- schedule -->
                        <div class="spacer-medium d-none"></div>
                        <div class="row d-none">
                            <div class="d-flex align-items-end justify-content-between">
                                <div class="d-block">
                                    <h1>Jadwal Kegiatan Minggu Ini</h1>
                                    <h5 class="mb-3">01 Januari s.d 07 Januari 2024</h5>
                                </div>
                                <button class="btn bg-white custom-rounded-medium bordered">Selengkapnya</button>
                            </div>
                            <div class="spacer-medium"></div>
                            <div class="d-flex align-items-center">
                                <!-- <button class="btn btn-light bordered border-primary btn-sm btn-floating-circle-left"><i class="mdi mdi-chevron-left"></i></button> -->
                                <simplebar data-simplebar data-simplebar-auto-hide="false" style="max-width: 100%; overflow-x: auto;">
                                    <div class="d-flex" style="gap: 10px;">
                                        <div class="card bg-primary custom-rounded-medium" style="min-width: 200px;">
                                            <div class="card-body text-white p-3">
                                                <div class="mb-3 text-center">Senin, 01 Januari</div>
                                                <div class="card custom-rounded-medium mb-2">
                                                    <div class="card-body p-3">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div class="d-block">
                                                                <h6>Kerja Bakti</h6>
                                                                <p class="text-dark mb-0">07:00 - 10:00</p>
                                                            </div>
                                                            <i class="mdi mdi-dots-vertical text-dark"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card custom-rounded-medium mb-2">
                                                    <div class="card-body p-3">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div class="d-block">
                                                                <h6>Kerja Bakti</h6>
                                                                <p class="text-dark mb-0">07:00 - 10:00</p>
                                                            </div>
                                                            <i class="mdi mdi-dots-vertical text-dark"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card custom-rounded-medium mb-2">
                                                    <div class="card-body p-3">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div class="d-block">
                                                                <h6>Kerja Bakti</h6>
                                                                <p class="text-dark mb-0">07:00 - 10:00</p>
                                                            </div>
                                                            <i class="mdi mdi-dots-vertical text-dark"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card bg-gray-level-two custom-rounded-medium" style="min-width: 200px;">
                                            <div class="card-body text-dark p-3">
                                                <div class="mb-3 text-center">Selasa, 02 Januari</div>
                                                <div class="d-flex align-items-center justify-content-center" style="height: 90%">
                                                    <div class="text-muted font-size-12">Tidak ada jadwal</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card bg-gray-level-two custom-rounded-medium" style="min-width: 200px;">
                                            <div class="card-body text-dark p-3">
                                                <div class="mb-3 text-center">Rabu, 03 Januari</div>
                                                <div class="d-flex align-items-center justify-content-center" style="height: 90%">
                                                    <div class="text-muted font-size-12">Tidak ada jadwal</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card bg-gray-level-two custom-rounded-medium" style="min-width: 200px;">
                                            <div class="card-body text-dark p-3">
                                                <div class="mb-3 text-center">Kami, 04 Januari</div>
                                                <div class="d-flex align-items-center justify-content-center" style="height: 90%">
                                                    <div class="text-muted font-size-12">Tidak ada jadwal</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card bg-gray-level-two custom-rounded-medium" style="min-width: 200px;">
                                            <div class="card-body text-dark p-3">
                                                <div class="mb-3 text-center">Jumat, 05 Januari</div>
                                                <div class="d-flex align-items-center justify-content-center" style="height: 90%">
                                                    <div class="text-muted font-size-12">Tidak ada jadwal</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card bg-gray-level-two custom-rounded-medium" style="min-width: 200px;">
                                            <div class="card-body text-dark p-3">
                                                <div class="mb-3 text-center">Sabtu, 06 Januari</div>
                                                <div class="d-flex align-items-center justify-content-center" style="height: 90%">
                                                    <div class="text-muted font-size-12">Tidak ada jadwal</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card bg-gray-level-two custom-rounded-medium" style="min-width: 200px;">
                                            <div class="card-body text-dark p-3">
                                                <div class="mb-3 text-center">Minggu, 07 Januari</div>
                                                <div class="d-flex align-items-center justify-content-center" style="height: 90%">
                                                    <div class="text-muted font-size-12">Tidak ada jadwal</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </simplebar>
                            </div>
                        </div>
                        <!-- chart -->
                        <div class="spacer-medium"></div>
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Grafik Penduduk</h1>
                                <p>Menampilkan berbagai informasi penduduk dengan grafik</p>
                            </div>
                            <div class="spacer-medium"></div>
                            <div class="col-md-12">
                                <div class="card card-body custom-rounded-medium">
                                    <h5>Penduduk Berdasarkan Usia</h5>
                                    <p>Statistik penduduk berdasarkan usia dan jenis kelamin</p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card card-body custom-rounded-medium">
                                    <h5>Penerima Bantuan</h5>
                                    <p>Statistik penduduk berdasarkan penerima bantuan</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-body custom-rounded-medium">
                                    <h5>Status Perkawinan</h5>
                                    <p>Statistik penduduk berdasarkan status perkawinan</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-body custom-rounded-medium">
                                    <h5>Pekerjaan</h5>
                                    <p>Statistik penduduk berdasarkan pekerjaan</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-body custom-rounded-medium">
                                    <h5>Pendidikan Terakhir</h5>
                                    <p>Statistik penduduk berdasarkan pendidikan terakhir</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-body custom-rounded-medium">
                                    <h5>Pekerjaan</h5>
                                    <p>Statistik penduduk berdasarkan agama</p>
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
    
export default {
    name: 'Home',
    data() {
        return {
            statistic: {
                resident_total_all: 0,
                resident_total_male: 0,
                resident_total_female: 0,
                card_family_total_all: 0,
                card_family_total_male: 0,
                card_family_total_female: 0,
                growth_total_dead: 0,
                growth_total_enter: 0,
                growth_total_out: 0,
                growth_total_born: 0,
                finance_balance: 0,
                finance_income: 0,
                finance_outcome: 0,
            },
            graph: {
                resident_by_age: [],
                resident_by_help: [],
                resident_by_marriage: [],
                resident_by_work: [],
                resident_by_education: [],
                resident_by_religon: [],
            },
            listSchedule: [],
        }
    },
    components: {
        simplebar,
    },
    mounted() {
    },
    methods: {
    }
}
</script>