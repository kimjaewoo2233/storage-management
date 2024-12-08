import FileDropZone from "@/components/file-drop-zone";


export default function DocumentPage() {
    return (
        <section className={"w-full h-full"}>
            <FileDropZone>
                <p>콘텐츠 요소</p>
            </FileDropZone>
        </section>
    )
}