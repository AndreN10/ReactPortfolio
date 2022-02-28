import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { AppWrap } from '../../wrapper'

const data = [

  {
    avatar: AVT2,
    name: 'Nguyễn Hoàng Nhật Minh - Embedded Engineer',
    review: 'Duy là một teammate luôn mang đến cho bạn sự an tâm, sự tin tưởng nhờ vào khả năng tự tìm tòi và ý chí không bao giờ bỏ cuộc. Bên cạnh đó, Duy luôn sẵn sàng chia sẻ kiến thức, đưa ra những sự góp ý mang tính tích cực để giúp cho người đồng hành cùng anh ấy cũng có được tinh thần thoải mái để có thể giải quyết được những khó khăn khi gặp phải. Chính những đặc điểm ấy đã giúp a ấy tạo nên được những sản phẩm dù chỉ mang tính chất học tập nhưng vẫn luôn có nhiều tính năng đặc sắc như những sản phẩm trên thị trường. Ngoài ra, Duy còn có khả năng làm việc độc lập rất tốt, khả năng đọc hiểu nhanh giúp a ấy giải quyết những khó khăn trong quá trình làm việc khá thuận lợi. Điều đó đã được thể hiện ở những sản phẩm được trình bày như bên trên. Những sản phẩm được Duy thực hiện luôn mang tính ứng dụng cao.'
  },
  
  {
    avatar: AVT1,
    name: 'Bùi Lê Chí Nhân - Front End Web Developer',
    review: 'Trang khá là đủ chức năng cho  người dùng tương tác và up trạng thái.  Sẽ tuyệt vời hơn nếu trang được chăm chuốt cho bắt mắt người dùng.'
  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials