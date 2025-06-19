import React from 'react'

const Biography = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="Zee Care Hospital" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Zee Care Hospital is a trusted name in healthcare, committed to providing compassionate, high-quality medical services to our community. With state-of-the-art technology and a dedicated team of professionals, we ensure that every patient receives the best possible care.
        </p>
        <p>
          Established with the mission to bring affordable and advanced healthcare to everyone, Zee Care Hospital has grown to become a beacon of hope for thousands of patients.
        </p>
        <p>
          Our hospital offers a wide range of services including cardiology, orthopedics, general surgery, pediatrics, and emergency care—catering to people of all ages and needs.
        </p>
        <p>
          Our team of doctors, nurses, and support staff are not only skilled and experienced, but also deeply committed to treating every patient with empathy and respect. We continuously strive to improve lives through innovation and dedication.
        </p>
        <p>
          Zee Care Hospital believes in transparency, integrity, and excellence. We are here to support your journey to better health, every step of the way.
        </p>
        <p>
          Your health. Our mission.
        </p>
      </div>
    </div>
  )
}

export default Biography
