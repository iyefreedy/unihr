import { number } from "joi";

export default defineEventHandler((event) => {
    const employees = [
        {
            id: 1,
            nip: "10.0.0.0031",
            name: "Muhammad Quraisy",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: "male",
            status: "probation",
        },
        {
            id: 2,
            nip: "10.0.0.0031",
            name: "Guntur Ginanjar",
            organization: "Direktorat Sumber Daya Manusia",
            gender: "male",
            status: "permanent",
        },
        {
            id: 3,
            nip: "10.0.0.0031",
            name: "Umar",
            organization: "Direktorat Keuangan",
            gender: "male",
            status: "permanent",
        },
        {
            id: 4,
            nip: "10.0.0.0031",
            name: "Agus Wahyu Setiawan",
            organization: "Direktorat Administrasi dan Fasilitas Akademik",
            gender: "male",
            status: "permanent",
        },
        {
            id: 5,
            nip: "10.0.0.0031",
            name: "Dita Jauza",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: "female",
            status: "permanent",
        },
        {
            id: 6,
            nip: "10.0.0.0031",
            name: "Muhammad Irfan Hidayat",
            organization: "Pusat Komputer dan Inovasi Digital",
            gender: "male",
            status: "permanent",
        },
        {
            id: 7,
            nip: "10.0.0.0031",
            name: "Nurfadilah",
            organization: "Direktorat Sumber Daya Manusia",
            gender: "male",
            status: "permanent",
        },
        {
            id: 8,
            nip: "10.0.0.0031",
            name: "Asep Maksum",
            organization: "Direktorat Keuangan",
            gender: "male",
            status: "permanent",
        },
        {
            id: 9,
            nip: "10.0.0.0031",
            name: "Meldini Alivia",
            organization: "Direktorat Administrasi dan Fasilitas Akademik",
            gender: "female",
            status: "leave",
        },
    ];

    const {
        q,
        _limit,
        _page,
    }: {
        q: string | undefined;
        _limit: number ;
        _page: number | undefined;
    } = getQuery(event);

    const offset = (_limit ?? 0) * (_page ?? 0) - _limit;
    console.log(q, _limit, _page, offset);

    return [...employees].slice(offset, _limit);
});
