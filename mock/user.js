const qs = require('qs')
const Mock = require('mockjs')
const config = require('../src/utils/config')

const { apiPrefix } = config

let usersListData = Mock.mock({
  'data|80-100': [
    {
      id: '@id',
      org_name: '@name',
      org_type: '1',
      phone: /^1[34578]\d{9}$/,
      lnglatxy: '45.2525,5531.5454',
      status_cd: '@boolean',
      update_date: '@datetime',
      address: '@county(true)',
      logo () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.org_name.substr(0, 1))
      },
    },
  ],
})

let database = usersListData.data
const adminUsers = [
  {
    id: 0,
    account: '888888',
    password: '666666',
  }, {
    id: 1,
    account: 'admin',
    password: 'admin',
  }
]
module.exports = {
  [`POST ${apiPrefix}/login`] (req, res) {
    const { account, password } = req.body
    const user = adminUsers.filter(item => item.account === account)
    if (user.length > 0 && user[0].password === password) {
      const now = new Date()
      now.setDate(now.getDate() + 1)
      res.cookie('token', JSON.stringify({ id: user[0].id, deadline: now.getTime() }), {
        maxAge: 900000,
        httpOnly: true,
      })
      res.json({ success: true, message: 'Ok' })
    } else {
      res.json({ success: false, message: '账号或密码错误' })
    }
  },
  [`GET ${apiPrefix}/users`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            if (key === 'address') {
              return other[key].every(iitem => item[key].indexOf(iitem) > -1)
            } else if (key === 'update_date') {
              const start = new Date(other[key][0]).getTime()
              const end = new Date(other[key][1]).getTime()
              const now = new Date(item[key]).getTime()

              if (start && end) {
                return now >= start && now <= end
              }
              return true
            }
            return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          }
          return true
        })
      }
    }

    
    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },


}
