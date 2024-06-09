import DialogWrapper from "../../../core/components/DialogWrapper.jsx";
import SimpleInput from "../../../core/components/form/SimpleInput.jsx";
import {useEffect, useState} from "react";
import SimpleTextarea from "../../../core/components/form/SimpleTextarea.jsx";
import AsyncSelect from "react-select/async";

import ImageContent from "./content/ImageContent.jsx";
import VideoContent from "./content/VideoContent.jsx";
import WebContent from "./content/WebContent.jsx";
import FileContent from "./content/FileContent.jsx";
import {getYoutubeId} from "../../utils/VideoHelper.js";
import ImageInput from "./inputs/ImageInput.jsx";
import VideoInput from "./inputs/VideoInput.jsx";
import FileInput from "./inputs/FileInput.jsx";
import WebInput from "./inputs/WebInput.jsx";

import skillService from "../../../core/services/skill.js";
import debounce from "debounce";

export default function ProjectEdit({ value, onCancel, onConfirm, isOpen }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState([]);
    const [contents, setContents] = useState([]);

    useEffect(() => {
        setTitle(value?.title || '');
        setDescription(value?.description || '');
        setSkills(value?.skills || []);
        setContents(value?.contents || []);
    }, [isOpen]);


    const handleContentDescriptionChange = (index, newDescription) => {
        const updatedContents = contents.map((content, i) =>
            i === index ? { ...content, description: newDescription } : content
        );

        setContents(updatedContents);
    };

    const addImageContent = (image) => {
        if (!image) return

        const imageContent = {
            type: 'image',
            description: '',
            url: URL.createObjectURL(image),
            file: image,
        };

        setContents([...contents, imageContent]);
    }

    const addNewFileContent = (file) => {
        if (!file) return

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
        if (!videoLink) return

        const videoContent = {
            type: 'video',
            description: '',
            url: `https://www.youtube.com/embed/${getYoutubeId(videoLink)}`
        };

        setContents([...contents, videoContent]);
    }

    const addNewWebContent = (webContent) => {
        if (!webContent?.url) return

        setContents([...contents, {type: 'web', ...webContent}]);
    }

    const removeContent = (index) => {
        const updatedContents = contents.filter((content, i) => i !== index);
        setContents(updatedContents);
    }

    const saveProject = () => {
        const project = {
            id: value?.id,
            title,
            description,
            skills,
            contents
        }
        onConfirm(project);
    }

    const debouncedFetchSkills = debounce((search, callback) => {
        skillService.fetch(search).then((result) => callback(result))
    }, 500);

  return (
      <DialogWrapper title="Uredi projekt" isOpen={isOpen} onConfirm={saveProject} onCancel={onCancel} fullscreen={true}>
          <div className="flex flex-col gap-2 lg:px-32 xl:px-64">
              <SimpleInput label="Naziv projekta" placeholder="Unesite naziv projekta..." value={title} onChange={setTitle}/>
              <SimpleTextarea label="Opis projekta" placeholder="Unesite opis projekta..." value={description} onChange={setDescription} className="h-32"/>

              <label htmlFor="project-skills" className="font-semibold">Vještine</label>
              <AsyncSelect
                  id="project-skills"
                  value={skills}
                  isMulti={true}
                  closeMenuOnSelect={false}
                  placeholder="Odaberite vještine..."
                  loadOptions={debouncedFetchSkills}
                  getOptionValue={(option) => `${option['id']}`}
                  getOptionLabel={(option) => `${option['name']}`}
                  onChange={setSkills}
                  defaultOptions={skills}
              />

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