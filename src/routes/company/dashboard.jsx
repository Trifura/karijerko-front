import {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import Navbar from '../../core/components/Navbar';
import Footer from '../../core/components/Footer';
import SimpleInput from "../../core/components/form/SimpleInput.jsx";

import companyService from '../../company/services/index.js';
import companySizeService from "../../core/services/companySize.js";
import industryService from "../../core/services/industry.js";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import debounce from "debounce";
import skillService from "../../core/services/skill.js";


function Dashboard() {
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [headquarters, setHeadquarters] = useState('');
  const [industry, setIndustry] = useState('');
  const [skills, setSkills] = useState([]);
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [foundedAt, setFoundedAt] = useState('');

    const [companySizes, setCompanySizes] = useState([]);
    const [industries, setIndustries] = useState([]);

    useEffect(() => {
        companySizeService.fetch().then(data => {
            setCompanySizes(data);
        })

        industryService.fetch().then(data => {
            setIndustries(data);
        })

        companyService.fetchInfo().then(data => {
            setProfilePicture(data.profilePicture || '');
            setName(data.name || '');
            setTagline(data.tagline || '');
            setCompanySize(data.companySize || '');
            setHeadquarters(data.headquarters || '');
            setIndustry(data.industry || '');
            setSkills(data.skills || []);
            setWebsite(data.website || '');
            setPhone(data.phone || '');
            setDescription(data.description || '');
            setFoundedAt(data.foundedAt ? new Date(data.foundedAt).getFullYear() : '');
        })
    }, []);


  const saveInfo = async () => {
    const companyInfo = {
        profilePicture,
      name,
      tagline,
      companySize,
      headquarters,
      industry: industry || null,
      skills,
      website,
      phone,
      description,
      foundedAt: foundedAt ? new Date(foundedAt) : null,
    };

    await companyService.saveInfo(companyInfo);
  };

    const debouncedFetchSkills = debounce((search, callback) => {
        skillService.fetch(search).then((result) => callback(result))
    }, 500);

  return (
      <>

          <Navbar />
          <div className="mt-16 lg:mt-32 p-12 flex flex-col gap-2 lg:border-4 lg:max-w-4xl lg:mx-auto border-Swan rounded-3xl">
              <SimpleInput label="Profilna slika" placeholder="Unesite link slike..." value={profilePicture} onChange={setProfilePicture}/>
              <SimpleInput
                  label="Ime tvrtke"
                  placeholder="Unesite ime tvrtke..." value={name} onChange={setName}
              />
              <SimpleInput label="Slogan" placeholder="Unesite slogan..." value={tagline} onChange={setTagline}/>

              <div className="flex flex-col gap-1 mb-2">
                  <label id="company-size" className="font-semibold">Veličina tvrtke</label>
                  <Select
                      id="company-size"
                      placeholder="Odaberite veličinu tvrtke..."
                      value={companySize}
                      onChange={setCompanySize}
                      isSearchable={false}
                      options={companySizes}
                      getOptionLabel={(option) => option.nameHr}
                      getOptionValue={(option) => option.id}
                  />
              </div>

              <SimpleInput label="Sjedište" placeholder="Sjedište" value={headquarters} onChange={setHeadquarters}/>

              <div className="flex flex-col gap-1 mb-2">
                  <label id="company-size" className="font-semibold">Industrija</label>
                  <Select
                      id="company-size"
                      placeholder="Odaberite industriju..."
                      value={industry}
                      onChange={setIndustry}
                      isSearchable={true}
                      options={industries}
                      getOptionLabel={(option) => option.nameHr}
                      getOptionValue={(option) => option.id}
                  />
              </div>

              <div className="flex flex-col gap-1 mb-2">
                  <label id="company-size" className="font-semibold">Specijalnosti</label>
                  <AsyncSelect
                      id="project-skills"
                      value={skills}
                      isMulti={true}
                      closeMenuOnSelect={false}
                      placeholder="Pretražite specijalnosti."
                      loadOptions={debouncedFetchSkills}
                      getOptionValue={(option) => `${option.id}`}
                      getOptionLabel={(option) => `${option.name}`}
                      onChange={setSkills}
                      defaultOptions={skills}
                  />
              </div>
              <SimpleInput label="Web Stranica" placeholder="Unesite link..." value={website} onChange={setWebsite}/>
              <SimpleInput label="Telefon" placeholder="Unesite broj telefona..." value={phone} onChange={setPhone}/>
              <ReactQuill label="Opis" placeholder="Unesite opis..." value={description} onChange={setDescription}/>
              <SimpleInput label="Osnovano godine" type="number" placeholder="Unesite godinu..." value={foundedAt}
                           onChange={setFoundedAt}
              />

              <button type="submit" className="p-2 w-full bg-Primary text-white rounded-xl" onClick={saveInfo}>Spremi
              </button>
          </div>
          <div className='shadow'>
              <Footer/>
          </div>
      </>
  );
}

export default Dashboard;
