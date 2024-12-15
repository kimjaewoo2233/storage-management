import axios from 'axios';

/**
 * @note 파일 업로드
 */
export function uploadFileToServer(
  file: File,
  updateProgress: (fileName: string, progress: number) => void,
) {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post('/api/document/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (event) => {
      if (event.total) {
        const progess = Math.round((event.loaded / event.total) * 100);
        updateProgress(file.name, progess);
      }
    },
  });
}
