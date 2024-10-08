import React, { Component } from 'react'
import ForCreatePage from '../../components/ForCreatePage'
import { sanBong } from '../../entities'
import apiRoutes from '../../routes/apis'

class SanBongForCreate extends Component {
   ///// METHODS FOR RENDERING UI /////

   renderComponent = () => {
      const settings = {
         entity: sanBong,
         api: apiRoutes.sanBong,
         fields: [
            {
               label: 'Tên sân bóng',
               propForValue: 'TenSanBong',
               placeholder: 'Nhập tên của sân bóng',
               type: 'input',
               validators: [
                  {
                     rule: 'notEmpty',
                     message:
                        'Tên của sân bóng là thông tin bắt buộc và không được để trống!'
                  }
               ]
            },
            {
               label: 'Chiều dài (m)',
               propForValue: 'ChieuDai',
               placeholder: 'Nhập chiều dài của sân bóng',
               type: 'number',
               validators: [
                  {
                     rule: 'isNumeric',
                     message:
                        'Chiều dài của sân bóng chỉ được bao gồm các chữ số (0-9)!'
                  }
               ]
            },
            {
               label: 'Chiều rộng (m)',
               propForValue: 'ChieuRong',
               placeholder: 'Nhập chiều rộng của sân bóng',
               type: 'number',
               validators: [
                  {
                     rule: 'isNumeric',
                     message:
                        'Chiều rộng của sân bóng chỉ được bao gồm các chữ số (0-9)!'
                  }
               ]
            },
            {
               label: 'Ghi chú',
               propForValue: 'GhiChu',
               placeholder: 'Nhập ghi chú về sân bóng (nếu có)',
               type: 'textarea'
            }
         ]
      }

      return <ForCreatePage settings={settings} />
   }

   render() {
      const { renderComponent } = this

      return renderComponent()
   }
}

export default SanBongForCreate
