import { useRef } from "react";

interface Props {
  title: string;
  image?: string;
}
export const FeaturedCard = ({ title, image }: Props) => {
  const modalRef = useRef(null);
  const handleClick = () => {
    if (modalRef) {
      (modalRef?.current!! as HTMLDialogElement).showModal();
    }
  };
  return (
    <button
      onClick={handleClick}
      className="flex p-0 border-none text-white duration-75 hover:scale-105 transition-transform cursor-pointer flex-col h-64 max-h-[80vh] w-60 items-center rounded-xl bg-gradient-to-t from-zinc-600 to-[#0af]"
    >
      <img
        src={image ?? "/src/assets/AstronautPotatos.jpg"}
        className="rounded-t-xl w-full h-5/6 object-cover"
        alt={`image called ${title} from ${image}`}
      />
      <strong className="bg-teal-900 w-full py-2 rounded-b-xl h-1/6">
        {title}
      </strong>
      <dialog
        ref={modalRef}
        className="medium:p-0 py-12 w-screen h-screen px-20 cursor-default backdrop-brightness-[0.3] rounded-xl border bg-transparent backdrop-blur-sm"
      >
        <section className="flex h-full max-h-screen w-full p-12 medium:p-0 flex-col justify-center items-center">
          <div className="modal-box rounded-xl max-h-[60vh] medium:p-0 small:flex-row border flex flex-col gap-7 items-center pointer-events-none bg-teal-600 px-12 py-7">
            <img src={image} className="h-60 max-h-[40vh] rounded-xl" alt="" />
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <form method="dialog" className="m-4 modal-backdrop">
            <button>cerrar</button>
          </form>
        </section>
      </dialog>
    </button>
  );
};
