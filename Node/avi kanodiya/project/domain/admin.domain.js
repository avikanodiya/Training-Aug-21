const { Category } = require('../model/category.model')
const { SubCategory } = require('../model/subCategory.model')

const addCategory = async (req, res, next) => {
    const { categoryId, categoryname } = req.body
    const category = new Category(req.body)
    const cat = await Category.findOne({ categoryId: categoryId })
    if (cat === null) {
        await category.save()
        res.json({
            message: 'category added successfully!!'
        })
    } else {
        res.json({
            message: 'category already added'
        })
    }
    console.log(cat)

}

const addSubcategory = async (req, res, next) => {
    const { categoryId, subcategoryId, subCategoryname } = req.body
    const subcategory = new SubCategory(req.body)
    const sub = await SubCategory.findOne({ subcategoryId: subcategoryId })
    console.log(sub);
    if (sub === null) {
        await subcategory.save()
        res.json({
            message: 'subcategory added successfully!!'
        })
    } else {
        res.json({
            message: 'subcategory already added'
        })
    }
}

module.exports = { addCategory, addSubcategory }