import { SocialIcon } from "./SocialIcon";

export const SocialMedia = ({ color, styles = "flex justify-end" }) => {
  return (
    <section className={styles}>
      <div className="w-fit flex">
        {color === "white" ? (
          <>
            <SocialIcon
              logo="/assets/social/facebook.png"
              logo_hover="/assets/social/facebook_hover.png"
            />
            <SocialIcon
              logo="/assets/social/pinterest.png"
              logo_hover="/assets/social/pinterest_hover.png"
            />
            <SocialIcon
              logo="/assets/social/instagram.png"
              logo_hover="/assets/social/instagram_hover.png"
            />
          </>
        ) : (
          <>
            <SocialIcon
              logo="/assets/social/fb_negro.png"
              logo_hover="/assets/social/facebook_hover.png"
            />
            <SocialIcon
              logo="/assets/social/pinterest_negro.png"
              logo_hover="/assets/social/pinterest_hover.png"
            />
            <SocialIcon
              logo="/assets/social/instagram_negro.png"
              logo_hover="/assets/social/instagram_hover.png"
            />

          </>
        )}
      </div>
    </section>
  );
};
