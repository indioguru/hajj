export const SocialIcon = ({ url, logo, logo_hover }) => {
  return (
    <a className="group relative cursor-pointer ga4-call_to_action-contacto-rrss" href={url} target="_blank">
      <img className="w-[40px] mr-5" src={logo} alt="icon social media" />

      <img
        className="absolute top-0 w-[40px] mr-5 opacity-0 transition-all duration-500 group-hover:opacity-100 "
        src={logo_hover}
        alt="icon social media"
      />
    </a>
  );
};
