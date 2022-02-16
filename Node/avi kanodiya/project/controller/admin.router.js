// const AdminBro = require('admin-bro')
// // const AdminBroExpress = require('@admin-bro/express')
// const AdminBroMongoose = require("@admin-bro/mongoose")
// const argon2 = require("argon2")
// const AdminBroExpressjs = require("admin-bro-expressjs")
// const mongoose = require('mongoose')
// const mongoosedb = require('../model/products.model')
// AdminBro.registerAdapter(AdminBroMongoose)
// const { Admin } = require('../model/admin.model')
// const bcrypt = require('bcryptjs')
// const config = require('../authorization/config.json')
// const { Product } = require('../model/products.model')

// // const AdminBroOptions = {
// //     resources:
// //         [Product, {
// //             resource: Admin,
// //             options: {
// //                 properties: {
// //                     encryptedPassword: { isVisible: false },
// //                     password: {
// //                         type: 'string',
// //                         isVisible: {
// //                             list: false, edit: true, filter: false, show: false,
// //                         },
// //                     },
// //                 },
// //                 actions: {
// //                     new: {
// //                         before: async (request) => {
// //                             if (request.payload.record.password) {
// //                                 request.payload.record = {
// //                                     ...request.payload.record,
// //                                     encryptedPassword: await bcrypt.hash(request.payload.record.password, 10),
// //                                     password: undefined,
// //                                 }
// //                             }
// //                             return request
// //                         },
// //                     },
// //                     edit: { isAccessible: true },
// //                     delete: { isAccessible: true },
// //                     new: { isAccessible: true },
// //                 }
// //             }
// //         }],
// // }
// const AdminBroOptions = {
//     databases: mongoose
// }

// const adminBro = new AdminBro(AdminBroOptions)

// // const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
// //     authenticate: async (email, password) => {
// //         const user = await Admin.findOne({ email })
// //         if (user) {
// //             if (bcrypt.compareSync(password, user.hash)) {
// //                 return user
// //             }
// //         }
// //         return false
// //     },
// //     cookiePassword: 'session Key',
// // })

// const router = AdminBroExpressjs.buildRouter(adminBro)

// // const router = AdminBroExpress.buildRouter(adminBro)

// module.exports = router;

const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const mongoose = require('mongoose')
const express = require('express')
const { Admin } = require('../model/admin.model')
const { Order } = require('../model/order.model')
const { User } = require('../model/users.model')
const { Product } = require('../model/products.model')
const { Category } = require('../model/category.model')
const { SubCategory } = require('../model/subCategory.model')
const app = express()
const AdminJSMongoose = require('@adminjs/mongoose')

AdminJS.registerAdapter(AdminJSMongoose)

const adminjsOptions = {
    resources: [Admin, User, Product, Category, SubCategory],
}
const adminJs = new AdminJS(adminjsOptions)

const router = AdminJSExpress.buildRouter(adminJs)

module.exports = router 