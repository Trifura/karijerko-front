import ContentOptions from "./ContentOptions.jsx";
import {useEffect, useState} from "react";

export default function WebContent({ content, isEditable = false, onRemove }) {

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
            {isEditable && <ContentOptions onRemove={onRemove}/>}
            <div className="w-full flex items-center gap-4 border border-Swan rounded-xl py-4 px-5 lg:px-10">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">

                        <a href={content.url} target="_blank" className="font-semibold text-[#1F57C3] text-lg hover:underline w-fit">
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