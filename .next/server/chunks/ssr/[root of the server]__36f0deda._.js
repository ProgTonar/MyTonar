module.exports = {

"[project]/.next-internal/server/app/profile/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/services/getPropertyService.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>getProperty)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
async function getProperty(tableId) {
    const table_id = tableId;
    const username = process.env.USERNAME_PROPERTY;
    const password = process.env.PASSWORD_PROPERTY;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post('http://10.11.9.10/UPP/hs/OS', {
            tableId: table_id
        }, {
            headers: {
                'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.error('Ошибка получения данных:', error);
    }
}
}}),
"[project]/src/app/profile/client.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/profile/client.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/profile/client.tsx <module evaluation>", "default");
}}),
"[project]/src/app/profile/client.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/profile/client.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/profile/client.tsx", "default");
}}),
"[project]/src/app/profile/client.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$client$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/profile/client.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$client$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/profile/client.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$client$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/data/profileData.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProfileData": (()=>ProfileData)
});
const ProfileData = [
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Тихомиров Антон Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада сварки кузова роботом',
        dolznost: 'Опереатор сварочного робота 2 разряда'
    },
    {
        name: 'Тихомиров Антон Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада сварки кузова роботом',
        dolznost: 'Опереатор сварочного робота 2 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5382',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    },
    {
        name: 'Жуков Андрей Сергеевич',
        avatar: 'https://my.tonar.info/upload/main/8fa/zimg9rpefzl83k0fixzbw8r1couj7qxl.png',
        phone: '+7 (999) 999-99-99',
        email: 'ivanov@example.com',
        job_phone: '+7 (999) 999-99-99',
        tabel_number: '5380',
        stazh: '4 года 11 месяцев 11 дней',
        birthday: '20.03.1992',
        otdel: 'Бригада по капитальному ремонту оборудования',
        dolznost: 'Слесарь-ремонтник 5 разряда'
    }
];
}}),
"[project]/src/services/profileService.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProfiles": (()=>getProfiles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profileData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/profileData.ts [app-rsc] (ecmascript)");
;
async function getProfiles() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profileData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProfileData"][0];
}
}}),
"[project]/src/app/profile/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$getPropertyService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/getPropertyService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/profile/client.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$profileService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/profileService.ts [app-rsc] (ecmascript)");
;
;
;
;
const PageProfile = async ()=>{
    const profiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$profileService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfiles"])();
    const property = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$getPropertyService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(profiles.tabel_number);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$profile$2f$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        profile: profiles,
        property: property
    }, void 0, false, {
        fileName: "[project]/src/app/profile/page.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = PageProfile;
}}),
"[project]/src/app/profile/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/profile/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__36f0deda._.js.map