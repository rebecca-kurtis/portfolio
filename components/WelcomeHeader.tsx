import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WelcomeHeaderProps {

}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({}) => {
    return (
      <div className="welcomeHeader">
        <div className="welcomeImageBlock">
        <Image
              src="/images/pexels-igor-haritanovich-1687341-large.jpg"
              className="welcomeImage"
              fill={true}
              alt="fern-leaves"
            />
        </div>
        <div className="welcomeTextBlock">
          <div className="welcomeHeaderSpacer"></div>
          <h1> Welcome!</h1>
          <p> My name is Rebecca and I am a full-stack developer. Transitioning from the marketing world, I bring an eye for detail and experience in project management. I love working on creative designs, and have the ability to adapt to new technologies easily.</p>
          <Link href={'#about'} className="learnMore">Learn more about me</Link>
        </div>
      </div>
    );
}