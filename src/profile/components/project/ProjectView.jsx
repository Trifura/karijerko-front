import DialogWrapper from "../../../core/components/DialogWrapper.jsx";
import {useEffect, useState} from "react";
import ImageContent from "./content/ImageContent.jsx";
import VideoContent from "./content/VideoContent.jsx";
import WebContent from "./content/WebContent.jsx";
import FileContent from "./content/FileContent.jsx";

export default function ProjectView({ value, onCancel, isOpen }) {
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

  return (
      <DialogWrapper title={title} isOpen={isOpen} onCancel={onCancel} fullscreen={true} hideActions={true}>
          <div className="flex flex-col gap-2 lg:px-32 xl:px-64">
              <h1 className="text-3xl font-semibold">{title}</h1>
              <p className="font-medium">
                  {description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                  {
                      skills.map((skill) => (
                          <div key={skill.id} className="px-4 py-1.5 rounded-full bg-Swan text-sm font-semibold">
                              {skill.name}
                          </div>
                      ))
                  }
              </div>

              <div className="flex flex-col gap-5 mt-10">
                  {
                      contents.map((content, index) => {
                          switch (content.type) {
                              case 'image':
                                  return <ImageContent
                                      key={index}
                                      content={content}
                                      className="mb-5 lg:mb-14"
                                  />
                              case 'video':
                                  return <VideoContent
                                      key={index}
                                      content={content}
                                      className="mb-5 lg:mb-14"
                                  />
                              case 'web':
                                  return <WebContent
                                      key={index}
                                      content={content}
                                  />
                              case 'file':
                                  return <FileContent
                                      key={index}
                                      content={content}
                                  />
                              default:
                                  return null;
                          }
                      })
                  }
              </div>
          </div>
      </DialogWrapper>
);
}