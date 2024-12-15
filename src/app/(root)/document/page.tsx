import FileDropZone from '@/components/file-drop-zone';

export default function DocumentPage() {
  return (
    <section className={'w-full h-full'}>
      <FileDropZone>
        <section
          className={'w-full flex flex-row justify-between px-[40px] pt-4'}
        >
          <div className={'flex flex-col'}>
            <span className={'text-[46px] font-bold text-gray-700'}>
              Documentsㅇ
            </span>

            <span className={'text-gray-500'}>Total: 12h5GB</span>
          </div>

          <div className={'flex flex-row gap-3 items-center'}>
            <div className={'text-[14px]'}>Sort by</div>
            <div
              className={
                'w-[216px] bg-white-100 h-[44px] rounded-[6px] flex items-center px-[20px]'
              }
            >
              Date Created
            </div>
          </div>
        </section>
      </FileDropZone>
    </section>
  );
}
