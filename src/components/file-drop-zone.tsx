"use client"
import {ReactNode, useCallback, MouseEvent} from "react";
import {useDropzone} from "react-dropzone";

interface Props {
    children: ReactNode;
}

export default function FileDropZone({ children }: Props){
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log("Dropped fileds", acceptedFiles);
    },[]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            className={`w-full h-full relative border-0 rounded-lg flex justify-center items-center ${
                isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
            }`}
        >
            <input {...getInputProps()} />

            {isDragActive && (
                    <p className="absolute inset-0 w-full h-full bg-black-100 blur-2xl">Drop the files here...</p>
            ) }

            <section className={"w-full h-full"}
                onClick={(e: MouseEvent) => e.stopPropagation()}
            >
                {children}
            </section>
        </div>
    )
}