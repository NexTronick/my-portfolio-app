import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";
export default function Icons() {
  return (
    <div className="fixed z-30 bottom-0" style={{ left: "5%" }}>
      <div>
        <a
          href="https://github.com/NexTronick"
          target="_blank"
          className="max-h-10"
        >
          <BsGithub
            size="25"
            className="text-cyan hover:text-cyan-dark my-10 hover:-translate-y-1"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/natraj-niranjan-padwani-6587b1223/"
          target="_blank"
          className="max-h-10"
        >
          <BsLinkedin
            size="25"
            className="text-cyan hover:text-cyan-dark my-10 hover:-translate-y-1"
          />
        </a>
        <a
          href="https://twitter.com/PadwaniNatraj"
          target="_blank"
          className="max-h-10"
        >
          <BsTwitter
            size="25"
            className="text-cyan hover:text-cyan-dark my-10 hover:-translate-y-1"
          />
        </a>
        <a
          href="https://www.instagram.com/natrajpadwani.develops/"
          target="_blank"
          className="max-h-10"
        >
          <BsInstagram
            size="25"
            className="text-cyan hover:text-cyan-dark my-10 hover:-translate-y-1"
          />
        </a>
        <a href="mailto:natrajpadwani.contact@gmail.com" className="max-h-10">
          <MdContactPage
            size="30"
            className="text-cyan hover:text-cyan-dark mt-10 mb-4 hover:-translate-y-1"
          />
        </a>
      </div>
      <div className="bg-cyan-dark h-32 w-1 mx-auto"></div>
    </div>
  );
}
