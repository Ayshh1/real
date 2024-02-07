
import React from 'react';

export default function About() {
  const backgroundStyle = {
    backgroundImage: 'url("https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg#keepProtocol")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='min-h-screen flex items-center' style={backgroundStyle}>
      <div className='bg-opacity-75 bg-white p-8 rounded-md mx-auto max-w-6xl'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Us</h1>
        <p className='mb-4 text-slate-700'>
          Welcome to MetroMansion Realty, a distinguished real estate destination committed to turning your housing dreams into tangible, vibrant realities. At MetroMansion, we understand that the search for the perfect home extends far beyond mere transactions; it's about finding a space where life unfolds seamlessly, and every corner holds the potential for cherished memories.
        </p>
        <h2 className='text-3xl font-bold mb-4 text-slate-800'>Our Vision</h2>
        <p className='mb-4 text-slate-700'>
          MetroMansion Realty envisions a world where the process of finding and acquiring a home is as enriching and rewarding as the life you’ll lead within its walls. We strive to redefine real estate experiences by seamlessly blending innovation, integrity, and personalized service.
        </p>
        <h2 className='text-3xl font-bold mb-4 text-slate-800'>Our Mission</h2>
        <p className='mb-4 text-slate-700'>
          Our mission is simple yet profound: to be the catalyst in your journey towards finding not just a property, but a place you can truly call home. We are committed to providing unparalleled service, fostering transparent transactions, and curating a diverse portfolio of properties that cater to your unique lifestyle and aspirations.
        </p>
        <h2 className='text-3xl font-bold mb-4 text-slate-800'>Contact Us</h2>
        <p className='mb-4 text-slate-700'>
          Embark on your real estate journey with MetroMansion Realty. Contact our team of dedicated professionals who are ready to assist you in finding the perfect property or selling your current home. Your dream space awaits, and we're here to help you unlock its doors.

          Discover MetroMansion Realty - Where Dreams Find Their Address.
        </p>
      </div>
    </div>
  );
}
