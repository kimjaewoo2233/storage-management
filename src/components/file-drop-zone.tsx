'use client';
import { ReactNode, useCallback, MouseEvent, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useToast } from '@/hooks/use-toast';

interface Props {
  children: ReactNode;
}

interface UploadProgress {
  fileName: string;
  progress: number;
}

export default function FileDropZone({ children }: Props) {
  const { toast } = useToast();

  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);

  const updateProgress = ({ fileName, progress }: UploadProgress) => {
    setUploadProgress((prev) => {
      const existing = prev.find((item) => item.fileName === fileName);
      if (existing) {
        return prev.map((item) =>
          item.fileName === fileName ? { ...item, progress } : item,
        );
      } else {
        return [...prev, { fileName, progress }];
      }
    });
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    console.log('Dropped fileds', acceptedFiles);
    const uploadPromises = acceptedFiles.map(async (file) => {
      if (file.size > 50 * 1024 * 1024) {
        return toast({
          description: `${file.name} is too large. Max file size is 50MB.`,
          className: '!z-[100000] !bg-white-100 !rounded-[10px] !important',
        });
      }
    });
    await Promise.all(uploadPromises);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`w-full h-full relative border-0 rounded-lg flex justify-center items-center ${
        isDragActive ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />

      {isDragActive && (
        <p className='absolute inset-0 w-full h-full bg-black-100 blur-2xl'>
          Drop the files here...
        </p>
      )}

      <section
        className={'w-full h-full'}
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        {children}
      </section>
    </div>
  );
}
