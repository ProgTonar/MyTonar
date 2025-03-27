(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_contacts_d3c9d000._.js", {

"[project]/src/app/contacts/contacts.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "activeTab": "contacts-module-scss-module__Opcxya__activeTab",
  "contactRow": "contacts-module-scss-module__Opcxya__contactRow",
  "contactsContainer": "contacts-module-scss-module__Opcxya__contactsContainer",
  "contactsTable": "contacts-module-scss-module__Opcxya__contactsTable",
  "emailLink": "contacts-module-scss-module__Opcxya__emailLink",
  "noContacts": "contacts-module-scss-module__Opcxya__noContacts",
  "phoneLink": "contacts-module-scss-module__Opcxya__phoneLink",
  "showMoreButton": "contacts-module-scss-module__Opcxya__showMoreButton",
  "showMoreContainer": "contacts-module-scss-module__Opcxya__showMoreContainer",
  "sortIcon": "contacts-module-scss-module__Opcxya__sortIcon",
  "sortableHeader": "contacts-module-scss-module__Opcxya__sortableHeader",
  "tabButton": "contacts-module-scss-module__Opcxya__tabButton",
  "tableContainer": "contacts-module-scss-module__Opcxya__tableContainer",
  "tabsContainer": "contacts-module-scss-module__Opcxya__tabsContainer",
  "title": "contacts-module-scss-module__Opcxya__title",
});
}}),
"[project]/src/app/contacts/client.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContactsClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/contacts/contacts.module.scss.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ContactsClient({ contacts }) {
    _s();
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('name');
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('asc');
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    // Используем useMemo для сортировки контактов
    const sortedContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContactsClient.useMemo[sortedContacts]": ()=>{
            return [
                ...contacts
            ].sort({
                "ContactsClient.useMemo[sortedContacts]": (a, b)=>{
                    const fieldA = a[sortField] || '';
                    const fieldB = b[sortField] || '';
                    if (sortDirection === 'asc') {
                        return fieldA.localeCompare(fieldB);
                    } else {
                        return fieldB.localeCompare(fieldA);
                    }
                }
            }["ContactsClient.useMemo[sortedContacts]"]);
        }
    }["ContactsClient.useMemo[sortedContacts]"], [
        contacts,
        sortField,
        sortDirection
    ]);
    // Используем useMemo для видимых контактов
    const visibleContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContactsClient.useMemo[visibleContacts]": ()=>{
            return sortedContacts.slice(0, displayCount);
        }
    }["ContactsClient.useMemo[visibleContacts]"], [
        sortedContacts,
        displayCount
    ]);
    // Обработчик клика по заголовку для сортировки
    const handleSort = (field)=>{
        if (field === sortField) {
            // Если поле то же, меняем направление сортировки
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            // Если поле новое, устанавливаем его и сортируем по возрастанию
            setSortField(field);
            setSortDirection('asc');
        }
    };
    // Обработчик кнопки "Показать больше"
    const handleShowMore = ()=>{
        setDisplayCount((prev)=>prev + 10);
    };
    // Получение иконки сортировки
    const getSortIcon = (field)=>{
        if (field !== sortField) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortIcon,
            children: sortDirection === 'asc' ? '▲' : '▼'
        }, void 0, false, {
            fileName: "[project]/src/app/contacts/client.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactsContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Контактная информация"
            }, void 0, false, {
                fileName: "[project]/src/app/contacts/client.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactsTable,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('name'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Имя ",
                                            getSortIcon('name')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contacts/client.tsx",
                                        lineNumber: 74,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('job_title'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Должность ",
                                            getSortIcon('job_title')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contacts/client.tsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('v_phonenumber'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Внутренний номер ",
                                            getSortIcon('v_phonenumber')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contacts/client.tsx",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('short_phonenumber'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Короткий номер ",
                                            getSortIcon('short_phonenumber')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contacts/client.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('mobile_phone'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Мобильный телефон ",
                                            getSortIcon('mobile_phone')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contacts/client.tsx",
                                        lineNumber: 86,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('email'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Email ",
                                            getSortIcon('email')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contacts/client.tsx",
                                        lineNumber: 89,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contacts/client.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/contacts/client.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: visibleContacts.map((contact, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: contact.name || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/client.tsx",
                                            lineNumber: 97,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: contact.job_title || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/client.tsx",
                                            lineNumber: 98,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${contact.v_phonenumber}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phoneLink,
                                                children: contact.v_phonenumber || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contacts/client.tsx",
                                                lineNumber: 100,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/client.tsx",
                                            lineNumber: 99,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${contact.short_phonenumber}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phoneLink,
                                                children: contact.short_phonenumber || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contacts/client.tsx",
                                                lineNumber: 105,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/client.tsx",
                                            lineNumber: 104,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${contact.mobile_phone}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phoneLink,
                                                children: contact.mobile_phone || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contacts/client.tsx",
                                                lineNumber: 110,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/client.tsx",
                                            lineNumber: 109,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${contact.email}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emailLink,
                                                children: contact.email || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contacts/client.tsx",
                                                lineNumber: 115,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/client.tsx",
                                            lineNumber: 114,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/contacts/client.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/contacts/client.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/contacts/client.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/contacts/client.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            visibleContacts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noContacts,
                children: "Контакты не найдены"
            }, void 0, false, {
                fileName: "[project]/src/app/contacts/client.tsx",
                lineNumber: 126,
                columnNumber: 17
            }, this),
            visibleContacts.length > 0 && visibleContacts.length < sortedContacts.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].showMoreContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].showMoreButton,
                    onClick: handleShowMore,
                    children: "Показать больше"
                }, void 0, false, {
                    fileName: "[project]/src/app/contacts/client.tsx",
                    lineNumber: 133,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/contacts/client.tsx",
                lineNumber: 132,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/contacts/client.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_s(ContactsClient, "cYI8dSRKMxeCPeCtjHfZ51nw35Q=");
_c = ContactsClient;
var _c;
__turbopack_context__.k.register(_c, "ContactsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_contacts_d3c9d000._.js.map