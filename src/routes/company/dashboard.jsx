import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerCompany } from '../../auth/store/actions'; // Adjust the import path as needed
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import Navbar from '../../core/components/Navbar';

function Dashboard() {
  const [formData, setFormData] = useState({
    profilePicture: '',
    name: '',
    tagline: '',
    companySize: {
      nameHr: ''
    },
    headquarters: '',
    industry: {
      nameHr: ''
    },
    specialties: '',
    website: '',
    phone: '',
    description: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [mainKey, subKey] = name.split('.');
      setFormData({
        ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      description: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the registerCompany action
    dispatch(registerCompany(formData))
      .unwrap()
      .then((response) => {
        // Handle success
        console.log('Company registered successfully', response);
      })
      .catch((error) => {
        // Handle error
        console.error('Error registering company', error);
      });
  };

  return (
      <>
      <Navbar></Navbar>
      <div className="mt-20 p-8">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="profilePicture" className="font-medium">Profilna Slika</label>
          <input type="text" id="profilePicture" name="profilePicture" className="border p-2 rounded" placeholder="URL profilne slike" value={formData.profilePicture} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium">Ime Tvrtke</label>
          <input type="text" id="name" name="name" className="border p-2 rounded" placeholder="Ime tvrtke" value={formData.name} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="tagline" className="font-medium">Slogan</label>
          <input type="text" id="tagline" name="tagline" className="border p-2 rounded" placeholder="Slogan" value={formData.tagline} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="companySize.nameHr" className="font-medium">Veličina Tvrtke</label>
          <input type="text" id="companySize.nameHr" name="companySize.nameHr" className="border p-2 rounded" placeholder="Veličina tvrtke" value={formData.companySize.nameHr} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="headquarters" className="font-medium">Sjedište</label>
          <input type="text" id="headquarters" name="headquarters" className="border p-2 rounded" placeholder="Sjedište" value={formData.headquarters} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="industry.nameHr" className="font-medium">Industrija</label>
          <input type="text" id="industry.nameHr" name="industry.nameHr" className="border p-2 rounded" placeholder="Industrija" value={formData.industry.nameHr} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="specialties" className="font-medium">Specijalnosti</label>
          <input type="text" id="specialties" name="specialties" className="border p-2 rounded" placeholder="Specijalnosti" value={formData.specialties} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="website" className="font-medium">Web Stranica</label>
          <input type="text" id="website" name="website" className="border p-2 rounded" placeholder="Web stranica" value={formData.website} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-medium">Telefon</label>
          <input type="text" id="phone" name="phone" className="border p-2 rounded" placeholder="Telefon" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium">Opis</label>
          <ReactQuill theme="snow" value={formData.description} onChange={handleQuillChange} className="border p-2 rounded" />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Podnesi</button>
      </form>
    </div>
      </>
  );
}

export default Dashboard;
