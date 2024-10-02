import React from 'react';

export interface SmoothScrollingLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  targetId: string;
}

export const SmoothScrollingLink: React.FC<SmoothScrollingLinkProps> = ({
  targetId,
  ...props
}) => {
  const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={onClick}
      {...props}
      children={props.children}
    />
  );
};
