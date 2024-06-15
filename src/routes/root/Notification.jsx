import { useState } from 'react';
import Navbar from '../../core/components/Navbar';
import 'react-quill/dist/quill.snow.css';
import SimpleInput from "../../core/components/form/SimpleInput.jsx";

import subscriptionService from "../../company/services/subscription.js";
import SimpleTextarea from "../../core/components/form/SimpleTextarea.jsx";

function Contact() {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  const sendEmails = async () => {
    setIsLoading(true);

    await subscriptionService.sendSubscriptionEmails(subject, content);

    setIsLoading(false);
    setSubject('');
    setContent('');
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-Primary to-Bee pt-20">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 max-w-lg mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">Pošaljite obavijest</h1>
          <p className="text-gray-600 text-center mb-8">
            Obavijestite ljude koji vas prate o novim eventovima, pozicijama, super nagradama ili ostalim zabavnim informacijama
          </p>
          <div className="mb-4">
            <SimpleInput value={subject} label="Predmet email-a" placeholder="Unesite predmet email-a" type="email" id="email" onChange={setSubject} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Poruka</label>
            <SimpleTextarea
              value={content}
              onChange={setContent}
            />
          </div>
          <div className="text-center">
            <button
                onClick={sendEmails}
                disabled={isLoading}
                className={`text-white text-base lg:text-md px-6 py-2 font-semibold rounded-md flex gap-3 items-center bg-Primary`}
            >
              {
                  isLoading &&
                  <div
                      className="border-PrimaryLight h-6 w-6 animate-spin rounded-full border-4 border-t-white"/>
              }
              Pošalji
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
