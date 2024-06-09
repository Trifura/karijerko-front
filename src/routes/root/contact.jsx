import React from 'react';
import Navbar from '../../core/components/Navbar';

function Contact() {
  return (
      <>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-Primary to-Bee">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 max-w-lg mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">Kontaktirajte nas</h1>
        <p className="text-gray-600 text-center mb-8">
          Ako imate bilo kakve prijedloge, greške ili želite surađivati s nama, slobodno nas kontaktirajte na sljedeći mail: 
          <a href="mailto:hello@karijerko.com" className="text-blue-500 font-semibold"> hello@karijerko.com</a>
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Ime</label>
            <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" placeholder="Vaše ime"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" placeholder="Vaš email"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Poruka</label>
            <textarea className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" placeholder="Vaša poruka" rows="5"></textarea>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
