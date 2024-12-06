import '../css/Modal.css'

const ContentModal = ({ title, description, files }: { title: string, description: string, files: { img: Array<string> } }) => {
    console.log(files)
    return (
        <div className="modal-content">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                <img src="https://camo.githubusercontent.com/760f65278e85ed9d69106473ae2db04c2c2f088d84ab1123d1ce7da71de1c36e/68747470733a2f2f757070792e696f2f696d672f6c6f676f2e737667" alt="banana" />
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-base font-semibold text-gray-900" id="modal-title">{title}</h3>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                    <div className="text-sm text-gray-500 w-[40%]">
                        {files.img.map((img: string, i: number) =>
                            <img src={img} key={i} />
                        )}
                    </div>
                </div>
            </div>
        </div>)
}
export default ContentModal