import getUsersList, {swGetUser} from './login-get.route'
import createTheUser, {swPostUser} from './login-post.route'

const express = require('express')
// here the our swagger info
export const swLoginRouter = {
  "/login": {
    "get": {
        ...swGetUser
    },
    "post": {
        ...swPostUser
    }
  }
}
// here the routes
const router = express()
router.get('/', function (req, res) {
  getUsersList(req, res)
})

router.post('/', function (req, res) {
  createTheUser(req, res)
})

export default router