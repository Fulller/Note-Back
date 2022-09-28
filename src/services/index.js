// let db = require('../config/db')
const User = require('../modules/User')
const Note = require('../modules/Note')

let register = (body) => {
    return new Promise( async (resole, reject) => {
        let result = {}
        try {
            await User.create({
                userName: body.userName,
                firstName: body.firstName,
                lastName: body.lastName,
                password: body.password,
            })
            result.errCode = 0
            result.massage = "Create Account Success"
            resole(result)
        } catch (e) {
            result.errCode = 1
            result.massage = "Account creation failed"
            reject(e)
        }
    })
}
let login = (body) => {
    return new Promise( async (resole, reject) => {
        let result = {}
        try {
            let data = await User.findOne({ userName: body.userName })
            if (data) {
                if (data.password == body.password) {
                    result.errCode = 0
                    result.massage = "Login successful"
                    result.user = data
                } else {
                    result.errCode = 2
                    result.massage = "Incorrect password"
                }
            } else {
                result.errCode = 2
                result.massage = "User not found"
            }
            resole(result)
        } catch (e) {
            result.errCode = 2
            result.massage = "Login unsuccessful"
            reject(result)
        }
    })
}
let allnotes = (userName) => {
    return new Promise( async (resole, reject) => {
        try {
            let data = await Note.findOne({_id: '63343f0f1bbac084e225820e' }).exec()
            resole(data)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    allnotes,
    register,
    login
}