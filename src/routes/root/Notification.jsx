import React, { useState } from 'react';
import Navbar from '../../core/components/Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

function Contact() {
  const [message, setMessage] = useState('');

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-Primary to-Bee">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 max-w-lg mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">Pošaljite obavijest</h1>
          <p className="text-gray-600 text-center mb-8">
            Obavijestite ljude koji vas prate o novim eventovima, pozicijama, super nagradama ili ostalim zabavnim informacijama
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Naslov</label>
              <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" placeholder="Vaš email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Poruka</label>
              <ReactQuill
                theme="snow"
                value={message}
                onChange={setMessage}
                className="h-[300px] border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-center">
              <button className="mt-16 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                Pošalji
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
