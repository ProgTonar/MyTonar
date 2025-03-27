(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_a06c2af9._.js", {

"[project]/src/app/dashboard/contacts/contacts.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "accessDenied": "contacts-module-scss-module__L1VaGq__accessDenied",
  "accessInfo": "contacts-module-scss-module__L1VaGq__accessInfo",
  "actionButton": "contacts-module-scss-module__L1VaGq__actionButton",
  "actionsCell": "contacts-module-scss-module__L1VaGq__actionsCell",
  "addButton": "contacts-module-scss-module__L1VaGq__addButton",
  "adminActions": "contacts-module-scss-module__L1VaGq__adminActions",
  "button-13-medium": "contacts-module-scss-module__L1VaGq__button-13-medium",
  "button-14-medium": "contacts-module-scss-module__L1VaGq__button-14-medium",
  "button-14-regular": "contacts-module-scss-module__L1VaGq__button-14-regular",
  "button-16-medium": "contacts-module-scss-module__L1VaGq__button-16-medium",
  "contactRow": "contacts-module-scss-module__L1VaGq__contactRow",
  "contactsTable": "contacts-module-scss-module__L1VaGq__contactsTable",
  "container": "contacts-module-scss-module__L1VaGq__container",
  "deleteButton": "contacts-module-scss-module__L1VaGq__deleteButton",
  "description-11-medium": "contacts-module-scss-module__L1VaGq__description-11-medium",
  "description-13-regular": "contacts-module-scss-module__L1VaGq__description-13-regular",
  "download-footer-13": "contacts-module-scss-module__L1VaGq__download-footer-13",
  "emailLink": "contacts-module-scss-module__L1VaGq__emailLink",
  "head-1": "contacts-module-scss-module__L1VaGq__head-1",
  "loading": "contacts-module-scss-module__L1VaGq__loading",
  "loadingOverlay": "contacts-module-scss-module__L1VaGq__loadingOverlay",
  "noContacts": "contacts-module-scss-module__L1VaGq__noContacts",
  "pagination-16-regular": "contacts-module-scss-module__L1VaGq__pagination-16-regular",
  "phoneLink": "contacts-module-scss-module__L1VaGq__phoneLink",
  "plates-14-medium": "contacts-module-scss-module__L1VaGq__plates-14-medium",
  "plates-14-regular": "contacts-module-scss-module__L1VaGq__plates-14-regular",
  "showMoreButton": "contacts-module-scss-module__L1VaGq__showMoreButton",
  "showMoreContainer": "contacts-module-scss-module__L1VaGq__showMoreContainer",
  "sortIcon": "contacts-module-scss-module__L1VaGq__sortIcon",
  "sortableHeader": "contacts-module-scss-module__L1VaGq__sortableHeader",
  "table-header-18": "contacts-module-scss-module__L1VaGq__table-header-18",
  "table-header-20": "contacts-module-scss-module__L1VaGq__table-header-20",
  "tableContainer": "contacts-module-scss-module__L1VaGq__tableContainer",
  "text": "contacts-module-scss-module__L1VaGq__text",
  "text-2": "contacts-module-scss-module__L1VaGq__text-2",
  "title": "contacts-module-scss-module__L1VaGq__title",
  "title-1": "contacts-module-scss-module__L1VaGq__title-1",
  "title-2": "contacts-module-scss-module__L1VaGq__title-2",
  "title-3": "contacts-module-scss-module__L1VaGq__title-3",
  "title-4": "contacts-module-scss-module__L1VaGq__title-4",
  "title-5": "contacts-module-scss-module__L1VaGq__title-5",
  "title-6": "contacts-module-scss-module__L1VaGq__title-6",
});
}}),
"[project]/src/hooks/useUserPermissions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useUserPermissions": (()=>useUserPermissions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useUserPermissions(resource) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasAccess: false,
        message: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserPermissions.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const checkPermissions = {
                "useUserPermissions.useEffect.checkPermissions": async ()=>{
                    try {
                        const token = localStorage.getItem('access_token');
                        if (!token) {
                            setState({
                                isLoading: false,
                                hasAccess: false,
                                message: 'Необходима авторизация'
                            });
                            return;
                        }
                        // Запрос к API сервера для проверки прав доступа
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:9091/api/${resource}`, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (response.data && response.data.message === "У пользователя не хватает прав доступа") {
                            setState({
                                isLoading: false,
                                hasAccess: false,
                                message: response.data.message
                            });
                        } else {
                            setState({
                                isLoading: false,
                                hasAccess: true,
                                message: null
                            });
                        }
                    } catch (error) {
                        console.error('Ошибка при проверке прав доступа:', error);
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error) && error.response?.data?.message) {
                            setState({
                                isLoading: false,
                                hasAccess: false,
                                message: error.response.data.message
                            });
                        } else {
                            setState({
                                isLoading: false,
                                hasAccess: false,
                                message: error instanceof Error ? error.message : 'Произошла ошибка при проверке прав'
                            });
                        }
                    }
                }
            }["useUserPermissions.useEffect.checkPermissions"];
            checkPermissions();
        }
    }["useUserPermissions.useEffect"], [
        resource
    ]);
    return state;
}
_s(useUserPermissions, "H1+ayJhTfVx3M1X4P9m8dN/GJ+o=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/contacts/client.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContactsClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/contacts/contacts.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserPermissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ContactsClient({ contacts: initialContacts }) {
    _s();
    const [contacts, setContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContacts || []);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isLoading, hasAccess, message } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPermissions"])('contacts');
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('name');
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('asc');
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    // Обновление контактов при изменении initialContacts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactsClient.useEffect": ()=>{
            if (initialContacts) {
                setContacts(initialContacts);
            }
        }
    }["ContactsClient.useEffect"], [
        initialContacts
    ]);
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
    const visibleContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContactsClient.useMemo[visibleContacts]": ()=>{
            return sortedContacts.slice(0, displayCount);
        }
    }["ContactsClient.useMemo[visibleContacts]"], [
        sortedContacts,
        displayCount
    ]);
    const handleSort = (field)=>{
        if (field === sortField) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };
    const handleShowMore = ()=>{
        setDisplayCount((prev)=>prev + 10);
    };
    const getSortIcon = (field)=>{
        if (field !== sortField) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortIcon,
            children: sortDirection === 'asc' ? '▲' : '▼'
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
            lineNumber: 70,
            columnNumber: 13
        }, this);
    };
    const handleEdit = async (contact)=>{
        try {
            // Здесь будет логика редактирования
            // Например:
            // await axios.put(`/api/contacts/${contact.id}`, updatedContact);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Редактирование контакта: ${contact.name}`);
        // После успешного редактирования можно обновить список контактов
        // const updatedContacts = await axios.get('/api/contacts');
        // setContacts(updatedContacts.data);
        } catch (error) {
            console.error('Ошибка при редактировании контакта:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Не удалось отредактировать контакт');
        }
    };
    const handleDelete = async (contact)=>{
        try {
            setLoading(true);
            // Здесь будет логика удаления
            // Например:
            // await axios.delete(`/api/contacts/${contact.id}`);
            // Имитация удаления для примера
            await new Promise((resolve)=>setTimeout(resolve, 500));
            // Обновляем локальный список контактов после удаления
            setContacts((prevContacts)=>prevContacts.filter((c)=>c.id !== contact.id));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Контакт удален: ${contact.name}`);
        } catch (error) {
            console.error('Ошибка при удалении контакта:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Не удалось удалить контакт');
        } finally{
            setLoading(false);
        }
    };
    const handleAdd = async ()=>{
        try {
            // Здесь будет логика добавления
            // Например:
            // const newContact = { name: 'Новый контакт', ... };
            // await axios.post('/api/contacts', newContact);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info('Добавление нового контакта');
        // После успешного добавления можно обновить список контактов
        // const updatedContacts = await axios.get('/api/contacts');
        // setContacts(updatedContacts.data);
        } catch (error) {
            console.error('Ошибка при добавлении контакта:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Не удалось добавить контакт');
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
            children: "Проверка прав доступа..."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
            lineNumber: 135,
            columnNumber: 16
        }, this);
    }
    if (!hasAccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accessDenied,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Доступ ограничен"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: message || 'У вас нет прав для управления контактами.'
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                    lineNumber: 142,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accessInfo,
                    children: "Если вам необходим доступ к этому разделу, обратитесь к администратору системы."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
            lineNumber: 140,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Управление телефонной книгой"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminActions,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                    onClick: handleAdd,
                    disabled: loading,
                    children: "Добавить контакт"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                    lineNumber: 154,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingOverlay,
                children: "Загрузка..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                lineNumber: 163,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactsTable,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('name'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Имя ",
                                            getSortIcon('name')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                        lineNumber: 169,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('job_title'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Должность ",
                                            getSortIcon('job_title')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                        lineNumber: 172,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('v_phonenumber'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Внутренний номер ",
                                            getSortIcon('v_phonenumber')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                        lineNumber: 175,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('short_phonenumber'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Короткий номер ",
                                            getSortIcon('short_phonenumber')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                        lineNumber: 178,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('mobile_phone'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Мобильный телефон ",
                                            getSortIcon('mobile_phone')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                        lineNumber: 181,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('email'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortableHeader,
                                        children: [
                                            "Email ",
                                            getSortIcon('email')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                        lineNumber: 184,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Действия"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                        lineNumber: 187,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                lineNumber: 168,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                            lineNumber: 167,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: visibleContacts.map((contact, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: contact.name || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                            lineNumber: 193,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: contact.job_title || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                            lineNumber: 194,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${contact.v_phonenumber}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phoneLink,
                                                children: contact.v_phonenumber || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                                lineNumber: 196,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                            lineNumber: 195,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${contact.short_phonenumber}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phoneLink,
                                                children: contact.short_phonenumber || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                                lineNumber: 201,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                            lineNumber: 200,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${contact.mobile_phone}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phoneLink,
                                                children: contact.mobile_phone || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                                lineNumber: 206,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                            lineNumber: 205,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${contact.email}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emailLink,
                                                children: contact.email || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                                lineNumber: 211,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                            lineNumber: 210,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionsCell,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                                    onClick: ()=>handleEdit(contact),
                                                    disabled: loading,
                                                    children: "Редактировать"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton}`,
                                                    onClick: ()=>handleDelete(contact),
                                                    disabled: loading,
                                                    children: "Удалить"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                            lineNumber: 215,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                                    lineNumber: 192,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                            lineNumber: 190,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                    lineNumber: 166,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, this),
            visibleContacts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noContacts,
                children: "Контакты не найдены"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                lineNumber: 238,
                columnNumber: 17
            }, this),
            visibleContacts.length > 0 && visibleContacts.length < sortedContacts.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].showMoreContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$contacts$2f$contacts$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].showMoreButton,
                    onClick: handleShowMore,
                    disabled: loading,
                    children: "Показать больше"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                    lineNumber: 245,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/contacts/client.tsx",
                lineNumber: 244,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/contacts/client.tsx",
        lineNumber: 149,
        columnNumber: 9
    }, this);
}
_s(ContactsClient, "NJ+JuSY7ax7hw2Bnqf2JR8BMFp0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPermissions"]
    ];
});
_c = ContactsClient;
var _c;
__turbopack_context__.k.register(_c, "ContactsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a06c2af9._.js.map