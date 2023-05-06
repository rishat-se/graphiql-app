import Image from 'next/image';

export default function Footer() {
  const rsLogoHeight = 50;
  const rsLogoRatio = 2.78;
  return (
    <div>
      <a href="https://github.com/rishat-se/graphiql-app">GitHub</a>
      <p>2023</p>
      <a href="https://rs.school/react/">
        <Image
          src="https://rs.school/images/rs_school_js.svg"
          width={rsLogoHeight * rsLogoRatio}
          height={rsLogoHeight}
          alt="course logo"
        />
      </a>
    </div>
  );
}
