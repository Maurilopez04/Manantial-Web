import { useState } from 'react';

export default function FormContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      console.log('Form data:', formData);
    } else {
      alert('You must agree to the privacy policy before submitting.');
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contactanos
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Dejanos tu mensaje y te responderemos en la brevedad posible!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-5xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
              Nombre
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 focus:border-blue-800 focus:ring-blue-800"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 focus:border-blue-800 focus:ring-blue-800"
            />
          </div>
          
          <div className="">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Correo Electronico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 focus:border-blue-800 focus:ring-blue-800"
            />
          </div>
          <div className="">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900">
              Numero de telefono
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 focus:border-blue-800 focus:ring-blue-800"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 focus:border-blue-800 focus:ring-blue-800"
            ></textarea>
          </div>
          <div className="flex items-center sm:col-span-2">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`flex h-6 w-10 items-center rounded-full p-1 ring-1 ring-gray-300 ${
                agreed ? 'bg-blue-800' : 'bg-gray-200'
              } transition-all duration-200`}
            >
              <span
                className={`h-4 w-4 transform rounded-full bg-white shadow ${
                  agreed ? 'translate-x-4' : ''
                } transition-all duration-200`}
              />
            </button>
            <label htmlFor="agreed" className="ml-3 text-sm text-gray-600">
              Acepto las{' '}
              <a href="#" className="font-semibold text-blue-800 hover:underline">
                Politicas de privacidad
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:ring-2 focus:ring-blue-800"
          >
            Enviar
          </button>
        </div>
      </form>
      {submitted && (
        <div className="mt-4 rounded-md bg-green-100 p-4 text-green-700">
          Muchas gracias, recibimos tu mensaje, te responderemos en la brevedad posible.
        </div>
      )}
    </div>
  );
}
