import DialogWrapper from "../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../core/components/form/SimpleInput.jsx";
import {useState} from "react";
import SimpleTextarea from "../../core/components/form/SimpleTextarea.jsx";
import Select from "react-select";

import ImageContent from "./project/ImageContent.jsx";
import VideoContent from "./project/VideoContent.jsx";
import WebContent from "./project/WebContent.jsx";
import FileContent from "./project/FileContent.jsx";
import {getYoutubeId} from "../utils/VideoHelper.js";
import ImageInput from "./project/inputs/ImageInput.jsx";
import VideoInput from "./project/inputs/VideoInput.jsx";
import FileInput from "./project/inputs/FileInput.jsx";
import WebInput from "./project/inputs/WebInput.jsx";

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


    const handleContentDescriptionChange = (index, newDescription) => {
        const updatedContents = contents.map((content, i) =>
            i === index ? { ...content, description: newDescription } : content
        );

        setContents(updatedContents);
    };

    const addImageContent = (image) => {
        if (!image) throw new Error('Image is required');

        const imageContent = {
            type: 'image',
            description: '',
            url: URL.createObjectURL(image),
            file: image,
        };

        setContents([...contents, imageContent]);
    }

    const addNewFileContent = (file) => {
        if (!file) throw new Error('File is required');

        const fileContent = {
            type: 'file',
            description: '',
            title: file.name,
            url: URL.createObjectURL(file),
            file,
        };

        setContents([...contents, fileContent]);
    }

    const addNewVideoContent = (videoLink) => {
        const videoContent = {
            type: 'video',
            description: '',
            url: `https://www.youtube.com/embed/${getYoutubeId(videoLink)}`
        };

        setContents([...contents, videoContent]);
    }

    const addNewWebContent = (webLink) => {
        if (!webLink) throw new Error('Web link is required');

        const webContent = {
            type: 'web',
            url: webLink,
            title: 'Placeholder title',
            description: 'Placeholder description vamo tamo'
        };

        setContents([...contents, webContent]);
    }

    const removeContent = (index) => {
        const updatedContents = contents.filter((content, i) => i !== index);
        setContents(updatedContents);
    }

    const saveProject = () => {
        onConfirm({
            title,
            description,
            skills,
            contents
        });
    }

  return (
      <DialogWrapper title="Uredi projekt" isOpen={isOpen} onConfirm={saveProject} onCancel={onCancel} fullscreen={true}>
          <div className="flex flex-col gap-2 lg:px-32 xl:px-64">
              <SimpleInput label="Naziv projekta" placeholder="Unesite naziv projekta..." value={title} onChange={setTitle}/>
              <SimpleTextarea label="Opis projekta" placeholder="Unesite opis projekta..." value={description} onChange={setDescription} className="h-32"/>

              <label htmlFor="project-skills" className="font-semibold">Vještine</label>
              <Select id="project-skills" value={skills} isMulti={true} closeMenuOnSelect={false} placeholder="Odaberite vještine..." options={skillOptions} onChange={setSkills}  />

              <div className="flex flex-col gap-5 mt-10">
                  {
                      contents.map((content, index) => {
                          switch (content.type) {
                              case 'image':
                                  return <ImageContent
                                      key={index}
                                      content={content}
                                      setDescription={(description) => {handleContentDescriptionChange(index, description)}}
                                      isEditable={true}
                                      className="mb-5 lg:mb-14"
                                      onRemove={() => removeContent(index)}
                                  />
                              case 'video':
                                  return <VideoContent
                                      key={index}
                                      content={content}
                                      className="mb-5 lg:mb-14"
                                      isEditable={true}
                                      setDescription={(description) => {handleContentDescriptionChange(index, description)}}
                                      onRemove={() => removeContent(index)}
                                  />
                              case 'web':
                                  return <WebContent
                                      key={index}
                                      content={content}
                                      isEditable={true}
                                      onRemove={() => removeContent(index)}
                                  />
                              case 'file':
                                  return <FileContent
                                      key={index}
                                      content={content}
                                      isEditable={true}
                                      setDescription={(description) => {handleContentDescriptionChange(index, description)}}
                                      onRemove={() => removeContent(index)}
                                  />
                              default:
                                  return null;
                          }
                      })
                  }
              </div>
              <div className="mt-4 border border-Primary border-dashed rounded-lg pt-10 pb-6 flex flex-col gap-5">
                  <div className="flex justify-center items-center gap-3">
                      <ImageInput onInput={addImageContent} />
                      <VideoInput onInput={addNewVideoContent} />
                      <WebInput onInput={addNewWebContent} />
                      <FileInput onInput={addNewFileContent} />
                  </div>
                  <p className="font-medium text-center">Dodaj sadržaj</p>
              </div>
          </div>
      </DialogWrapper>
  );
}