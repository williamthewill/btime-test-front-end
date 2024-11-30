import '../css/Modal.css'

const ContentModal = ({ title, description, img }: { title: string, description: string, img: string }) => {

    return (
        <div className="modal-content">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                <img src={img} alt="banana" />
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-base font-semibold text-gray-900" id="modal-title">{title}</h3>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
        </div>)
}
export default ContentModal