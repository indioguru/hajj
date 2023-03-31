import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Link } from "react-scroll";
import { useAnimationScroll } from "../Hooks/useAnimationScroll";

export const InvitationToContact = ({ boton_text, text, styles }) => {

  useAnimationScroll('invitation-to-contact', 'active_animation')
  return (
    <div className={`${styles} lg:max-w-[25%]`}>
      <Link
        smooth={true}
        speed={500}
        className={`inline-block text-2xl lg:text-4xl py-[0.5px] mt-6 text-center eleanor-light w-fit cursor-pointer hover:scale-110 hover:text-2xl `}
        to="footer"
      >
        {boton_text}
      </Link>
      {/* lines of css are wrote in base.scss */}
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        className="content_info"
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};
