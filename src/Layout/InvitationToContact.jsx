import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Link } from "react-scroll";
import { useAnimationScroll } from "../Hooks/useAnimationScroll";
import { useLanguaje } from "../Hooks/useLanguaje";

export const InvitationToContact = ({
  boton_text,
  boton_text_ENG,
  text_ENG,
  text,
  styles,
}) => {
  useAnimationScroll("invitation-to-contact", "active_animation");
  // useAnimationScroll("hr_item_in", "w-full");

  const { lang } = useLanguaje();

  return (
    <div className={`${styles} lg:max-w-[75%] mb-40  `}>
      <Link
        to="footer"
        smooth={true}
        speed="500"
        className={`lg:block inline-block text-2xl lg:text-5xl px-5 pt-[3px] pb-[0px] mb-[2px] text-center eleanor-light w-fit cursor-pointer transition-all duration-500 border hover:scale-100 hover:text-5xl 
        rounded-[100px] 
        lg:bg-transparent
        `}
      >
        {lang === "eng" ? <> {boton_text_ENG}</> : <> {boton_text}</>}
      </Link>
      <div className="flex flex-row-reverse w-full">
        <hr className="hidden lg:block hr_item_in duration-500 w-full " />
      </div>
      {/* lines of css are wrote in base.scss */}
      {lang === "eng" ? (
        <>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className="content_info"
          >
            {text_ENG}
          </ReactMarkdown>
        </>
      ) : (
        <>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className="content_info"
          >
            {text}
          </ReactMarkdown>
        </>
      )}
    </div>
  );
};
