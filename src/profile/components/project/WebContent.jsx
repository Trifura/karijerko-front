import ContentOptions from "./ContentOptions.jsx";
import ArticleIcon from "../../../assets/icons/Article.svg";
import {useEffect, useState} from "react";

export default function ImageContent({ content, isEditable = false }) {

    const [domain, setDomain] = useState("");

    useEffect(() => {
        const url = new URL(content.url);
        let hostname = url.hostname;

        if (hostname.startsWith('www.')) {
            hostname = hostname.slice(4);
        }

        setDomain(hostname);
    }, [content.url]);
    return (
        <div className="relative flex gap-2 items-center flex-col lg:flex-row">
            {isEditable && <ContentOptions/>}
            <div className="w-full flex items-center gap-4 border border-Swan rounded-xl py-4 px-5 lg:px-10">
                <img src={ArticleIcon} alt="Icon" className="w-16 h-16"/>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">

                        <a href={content.url} target="_blank" className="font-semibold text-Primary underline w-fit">
                            {content.title}
                        </a>
                        <span className="text-sm font-medium">{content.description}</span>
                    </div>

                    <span className="text-sm text-Ironside font-medium">{domain}</span>
                </div>
            </div>
        </div>
    )
}