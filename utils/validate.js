const Ajv = require('ajv')

const ajv = new Ajv({ allErrors: true })

/**
 * 转换指定的数据格式
 *
 * @param {*} validField 需要校验的字段
 * @param {*} rules 字段对应的校验规则
 * @param {*} data 原始数据
 */
function transform (validField, rules, data) {
    if(rules.type === 'string') {
        data.map((item) => {
            item[validField] = `${item[validField]}`
            return item
        })
    }

    if(rules.type == null) {
        data.map((item) => {
            item[validField] = '-'
            return item
        })
    }
}

/**
 * 根据 schema 规则校验数据格式
 *
 * @param {*} schema 数据规则
 * @param {*} data 原始数据
 * @returns
 */
function validate (schema, data) {
    const valid = ajv.validate(schema, data)
    if (!valid) {
        for (const item of ajv.errors) {
            const { dataPath, params } = item
            const [_, field] = dataPath.split('.')
            transform(field, params, data)
        }
        
    }
    
    return data
}

module.exports = validate