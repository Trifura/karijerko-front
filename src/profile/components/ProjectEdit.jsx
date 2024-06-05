import DialogWrapper from "../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../core/components/form/SimpleInput.jsx";
import {useState} from "react";
import SimpleTextarea from "../../core/components/form/SimpleTextarea.jsx";
import Select from "react-select";

import ImageIcon from "../../assets/icons/Image.svg"
import VideocamIcon from "../../assets/icons/Videocam.svg"
import LinkIcon from "../../assets/icons/Link.svg"
import FileIcon from "../../assets/icons/File.svg"
import ImageContent from "./project/ImageContent.jsx";
import VideoContent from "./project/VideoContent.jsx";
import WebContent from "./project/WebContent.jsx";
import FileContent from "./project/FileContent.jsx";

const skillOptions = [
    {
        value: 'javascript',
        label: 'JavaScript'
    },
    {
        value: 'python',
        label: 'Python'
    },
    {
        value: 'java',
        label: 'Java'
    },
    {
        value: 'c++',
        label: 'C++'
    },
    {
        value: 'c#',
        label: 'C#'
    },
    {
        value: 'php',
        label: 'PHP'
    },
    {
        value: 'ruby',
        label: 'Ruby'
    },
    {
        value: 'swift',
        label: 'Swift'
    },
    {
        value: 'kotlin',
        label: 'Kotlin'
    },
    {
        value: 'typescript',
        label: 'TypeScript'
    },
    {
        value: 'html',
        label: 'HTML'
    },
    {
        value: 'css',
        label: 'CSS'
    },
    {
        value: 'sass',
        label: 'Sass'
    },
]

export default function ProjectEdit({ value, onCancel, onConfirm, isOpen }) {
    const [title, setTitle] = useState(value.title);
    const [description, setDescription] = useState(value.description);
    const [skills, setSkills] = useState(value.skills);
    const [contents, setContents] = useState(value.contents);

  return (
      <DialogWrapper title="Uredi projekt" isOpen={isOpen} onConfirm={onConfirm} onCancel={onCancel} fullscreen={true}>
          <div className="flex flex-col gap-2 lg:px-32 xl:px-64" style={{maxHeight: "74vh"}}>
              <SimpleInput label="Naziv projekta" placeholder="Unesite naziv projekta..." value={title} onChange={setTitle}/>
              <SimpleTextarea label="Opis projekta" placeholder="Unesite opis projekta..." value={description} onChange={setDescription} className="h-32"/>

              <label htmlFor="project-skills" className="font-semibold">Vještine</label>
              <Select id="project-skills" value={skills} isMulti={true} closeMenuOnSelect={false} placeholder="Odaberite vještine..." options={skillOptions} onChange={setSkills}  />

              <div className="flex flex-col gap-10">
                  {
                      contents.map((content, index) => {
                          switch (content.type) {
                              case 'image':
                                  return <ImageContent key={index} content={content}  />
                              case 'video':
                                  return <VideoContent key={index} content={content}  />
                              case 'web':
                                  return <WebContent key={index} content={content}  />
                              case 'file':
                                  return <FileContent key={index} content={content}  />
                              default:
                                  return null;
                          }
                      })
                  }
              </div>
              <div className="mt-4 border border-Primary border-dashed rounded-lg pt-10 pb-6 flex flex-col gap-5">
                  <div className="flex justify-center items-center gap-3">
                      <button className="border-2 border-Hare hover:border-Primary rounded-full w-10 h-10 flex justify-center items-center">
                          <img src={ImageIcon} alt="Upload image" className="w-5 h-5"/>
                      </button>
                      <button className="border-2 border-Hare hover:border-Primary rounded-full w-10 h-10 flex justify-center items-center">
                          <img src={VideocamIcon} alt="Upload vide" className="w-5 h-5"/>
                      </button>
                      <button className="border-2 border-Hare hover:border-Primary rounded-full w-10 h-10 flex justify-center items-center">
                          <img src={LinkIcon} alt="Attach web link" className="w-5 h-5"/>
                      </button>
                      <button className="border-2 border-Hare hover:border-Primary rounded-full w-10 h-10 flex justify-center items-center">
                          <img src={FileIcon} alt="Upload document" className="w-5 h-5"/>
                      </button>
                  </div>
                  <p className="font-medium text-center">Dodaj sadržaj</p>
              </div>


          </div>
      </DialogWrapper>
  );
}