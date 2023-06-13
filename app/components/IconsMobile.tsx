import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";
export default function IconsMobile() {
  return (
    <div className="" id="m-icons">
      <a href="https://github.com/NexTronick" target="_blank">
        <BsGithub
          size="25"
          className="inline-block text-cyan hover:text-cyan-dark mx-2 hover:-translate-y-1"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/natraj-niranjan-padwani-6587b1223/"
        target="_blank"
      >
        <BsLinkedin
          size="25"
          className="inline-block text-cyan hover:text-cyan-dark mx-2 hover:-translate-y-1"
        />
      </a>
      <a href="https://twitter.com/PadwaniNatraj" target="_blank">
        <BsTwitter
          size="25"
          className="inline-block text-cyan hover:text-cyan-dark mx-2 hover:-translate-y-1"
        />
      </a>

      <a
        href="https://www.instagram.com/natrajpadwani.develops/"
        target="_blank"
      >
        <BsInstagram
          size="25"
          className="inline-block text-cyan hover:text-cyan-dark mx-2 hover:-translate-y-1"
        />
      </a>

      <a href="mailto:natrajpadwani.contact@gmail.com">
        <MdContactPage
          size="30"
          className="inline-block text-cyan hover:text-cyan-dark mx-2 hover:-translate-y-1"
        />
      </a>
    </div>
  );
}
