import { useState } from "react";

const PrayerRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    request: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    setSubmitted(true);

    // Reinicia el formulario después de enviar (opcional)
    setFormData({ name: "", email: "", phone: "", request: "" });
  };

  return (
    <section className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-white py-16 px-8 sm:py-20 sm:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Título de la sección */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
          Queremos Orar por Ti
        </h2>
        <p className="text-lg sm:text-xl text-center text-gray-600 mb-6">
          Cuéntanos tu necesidad o petición, queremos acompañarte en oración y apoyarte.
        </p>

        {submitted ? (
          <div className="text-center text-green-600 font-semibold">
            ¡Gracias por compartir tu petición! Nos pondremos en contacto contigo pronto.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Escribe tu nombre completo"
              />
            </div>

            {/* Correo */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Tu número de contacto"
              />
            </div>

            {/* Petición */}
            <div>
              <label
                htmlFor="request"
                className="block text-sm font-medium text-gray-700"
              >
                Petición de Oración
              </label>
              <textarea
                id="request"
                name="request"
                value={formData.request}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Escribe tu petición aquí"
                rows="4"
              ></textarea>
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-gray-900 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Enviar Petición
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default PrayerRequestForm;
