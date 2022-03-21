import React, { Component } from 'react'
import ForViewPage from '../../components/ForViewPage'
import { GENDERS, ROLES } from '../../constants/'
import apiRoutes from '../../routes/apis'
import { taiKhoan } from '../../entities'

class TaiKhoanForView extends Component {
   ///// METHODS FOR RENDERING UI /////

   renderComponent = () => {
      const settings = {
         entity: taiKhoan,
         api: apiRoutes.taiKhoan,
         fields: [
            {
               label: 'Mã tài khoản',
               propForValue: 'MaTaiKhoan',
               type: 'input'
            },
            {
               label: 'Tên đăng nhập',
               propForValue: 'TenDangNhap',
               type: 'input'
            },
            {
               label: 'Họ và tên',
               propForValue: 'HoVaTen',
               type: 'input'
            },
            {
               label: 'Giới tính',
               propForValue: 'GioiTinh',
               type: 'select',
               values: GENDERS,
               propForItemValue: 'value',
               propForItemText: 'label'
            },
            {
               label: 'Ngày sinh',
               propForValue: 'NgaySinh',
               type: 'date'
            },
            {
               label: 'Số điện thoại',
               propForValue: 'SoDienThoai',
               type: 'input'
            },
            {
               label: 'Địa chỉ email',
               propForValue: 'Email',
               type: 'email'
            },
            {
               label: 'Địa chỉ',
               propForValue: 'DiaChi',
               type: 'textarea'
            },
            {
               label: 'Phân quyền',
               propForValue: 'PhanQuyen',
               type: 'select',
               values: ROLES,
               propForItemValue: 'value',
               propForItemText: 'label'
            }
         ]
      }

      return <ForViewPage settings={settings} />
   }

   render() {
      const { renderComponent } = this

      return renderComponent()
   }
}

export default TaiKhoanForView
